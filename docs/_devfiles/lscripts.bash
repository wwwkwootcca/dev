#! /bin/bash
# ${ourdir} = our build root, i.e. where _config.yml resides.

# lscripts.bash - set some functions (== commands, aka 'aliases') to simplify
#  getting on with your jekyll day.
#
# Since cascading config files don't work (bug!), concatenate config files.
# _config-base.yml - everything including the kitchen sink.
# _config-dev.yml  - overrides. e.g. html_compress: true in _config-base.yml,
#                                    html_compress:false in _config-dev.yml
# _config-prod.yml - underrides (?) e.g. in prep for ftp _site ftp://mywebsite.command
#


# Main functions:
#
# updateit - 'bundle update'
#
# prodit    - jekyll build site deployment  version ('PRODuction IT').
# buildit   - jekyll build site development version
# serveit   - jekyll serve site, locally, watch, incremental.
#
# pushit    - (incomplete) git push site - presumably run some checks, etc.
#
# checkfile         - htmlproofer a file (or entire _site)
# filterhtmlignores - filter out some htmlproofer messages
#                     e.g. checkfile index.html | filterhtmlignores
#
# healthcheckit - github-pages health-check
#
#
# Minor functions:
#
# showfunc - quick and dirty, equivalent to set | grep x or env | grep x for bash functions.
#
# Housekeeping functions:
#
# pause    - quick and dirty, press any key to continue or Ctrl-C to exit, function.
# lexit	 - Supposed to let us exit, without having to worry whether we're sourced or not.
#

# Rewrite these some day, as:
# mycmd=$1
# myargs=$*
# function setitup() # /* function setitup( char *cmd, char *args[] ) */
# {
#		call set and check dir()
#		*mycmd( myargs )
# }  # /* function setitup( char *cmd, char *args[] ) */
#
# setitup( *mycmdsub(mycmd), myargs );
#

set +v +x

unset pause
unalias pause 2> /dev/null || true
function pause() { read -rN1 -p $'\n'"Paused: Press enter to continue, Ctrl-C to exit ..."$'\n' || true ; }

function lexit() { exit ; }

#set -x
iam=${BASH_ARGV[0]}
echo -e "\ni is $iam"
pushd $(dirname ${iam}) > /dev/null
cd ..
ourdir=${PWD}
popd > /dev/null
echo -e "\nBuilder root dir is ${ourdir}"

if [ ! -f ${ourdir}/_config.yml ] ; then
{
	echo -e "\n_config.yml file not found in expected location. Don't trust these commands. You will want to cd and rerun \n '${iam}'."
	pause
}
else
{
	echo -e "\nSUCCESS: _config.yml file found in expected location. Good to go."
} fi



function showfunc()
{
	echo ; set | sed -n -e "/^${1}/,/}$/ p"
} # function showfunc()


unalias  updateit 2> /dev/null || true
function updateit()
{
	bundle update
} # function updateit()


#
# BUILDIT builds jekyll.environment=development for local development / debugging and serving.
# - takes _config-base.yml, appends config-dev.yml, and places the result in _config.yml
# (where jekyll can not be unhappy [buggy] with (no longer) cascaded config files, or config files in non-default locations.
# github  runs   jekyll.environment=production
# buildpro runs  jekyll.environment=production, copies _config-base.yml _config.yml, in preparation for ftp'ing. (or whatever).
# DO NOT FORGET TO 'cp _config-base.yml _config.yml'!
#

unalias  prodit 2> /dev/null || true
unset -f buildprod
function prodit()
{
	if ! pushd ${ourdir} ; then
	{
		echo -e "ERROR! Unable to pushd into our _config.yml directory."
		pause
	} fi

	if [ ! -f "./_config.yml" ] ; then
	{
		echo -e "\nFAILURE: _config.yml file not found in current directory."
		pause
	} fi

	echo -e "\nSUCCESS: cd'ed to build directory root - _config.yml file found.\n"

	cat _config-base.yml _config-prod.yml > _config.yml

	echo -e "\n\nAbout to locally build and serve production deployment version of site."
	echo -e "\nTest things, and when ready ftp _site/dev/* files to server.\n"

	set -x ; JEKYLL_ENV=production DISABLE_WHITELIST=true bundle exec jekyll serve -w -I --future --lsi --drafts --unpublished ${*} ; set +x

	popd > /dev/null

} # function  prodit()


unalias  buildit 2> /dev/null || true
function buildit()
{
	if ! pushd ${ourdir} ; then
	{
		echo -e "ERROR! Unable to pushd into our _config.yml directory."
		pause
	} fi

	if [ ! -f "./_config.yml" ] ; then
	{
		echo -e "\nFAILURE: _config.yml file not found in current directory."
		pause
	} fi

	echo -e "\nSUCCESS: cd'ed to build directory root - _config.yml file found.\n"

	cat _config-base.yml _config-dev.yml > _config.yml

	set -x ; DISABLE_WHITELIST=true bundle exec jekyll build --future --lsi --drafts --unpublished ${*} ; set +x

	popd > /dev/null

} # function  buildit()


unalias  serveit 2> /dev/null || true
function serveit()
{
	if ! pushd ${ourdir} ; then
	{
		echo -e "ERROR! Unable to pushd into our _config.yml directory."
		pause
	} fi

	if [ ! -f "./_config.yml" ] ; then
	{
		echo -e "\nFAILURE: _config.yml file not found in current directory."
		pause
	} fi

	echo -e "\nSUCCESS: cd'ed to build directory root - _config.yml file found.\n"

	cat _config-base.yml _config-dev.yml > _config.yml

	set -x ; DISABLE_WHITELIST=true bundle exec jekyll serve -w -I  --skip-initial-build --future --lsi --drafts --unpublished ${*} ; set +x

	popd > /dev/null

} # function  serveit()

htmlproofercmd="bundle exec htmlproofer"
htmlprooferopts="      \
--assume-extension     \
--check-external-hash  \
--check-favicon        \
--check-html           \
--check-opengraph      \
--report-invalid-tags  \
--report-missing-names \
--report-script-embeds \
"
# --enforce-https
# --log-level ( debug, info, warn, error, fatal )
# --check-img-http - not used.

# e.g. checkfile index.html | filterhtmlignores - for _site/index.html.

# Couldn't get --url-swap \'/dev/:/\' to quote correctly. Gave up.


function filterignoredhtmlfiles()
{
	#!/bin/bash
	#
	# Except the _site/Test/testpage.html errors from the error listing.
	# - it is, after all, a test page.
	#
	# This was MUCH harder than it should have been.
	#
	# 1. Gave up on sed - although /aaa/,/bbb/ qualified the range, /bbb/ is
	#    swallowed up in the (pattern space in the) process. e.g. '- /' becomes
	#    '/'. Lines start with '/blah', instead of '- /blah'.
	#
	# 2. a) Because of the * in the output, bash was expanding it into the list of
	#       files in the current directory. Thus, set -o noglob
	#
	#    b) Bash also compressed the output '  *  ' to ' * ', thus, IFS=''
	#
	#    c) EVEN WITH IFS='', "${REPLY:1:5}" = ' * E', thus the test is
	#       "${REPLY:1:3}" = ' * '
	#

	set -o noglob # aka set -f
	IFS=''
	while read -r; do
	{
	#	echo ":Got line: '"${REPLY}"'"
		if [[
				"${REPLY}" != "- /data/dev.www.kwootc.ca/docs/_site/dev/Test/testpage.html"
			&&	"${REPLY}" != "- /data/dev.www.kwootc.ca/docs/_site/dev/Test/2017-01-27-Test_Site-Variables.html"
		]]; then
		{
	#		echo ":Didn't find line: Echoing."
			echo "${REPLY}"
		};
		else
		{
	#		echo ":Found line: Echoing."
			echo "${REPLY}"
			while read -r; do
			{
	#			echo ":Got sub-line: '"${REPLY}"', ['"${REPLY:1:5}"'], IFS='${IFS}'"
	#			[[ "${REPLY:1:3}" != ' * ' ]] && echo ":Line desired, breaking." && break
				[[ "${REPLY:1:3}" != ' * ' ]] && break
			};done
			echo "${REPLY}"
		};fi
	};done
	set +o noglob # aka set +f
} #  filterignoredhtmlfiles()

function filterhtmlignores()
{
	grep -v -e '^  \*  Tag footer invalid ' 	\
	        -e '^  \*  Tag header invalid ' 	\
	        -e '^  \*  Tag main invalid '   	\
	        -e '^  \*  Tag article invalid '	\
	        -e '^  \*  Tag time invalid '   	\
	| filterignoredhtmlfiles
#	        -e '^     <a href="'				\
#			-e '^  \*  internally linking to '	\
#			-e ' which does not exist (line '	\
#	| sed -n -e "/^- \/data\/dev.www.kwootc.ca\/docs\/_site\/Test\/testpage.html$/,/^- / c - /data/dev.www.kwootc.ca/docs/_site/Test/testpage.html\n\<htmlproofer processing skipped on this test file.\>\n-"
#	cat /tmp/scratch.txt | sed -n -e "/^- \/data\/dev.www.kwootc.ca\/docs\/_site\/Test\/testpage.html$/,/^  \*  /! c /data/dev.www.kwootc.ca/docs/_site/Test/testpage.html\n\<htmlproofer processing skipped on this test file.\>\n"
} #  filterhtmlignores()

function checkfile()
{
#	ln no longer needed, default baseurl: /dev, destination:  ./_site/dev set.
	ln -s /data/dev.www.kwootc.ca/docs/_site /data/dev.www.kwootc.ca/docs/_site/dev
	set -x ; { ${htmlproofercmd} ${ourdir}/_site/${*} ${htmlprooferopts} 2>&1 ; }; set +x
} # function  checkfile()


function healthcheckit()
{
	if ! pushd ${ourdir} ; then
	{
		echo -e "ERROR! Unable to pushd into our _config.yml directory."
		pause
	} fi

	if [ ! -f "./_config.yml" ] ; then
	{
		echo -e "\nFAILURE: _config.yml file not found in current directory."
		pause
	} fi

	echo -e "\nSUCCESS: cd'ed to build directory root - _config.yml file found.\n"

	bundle exec github-pages health-check

	popd > /dev/null

} # function healthcheckit()


function pushit()
{
	echo # pushd will cause dir (s) to be echoed.

	if ! pushd ${ourdir} ; then
	{
		echo -e "ERROR! Unable to pushd into our _config.yml directory."
		pause
	} fi

	if [ ! -f "./_config.yml" ] ; then
	{
		echo -e "\nFAILURE: _config.yml file not found in current directory."
		pause
	} fi

	echo -e "\nSUCCESS: cd'ed to build directory root - _config.yml file found.\n"

	cat _config-base.yml > _config.yml

	set -x ; echo -e "\n*** Scripting for this command yet to be written. Get on it. ***\n" ; set +x

	git status

		echo
		echo -e "\nYou will want to 'git status'."
		echo -e "\nWhen ready, 'git commit'.\n(git commit -m \"Commit message.\")"
		echo -e "\n'git log' ..."
		echo -e "\n'git push -u origin' ..."
		echo -e "\nIf you are working from a branch, go to PR on github. Merge.\n(Don't forget to confirm the merge.)"
		echo -e "\n'git checkout master'. 'git pull'."

	echo
	popd > /dev/null

} # function pushit()



#set -x

alias checkit="pushd ${ourdir} && bundle exec htmlproofer _site --assume-extension --check-favicon --check-html --check-img-http --check-opengraph --report-invalid-tags --report-missing-names --report-script-embeds 2>&1 | less ; popd > /dev/null"
alias mychecks='checkfile | filterhtmlignores'
set +v +x ; echo

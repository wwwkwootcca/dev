#! /bin/bash
# Generate ../_includes/varlist.md for Test/index.md to include.
myoutfile="../_includes/knownjekyllvars.md"
myinfilebase="./knownjekyllvars"

# Liquid collections are site, page, layout, content, paginator

function exitscript() { exit; }

function displiqvar()
{
	for collection in a b c ; do
		echo '<hr><hr><hr>'
		echo ${collection}:
		for element in aa bb cc ; do
			echo '<hr><hr>'
			echo "{%raw%}${collection}.${element}{%endraw%} = \`${collection}.${element}\`"
			echo '<hr>'
			echo "{%raw%}${collection}.${element}[0]{%endraw%} = \`${collection}.${element}[0]\`"
			echo "{%raw%}${collection}.${element}[1]{%endraw%} = \`${collection}.${element}[1]\`"
		done
	done
} # displiqvar()

rm -v ${myinfilebase}.list~  ${myinfilebase}.sorted~
cp -v ${myinfilebase}.list   ${myinfilebase}.list~
cp -v ${myinfilebase}.sorted ${myinfilebase}.sorted~
echo -e "${myinfilebase}.list \> ${myinfilebase}.sorted"
sort ${myinfilebase}.list > ${myinfilebase}.sorted
rm -v ${myinfilebase}.list
cp -v ${myinfilebase}.sorted ${myinfilebase}.list

rm -v ${myoutfile}~
cp -v ${myoutfile} ${outfile}~
rm -v ${myoutfile}
# e.g. <hr> **<u>content:</u>** '```{{content|escape}}```'

while read -r line || [[ -n "${line}" ]]; do
    echo -e "<hr> **<u>${line}:</u>** '\`\`\`{{${line}|escape|default:\"<empty>\"}}\`\`\`'" >> ${myoutfile}
done < ${myinfilebase}.sorted




exitscript

# echo -e "---"
# echo -e "# Give it some Front Matter"
# echo -e "---"


echo -e "<hr><hr><hr><hr><hr>"
echo -e "# GLOBAL VARIABLES -"
for var in content page paginator site
do
	echo -e "<hr><hr><hr><hr>"
	echo -e "## {%raw%}{{${var}}}{%endraw%}:"
	echo -e "<hr><hr><hr>"
	echo -e "{%raw%}{{${var}}}{%endraw%} = {::nomarkdown}<pre>{:/nomarkdown}{{${var}}}{::nomarkdown}</pre>{:/nomarkdown}"
	echo -e "{%for element in ${var} %}"
	echo -e "  <hr><hr>"
	echo -e "  {%raw%}{{element}}{%endraw%} = {::nomarkdown}<pre>{:/nomarkdown}{{element}}{::nomarkdown}</pre>{:/nomarkdown}"
	echo -e "  <hr>"
	echo -e "  {%raw%}{{${var}.element}}{%endraw%} = {::nomarkdown}<pre>{:/nomarkdown}{{${var}.element}}{::nomarkdown}</pre>{:/nomarkdown}"
	echo -e "  <hr>"
	echo -e "  {%raw%}{{${var}.element[0]}}{%endraw%} = {::nomarkdown}<pre>{:/nomarkdown}{{${var}.{{element[1]}}{::nomarkdown}</pre>{:/nomarkdown}"
	echo -e "  <hr>"
	echo -e "  {%raw%}{{${var}.{{element}}{%endraw%} = {::nomarkdown}<pre>{:/nomarkdown}{{${var}.{{element}}{::nomarkdown}</pre>{:/nomarkdown}"
	echo -e "  <hr>"
	echo -e "  {%raw%}{{${var}.{{element[0]}}}}{%endraw%} = {::nomarkdown}<pre>{:/nomarkdown}{{${var}.{{element[1]}}}}{::nomarkdown}</pre>{:/nomarkdown}"
	echo -e "{%endfor%}"
done
echo -e "<hr><hr><hr><hr><hr>"

exitscript

{% for var in paginator %}
paginator.{{var[0]}} = '<code>{{var[1]}}</code>'
<hr>
{% endfor %}




exitscript

##  Content:
{%raw%}{{site.time}}{%endraw} = `{{site.time}}`
<hr><hr><hr>
 cycle by elements
<hr><hr>
 cycle by number
<hr><hr><hr><hr>

echo <hr><hr>
for collection in a b c ; do
	for element in aa bb cc ; do
		echo {%raw%}$collection.$element{%endraw%} = `$collection.$element`
		echo <hr>
	done
		echo {%raw%}$collection.$element[0]{%endraw%} = `$collection.$element[0]`
		echo {%raw%}$collection.$element[1]{%endraw%} = `$collection.$element[1]`
		echo <hr>
	done
echo <hr><hr>


{{ }}




---
layout: mydefault

sample_bool: true
sample_str: !!str "Sample string" # or just "Sample string"
sample_int: !!int 42              # or just 42
sample_float: !!float 1.23        # or just 1.23
#sample_nil:                      # i.e. no definition.
sample_null: ~
sample_time: 2001-12-14 21:59:43.10 -05:00
sample_array1: [ "a1a", "b1b", "c1c" ]
sample_array2:
 - d2d
 - e2e
 - f2f
sample_object1: { key1: value1, key2: value2 }
sample_object2: # notice the indentation
  keyA: valueA
  keyB: valueB
#
# Whitespace denotes STRUCTURE!
# - DON'T USE TABS!!!
#
# # = comments
#
# list: ["this", "is", "a", "list"] == array
# list:
# - "this
# - "is"
# - "a"
# - "list"
#
# Actually:
# key: value
# or
# { "key", "value" }
#
# string: "string" (Normally unquoted, either quote type allowed.)
# quoted strings can have \n and \0
# ? permits keys with spaces
#
# | preserves newlines, > folds them. |+ keeps extra newlines.
# --- separates documents
# & repeats nodes, * references them.
# Nodes can have a type, designated via !!, e.g. int, str, float, binary
# !myClass { name: Joe, age: 15 }
# %'s are directives
# %YAML = version numbers
# %TAG = shortcut for URI prefix. URI = Uniform Resource Identifier
# (URL = Uniform Resource Locator)
#
# data: |
# This multi-line
# string will
# have newlines.
# data: >
# This multi-line
# string won't.
#
# sequences (list)
# - apple
# -
#  - foo
#  - bar
#  - x123
# - banana
# - carrot
# == ['apple', ['foo', 'bar', 'x123'], 'banana', 'carrot']
#
# keyed: list (aka dictionary, hash. YAML'speak == mapping.)
# { 'keyed' => 'list' } in Ruby'speak.
# foo: whatever
# bar:
#  - uno
#  - dos
# { 'foo' => 'whatever', 'bar' => [ 'uno', 'dos' ] }
#
# << merge key
#
# - &alias me
# - *alias == me
#
# <hr> **<u>content:</u>** '```{{content|escape}}```'
#
# Run pushd _devfiles ; genmdvarlist.bash ; popd
#   for {%include knownjekyllvars.md%} below.
#
# See bottom of this file for table formatting examples.
#
# Also see attempts to <div> <style scoped> p {margin-bottom:0;} </style>
# - that fail miserably.
#
---

This starts at the top line / left edge of this page's content.
^

These are White letters. Background unspecified.
{: style="color:White;background:Inherit;"}
These are Silver letters. Background unspecified.
{: style="color:Silver;background:Inherit;"}
This is DarkGrey background. Foreground unspecified
{: style="color:Inherit;background:DarkGrey;"}
This is DimGrey background. Foreground unspecified
{: style="color:Inherit;background:DimGrey;"}
These are White letters on DarkGrey background.
{: style="color:White;background:DarkGrey;"}
These are Silver letters on DarkGrey background.
{: style="color:Silver;background:DarkGrey;"}
These are White letters on DimGrey background.
{: style="color:White;background:DimGrey;"}
These are Silver letters on DimGrey background.
{: style="color:Silver;background:DimGrey;"}
And back to 'normal'.
{: style="color:Inherit;background:Inherit;"}




|
-:|
Jekyll Environment: | ```{{jekyll.environment}}```
^
|
-:|
site.time: | ```{{site.time}}```
site.timezone: | ```{{site.timezone}}```
site.name: | ```{{site.name}}```
site.title: | ```{{site.title}}```
site.description: | ```{{site.description}}```
site.author: | ```{{site.author}}```
site.github_username: | ```{{site.github_username|default:"<empty>"}}```
site.email: | ```{{site.email|default:"<empty>"}}```
site.twitter_username: | ```{{site.twitter_username|default:"<empty>"}}```
site.disqus.shortname: | ```{{site.disqus.shortname|default:"<empty>"}}```
site.google_analytics: | ```{{site.google_analytics|default:"<empty>"}}```
site.repository: | ```{{site.repository|default:"<empty>"}}```
^
|
-:|
site.url: | ```{{site.url|default:"<empty>"}}```
site.baseurl: | ```{{site.baseurl|default:"<empty>"}}```
site.github.url: | ```{{site.github.url|default:"<empty>"}}```
page.url: | ```{{page.url|default:"<empty>"}}```
relative- | ```{{page.url|relative_url|default:"<empty>"}}```
absolute- | ```{{page.url|absolute_url|default:"<empty>"}}```
page.path: | ```{{page.path|default:"<empty>"}}```
site.encoding: | ```{{site.encoding|default:"<empty>"}}```
site.lang: | ```{{site.lang|default:"<empty>"}}```
site.theme: | ```{{site.theme}}```
site.comments: | ```{{site.comments}}```
^
|
-:|
site.show_drafts: | ```{{site.show_drafts}}```
site.future:      | ```{{site.future}}```
site.unpublished: | ```{{site.unpublished}}```
site.limit_posts: | ```{{site.limit_posts}}```
^
|
-:|
site.markdown: | ```{{site.markdown}}```
site.highlighter: | ```{{site.highlighter}}```
site.lsi: | ```{{site.lsi}}```
^
|
-:|
site.show_dir_listing: | ```{{site.show_dir_listing}}```
site.permalink: | ```{{site.permalink}}```
site.paginate_path: | ```{{site.paginate_path}}```
^
|
-:|
site.kramdown: | ```{{site.kramdown}}```
^
|
-:|
jekyll_tidy:|
.exclude | '```{{site.jekyll_tidy.exclude|jsonify}}```'
.compress_html | '```{{site.jekyll_tidy.compress_html|jsonify}}```'
(jekyll_tidy: | '```{{site.jekyll_tidy|jsonify}}```')
^
|
-:|
sass: ' ```{{site.sass}}``` '|
^
|
-:|
compress_html:|
.ignore.envs | '```{{site.compress_html.ignore.envs|jsonify}}```'
.comments | '```{{site.compress_html.comments|escape|jsonify}}```'
^
|
-:|
feed_meta:|'```{% capture mymeta %}{% feed_meta %}{%endcapture%}{{mymeta|default:""|jsonify}}```'

&nbsp;

compress_html: '
<pre>{{site.compress_html|jsonify|escape}}</pre>'


<!-- does this stay behind? -->


&nbsp;

Is this showing up!

&nbsp;


site.github: '{%comment%} Bizarre. With ' on same line, as above, "site.github: '" isn't rendered.{%endcomment%}
'
<pre> {{site.github|escape}} </pre>
'


{%assign arJEKYLL_ENV=jekyll.environment|split:' '%}

{%unless arJEKYLL_ENV contains "production"%}

{%comment%}


{%assign string1="production site"%}
{%assign string2="site production"%}
{%assign string3="site production site"%}

string 1 '{{string1}}' contains ' production ' - {%if string1 contains " production "%}true{%else%}false{%endif%}.<br>
string 2 '{{string2}}' contains ' production ' - {%if string2 contains " production "%}true{%else%}false{%endif%}.<br>
string 3 '{{string3}}' contains ' production ' - {%if string3 contains " production "%}true{%else%}false{%endif%}.<br>

{%assign string1ar = string1 | split:' '%}
{%assign string2ar = string2 | split:' '%}
{%assign string3ar = string3 | split:' '%}
{%assign string4ar = "beginproduction:midproductionmid:productionend:production_envvar" | split:':'%}


string 1 '{{string1ar|array_to_sentence_string}}' contains ' production ' - {%if string1ar contains "production"%}true{%else%}false{%endif%}.<br>
string 2 '{{string2ar|array_to_sentence_string}}' contains ' production ' - {%if string2ar contains "production"%}true{%else%}false{%endif%}.<br>
string 3 '{{string3ar|array_to_sentence_string}}' contains ' production ' - {%if string3ar contains "production"%}true{%else%}false{%endif%}.<br>
string 4 '{{string4ar|array_to_sentence_string}}' contains ' production ' - {%if string4ar contains "production"%}true{%else%}false{%endif%}.<br>



{{"helloworld.txt" | img_tag }}<br>
{{"helloworld.txt" | script_tag }}<br>
{{"helloworld.txt" | stylesheet_tag }}<br>


# Inspected:

		{{page|inspect}}

# Jsonified:

		{{page|jsonify}}

# Jsonified:

		{{page|json}}

{%include knownjekyllvars.md%}

		{%include dumpvars.md%}



{%endcomment with some extra characters at the end of the tag%}

{%endunless arJEKYLL_ENV contains "production"%}


{%comment%}

{%raw%}
</div style="p:margin-bottom:0;">
{%endraw%}

{%endcomment%}

{%comment%}
{%comment%} Table column right alignment not working, e.g. '| --: | --- |'	{%endcomment%}
{%comment%} INCORRECT: It's just you can't have an aligned column without also having a table header line.{%endcomment%}
{%comment%} - which means, you cannot have a header-less table with a non-left aligned column.{%endcomment%}

|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|
| Second body     |            |                 |                |
| 2 line          |            |                 |                |
|=================+============+=================+================|
| Footer row      |            |                 |                |
|-----------------+------------+-----------------+----------------|

&nbsp;

|---
| Default aligned | Left aligned | Center aligned | Right aligned
|-|:-|:-:|-:
| First body part | Second cell | Third cell | fourth cell
| Second line |foo | **strong** | baz
| Third line |quux | baz | bar
|---
| Second body
| 2 line
|===
| Footer row with lots of content

&nbsp;

|---
Default aligned | Left aligned | Center aligned | Right aligned
-|:-|:-:|-:
First body part | Second cell | Third cell | fourth cell
Second line |foo | **strong** | baz
Third line |quux | baz | bar
---|
|Second body
2 line|
|===
Footer row with lots of content|

{%comment%}Note: Each table line must have at least one |, or it doesn't know that line is part of the table.{%endcomment%}

&nbsp;

|
=:|
one | two
three | four

&nbsp;

| five | six
seven | eight
| nine | ten

&nbsp;

a | b
cc | dd
| eee | fff

&nbsp;

|
-:|
a1|b1
row2;col1|row2:col2
-|
Second|body
:-|-:
|body|2nd|
|what's the|point|
||of a second body?||

&nbsp;

{%raw%} <div> <style scoped> p {margin-bottom:0;} </style> {%endraw%}

{%endcomment%}

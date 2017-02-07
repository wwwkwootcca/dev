{%include header_liquid.liquid%}
{%comment%}
© wwwkwootccaatusers.noreply.github.com, All rights reserved.

# Master include (on a page or layout) to dump info about a page on a page.

#{::comment}
# {::options enable_coderay="false" syntax_highlighter="+nil+" /}
#{:/comment}
#
# Liquid has strings, numbers, booleans, nils, arrays, (and objects).
#
# Jekyll 3.x use liquid v3.0.6. White space control is only available in liquid v4 and this version will soon land in Jekyll.
# So ... no { %- -% }
#
# global: content layout page paginator site
# content
# page: path, url
# paginator: next_page_path, next_page, page, per_page, posts, previous_page_path, total_pages, total_posts
# site:categories._category_, collections, -configuration data-, data, documents, html_pages, pages, posts, related_posts, static_files, tags.-tag-, time
# collection: directory, docs, files, label, output, relative_path
# document: collection, content, relative_path
# post: categories, content, date, excerpt, id, next, previous, tags, title
# static_files: extname, modified_time, path

# collections, pages, posts are (also?) under site

{%endcomment%}

{%comment%}
{%capture dumpvarscontent %}

{{hrx5}}

# GLOBAL VARIABLES -

{%include parseprintvar.md varname="content"      var=content      %}
{%include parseprintvar.md varname="page"         var=page         %}
{%include parseprintvar.md varname="paginator"    var=paginator    %}
{%include parseprintvar.md varname="site"         var=site         %}

{%include parseprintvar.md varname="collections"  var=collections  %}
{%include parseprintvar.md varname="layout"       var=layout       %}
{%include parseprintvar.md varname="document"     var=document     %}
{%include parseprintvar.md varname="post"         var=post         %}
{%include parseprintvar.md varname="static_files" var=static_files %}

{%endcapture%}
{{dumpvarscontent}}

{%include parseprintvar.md varname="page.sample_array1"  var=page.sample_array1  %}
{%include parseprintvar.md varname="page.sample_array2"  var=page.sample_array2  %}
{%include parseprintvar.md varname="page.sample_object1" var=page.sample_object1 %}
{%include parseprintvar.md varname="page.sample_object2" var=page.sample_object2 %}
{%include parseprintvar.md varname="page.sample_str"     var=page.sample_str     %}
{%include parseprintvar.md varname="page.sample_bool"    var=page.sample_bool    %}
{% assign page.sample_int = 42 %}{%include parseprintvar.md varname="page.sample_int"     var=page.sample_int     %}
{%include parseprintvar.md varname="page.sample_float"   var=page.sample_float   %}
{%include parseprintvar.md varname="page.sample_nil"     var=page.sample_nil     %}
{%include parseprintvar.md varname="page.sample_null"    var=page.sample_null    %}
{%include parseprintvar.md varname="page.sample_time"    var=page.sample_time    %}

{%endcomment%}

{%comment%}{::comment}
{:/comment}{%endcomment%}

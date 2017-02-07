---
layout: mydefault
---
How about <code>'\{\{site.data.vars.str_mysitevar1\}\}' = '{{site.data.mydatavars.str_mysitevar1}}'.</code>


<hr><hr><hr>
page:
<hr><hr>
{% for var in page %}
page.{{var[0]}} = '<code>{{var[1]}}</code>'
<hr>
{% endfor %}

<hr><hr><hr>
layout:
<hr><hr>
{% for var in layout %}
layout.{{var[0]}} = '<code>{{var[1]}}</code>'
<hr>
{% endfor %}

<hr><hr><hr>
content:
<hr><hr>
{% for var in content %}
content.{{var[0]}} = '<code>{{var[1]}}</code>'
<hr>
{% endfor %}

<hr><hr><hr>
paginator:
<hr><hr>
{% for var in paginator %}
paginator.{{var[0]}} = '<code>{{var[1]}}</code>'
<hr>
{% endfor %}

<hr><hr><hr>
site:
<hr><hr>
{% for var in site %}
site.{{var[0]}} = '<code>{{var[1]}}</code>'
<hr>
{% endfor %}

some text


<hr><hr><hr>
site:
<hr>
<code>{{site}}</code>
<hr><hr><hr>
page:
<hr>
<code>{{page}}</code>
<hr><hr><hr>
layout:
<hr>
<code>{{layout}}</code>
<hr><hr><hr>
content:
<hr>
<code>{{content}}</code>
<hr><hr><hr>
paginator:
<hr>
<code>{{paginator}}</code>
<hr><hr><hr>

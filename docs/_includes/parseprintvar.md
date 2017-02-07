{%comment%}
parseprintvar.md: Output characteristics of the supplied var, and the var itself.
- if the var is a collection, call itself to process it.

	Liquid has strings, numbers, booleans, nils, arrays, (and objects).

	myvar.{{myelement}}  - not allowed
	myvar[{{myelement}}] - allowed

	false, true, nil, empty (array) [ nil is false ]

	== != <>    < <= > >=    and or

	contains [ "string" contains "blah", where blah is string, array, or hash, stringifies "blah" ]

	- no not, nor () for precedence.

	forloop.length, .index., .index0, .rindex (.r = remain), .rindex0, .first (is?), .last
	{ % for item in array limit:2 offset:2 reversed % }

	array | push - add element to end
	array | pop  - remove last element
	array | shift - remove first element from array
	array | unshift - place new element at start of array


{%endcomment%}

{{hrx4}}
## {{dlbs}}{{include.varname}}{{drbs}}: ``` {{include.var[1]|default "<empty>"}} ```
{{hrx3}}
<br>
``` {%if include.var%}true{%else%}{%if include.var == nil%}nil{%else%}false{%endif%}{%endif%} ```
, size ``` {%if include.var.size%}{{include.var.size}}{%else%} false {%endif%} ```
, .first ``` {%if include.var.first%}true{%else%}false{%endif%} ```
, [0] ``` {%if include.var[0]%}true{%else%}false{%endif%} ```

.first = '``` {%if include.var.first == nil%}nil{%else%}{{include.var.first|default "<empty>"}}{%endif%} ```'<br>
.first[0] = '``` {%if include.var.first[0] == nil%}nil{%else%}{{include.var.first[0]|default "<empty>"}}{%endif%} ```'
, .first[1] = '``` {%if include.var.first[1] == nil%}nil{%else%}{{include.var.first[1]|default "<empty>"}}{%endif%} ```'
, .first[2] = '``` {%if include.var.first[2] == nil%}nil{%else%}{{include.var.first[2]|default "<empty>"}}{%endif%} ```'

[0] (``` {%if include.var[0]%}true{%else%}{%if include.var[0] == nil%}nil{%else%}false{%endif%}{%endif%} ```)
= '``` {%if include.var[0] == nil%}nil{%else%}{{include.var[0]|default "<empty>"}}{%endif%} ```'
, [1] = '``` {%if include.var[1] == nil%}nil{%else%}{{include.var[1]|default "<empty>"}}{%endif%} ```'
, [2] = '``` {%if include.var[2] == nil%}nil{%else%}{{include.var[2]|default "<empty>"}}{%endif%} ```'

.key ``` {{include.var.key}} ```,
.title ``` {{include.var.title}} ```,
.content ``` {{include.var.content | escape}} ```

{{include.varname}} = '

``` {{include.var|escape|default:"<empty>"}} ```
<br>'

{%if include.var.first or include.var[0]%}
{%for element in include.var%}
{%if forloop.first%}<u>{{forloop.length}} elements:</u><br>{%endif%}
{{include.varname}}[{{forloop.index0}}] = ``` {{include.var[forloop.index0]}} ```
, {{include.varname}}.{{element}} = ``` {{element}} ```
, {{include.varname}}.``` {{element[0]|default:"<empty>"}} ``` = ``` {{element[1]|default:"<empty>"}} ```<br>
( `{%if element%}true{%else%}false{%endif%}` , size `{{element.size}}` , first `{{element.first|default:"<empty>"}}` , [0] `{{element[0]|default:"<empty>"}}` )
{%endfor%}

{%for element in include.var%}
{%assign lvarname=include.varname|append:'.'|append:element[0]%}
{%if element.first or element[0] or element.size %}***Descending into {{lvarname}} ...*** {%include parseprintvar.md varname=lvarname  var=element %}{%endif%}
{%endfor%}
{%endif%}

***... ascending.***

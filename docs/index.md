---
layout: mydefault
title: www.kwootc.ca Development Website
#title: if [[ \"jekyll.environment\" == \"production\" ]] ; then \"site.description\" ; fi
#title: {{ site.description }}
#title: "if [[ \"jekyll.environment\" == \"production\" ]] ; then \"site.description\" ; fi"
#image
#author
#date:
#excerpt:
#permalink:
#topic:
#id
#category
#tags
#{% if jekyll.environment == 'production' %}
#	{% assign page.title = site.description %}
#{% endif %}
---
{%comment%}Doesn't work ... probably title is rendered long before this is interpreted.{%endcomment%}
{% if jekyll.environment == 'production' %}
	{% assign page.title = site.description %}
{% endif %}


- - -

&nbsp;

{%assign post = site.posts.first%}

[{{ post.title|escape}}]({{post.url|relative_url}}){:.ablknodec style="font-size:32px"}
<br>{{post.date|date: "%B %-d, %Y"}} • {{post.author}}
{:.post-meta}

<br>{{post.excerpt|strip_html|strip}}{%if post.content != post.excerpt%}

[ ... more.]({{post.url|relative_url}} "Complete post."){%endif%}

---

&nbsp;


# Welcome to K-W OOTC
{:style="text-align:center;text-decoration:underline"}

&nbsp;

## **What is Out of the Cold?**

“Out of the Cold” is a program which strives to respond, in a meaningful way to the needs of the most abandoned of our city’s poor and homeless people. These needs include the basic physical needs of shelter, food and warm clothing, and the deeply human needs of compassion, dignity and feelings of self worth. We provide a warm, welcoming atmosphere, including a nutritious meal ~~and a nice place to sleep in the winter months~~.

## **Why Have an Out of the Cold program?**

Homelessness is not just a problem of larger cities like Toronto. The problem exists in the Kitchener-Waterloo area. There are local agencies that offer support to the homeless, but they are often overworked and overcrowded. For a variety of reasons the homeless in our community cannot always go to the agencies that are helping our homeless. ~~Out Of The Cold provides another option.~~ (We are not a solution to the problem of homelessness, but rather an aid to help in coping with it.)

June 28, 2011 • msavage
{:.site-last_update-text .right-talign}


{%comment%}

- - -

{%assign post = site.posts.first%}
<br>title:'```{{post.title}}```'
<br>date:'```{{post.date}}```'
<br>author:'```{{post.author}}```'
<br>categories:'```{{post.categories|join:", "}}```'
<br>tags:'```{{post.tags|join:", "}}```'
<br>collection:'```{{post.collection}}```'<br>
<br>url:'```{{post.url}}```'
<br>id:'```{{post.id}}```'
<br>path:'```{{post.path}}```'
<br>relative_path:'```{{post.relative_path}}```'
<br>slug:'```{{post.slug}}```'
<br>ext:'```{{post.ext}}```'<br>
<br>layout:'```{{post.layout}}```'
<br>draft:'```{{post.draft}}```'
<br>published:'```{{post.published}}```'<br>
<br>excerpt:'```{{post.excerpt|jsonify}}```'<br>
<br>content:'```{{post.content|jsonify}}```'<br>
<br>output:'```{{post.output|inspect}}```'<br>
<br>next:'```{%if post.next%}<true>{%else%}<false>{%endif%}```'<br>
<br>previous:'```{%if post.previous%}<true>{%else%}<false>{%endif%}```'
{%endcomment%}

{%comment%}

- - -

{% assign elements = "title,date,author,categories,tags,collection,excerpt,content,id,url,slug,path,relative_path,ext,layout,draft,published,output,next,previous" | split:','%}
{%for element in elements%}
{{element}}:'```{{site.posts.first.element|inspect}}```'
{%endfor%}

- - -

{%assign post = site.posts.first%}
{%for element in post%}
{{element}}:'```{{element}}```'
{%endfor%}

{%endcomment%}

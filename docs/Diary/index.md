---
layout: mydefault
title: K-W OOTC Diary
mypageclass: listing
---

# {{page.title}}:
{:.no_toc}

### <u> Contents: </u>
{:.no_toc}
* Table of Contents Placeholder
{:toc}


{% for post in site.posts %}

&nbsp;

- - -
&nbsp;


### {{post.date|date: "%B %-d, %Y"}} • {{post.author}} • [{{ post.title|escape}}]({{post.url|relative_url}})


{{post.excerpt|strip_html|strip}}{%if post.content != post.excerpt%} [... more.]({{post.url|relative_url}} "Complete post."){%endif%}

{%comment%}``` {{post|jsonify}} ```{%endcomment%}

{% endfor %}

&nbsp;

- - -
[![Diary Feed]({{"/assets/images/feed.png"|relative_url}})]({{"/Diary/feed-Diary.xml"|relative_url}} "Diary Feed")
{: style="text-align:right"}

---
layout: post
title: "Test - vars?"
date: 2017-01-27
---

jekyll environment is '```{{ jekyll.environment }}```'

site:
<br>.time = '```{{site.time|date: '%B %-d, %Y'}}```'
<br>.title = '```{{site.title}}```'
<br>.description = '```{{site.description}}```'

site.github = '```{{site.github|inspect}}```'

post = '```{{post|inspect}}```'

page = '```{{page|inspect}}```'

layout = '```{{layout|inspect}}```'

post = '```{{post|inspect}}```'

paginator = '```{{paginator|inspect}}```'

site.categories = '```{{site.categorie|inspect}}```'

site.collections = '```{{site.collections|inspect}}```'

site.data = '```{{site.data|inspect}}```'

site.documents = '```{{site.documents|inspect}}```'

site.html_pages = '```{{site.html_pages|inspect}}```'

site.static_files = '```{{site.static_files|inspect}}```'

site.tags = '```{{site.tags}}|inspect```'

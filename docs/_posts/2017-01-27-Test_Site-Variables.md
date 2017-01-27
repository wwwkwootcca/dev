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

site.github = '```{{site.github|jsonify}}```'

post = '```{{post|jsonify}}```'

page = '```{{page|escape|jsonify}}```'

layout = '```{{layout|jsonify}}```'

post = '```{{post|jsonify}}```'

paginator = '```{{paginator|jsonify}}```'

site.categories = '```{{site.categorie|jsonify}}```'

site.collections = '```{{site.collections|jsonify}}```'

site.data = '```{{site.data|jsonify}}```'

site.documents = '```{{site.documents|jsonify}}```'

site.html_pages = '```{{site.html_pages|jsonify}}```'

site.static_files = '```{{site.static_files|jsonify}}```'

site.tags = '```{{site.tags}}|jsonify```'

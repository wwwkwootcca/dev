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

site.github = '```{{site.github|jsonify|escape}}```'

post = '```{{post|jsonify|escape}}```'

page = '```{{page|jsonify|escape}}```'

layout = '```{{layout|jsonify|escape}}```'

post = '```{{post|jsonify|escape}}```'

paginator = '```{{paginator|jsonify|escape}}```'

site.categories = '```{{site.categories|jsonify|escape}}```'

site.collections = '```{{site.collections|jsonify|escape}}```'

site.data = '```{{site.data|jsonify|escape}}```'

site.documents = '```{{site.documents|jsonify|escape}}```'

site.html_pages = '```{{site.html_pages|jsonify|escape}}```'

site.static_files = '```{{site.static_files|jsonify|escape}}```'

site.tags = '```{{site.tags}}|jsonify|escape```'

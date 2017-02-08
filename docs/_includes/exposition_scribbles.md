{%include header_liquid.liquid%}
{%comment%}
© wwwkwootccaatusersatgithubdotcom, All rights reserved.




{%assign foo = true%}
{% assign bar = false%}
foo is {{foo}}, while bar is {{bar}}. <- returns "foo is true, while bar is false."



{%endcomment%}














<hr><hr><hr>

How about `{%raw%}{{site.data.vars.str_mysitevar1}}{%endraw%}` = `{{site.data.mydatavars.str_mysitevar1}}`.



# Header 1 {#withanid}

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

####### Header 7

\- they need the blank line between!



> Blockquotes look like this



`code looks like this`
`def what?
  42
  end`
 {: .language-ruby}

~~~ ruby
 def what?
   43
   end
~~~



<pre> &lt;pre> is 'ignored'! OH LOOK, NO IT'S NOT!</pre>

<pre markdown="0"><u>Could be interesting</u></pre>

* kram
+ down
- now

1. kram
1. down
1. now


* list 1 item 1
 * list 1 item 2 (indent 1 space)
  * list 1 item 3 (indent 2 spaces)
   * list 1 item 4  (indent 3 spaces)
    * lazy text belonging to above item 4
1. list 1 item 1
 2. list 1 item 2 (indent 1 space)
  3. list 1 item 3 (indent 2 spaces)
   4. list 1 item 4  (indent 3 spaces)
    5. lazy text belonging to above item 4

kramdown
: A Markdown-superset converter
(need the blank line between)

Maruku
:     Another Markdown-superset converter



* * *

---

  _  _  _  _

---------------



Since we don't see anything below, no math here.
$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$
Since we don't see anything above, no math here.



This is [a link](http://rubyforge.org) to a page.
A [link]({{"/Test" | relative_url }} "local URI") can also have a title.
And [spaces]({{"/Test/link with spaces.html" | relative_url }})!

This is a [link](http://example.com){:hreflang="de"}

This is a [reference style link][linkid] to a page. And [this]
[linkid] is also a link. As is [this][] and [THIS].

[linkid]: http://www.example.com/ "Optional Title"



*italic text*

_more italic text_

**bold text**

__more bold text__

**some bold italic text**

__more bold italic text__

**_maybe this will work_**

This is un*believe*a**bl**e! This d_oe_s not work!



Use `<html>` tags for this.



This is some text.[^1]. Other text.[^footnote].

[^1]: Some *crazy* footnote definition.

[^footnote]:
    > Blockquotes can be in a footnote.

        as well as code blocks

    or, naturally, simple paragraphs.

[^other-note]:       no code block here (spaces are stripped away)

[^codeblock-note]:
        this is now a code block (8 spaces indentation)



This is some text not written in HTML but in another language!


*[another language]: It's called Markdown

*[HTML]: HyperTextMarkupLanguage
{:.mega-big}

This is the first abbreviation ([another language]).

This is the second abbreviation ([HTML]]).

Abbreviations are actually macros. (Substitutions, actually.)
*[my bold word]: My **bold** word.
So this is [my bold word]. (Not working here!)

Ah phooey ... abbreviations aren't abbreviations. They're alternate text.
And there is no decoration to indicate alternate text is present!

*[alternate text]: PHOOEY PHOOEY PHOOEY!!!

**PHOOEY PHOOEY PHOOEY!!!**



End of block marker. Consider:
* list item one

* list item two

Versus:

* list one
^
* list two


{:ref-name: #myid .my-class}
{:other: ref-name #id-of-other title="hallo you"}
{:test: key="value \" with quote" and other='quote brace \}'}
Note that other includes ref-name. i.e. Inclusion (?)

This *is*{:.underline} some `code`{:#id}{:.class}.
A [link]({{"index.html" | relative_url }}){:rel='something'} and some **tools**{:.tools}.

{:stylered: style="color:red;"}
This should be **bold red**{:stylered}

Or entire paragraph.{:stylenotred}
{:stylered}

You won't see this
{::comment}
This text is completely ignored by kramdown - a comment in the text.
{:/comment} cause it's commented out.


The following extensions can be used with kramdown:

<u>comment</u>
Treat the body text as a comment which does not show in the output.

<u>nomarkdown</u> {::nomarkdown}
Don’t process the body with **kramdown** but output it as-is. The attribute type specifies which converters should output the body: if the attribute is missing, all converters should output it. Otherwise the attribute value has to be a space separated list of converter names and these converters should output the body.
{:/nomarkdown}

<u>options</u>
Should be used without a body since the body is ignored. Is used for setting the global options for the kramdown processor (for example, to disable automatic header ID generation). Note that options that are used by the parser are immediately effective whereas all other options are not! This means, for example, that it is not possible to set converter options only for some part of a kramdown document.
[kramdown options](https://kramdown.gettalong.org/options.html)



{::comment}
{:/comment}
{::nomarkdown}
How about <pre>this</pre>?
{:/nomarkdown}



{::nomarkdown}
How about <pre>this</pre>?
{:/nomarkdown}

Is anything touching this {::nomarkdown}<pre>{:/nomarkdown}code{::nomarkdown}</pre>{:/nomarkdown}? YES!

How about \<pre>this\</pre>?

Or &lt;pre> this &lt;/pre>??

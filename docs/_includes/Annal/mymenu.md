{%comment%}

Can't use this, sadly.

If last two lines:
- [ <span> Contacts </span> ](#){: .last}
{: .menu}

<a gets class=last, instead of <li.


If last two lines:
{: .menu}
{%raw%}<li class="last"><a href="#"> <span> Contacts </span> </a></li>{%endraw%}

Get:
</ul>
<li class="last"><a href="#"> <span> Contacts </span> </a></li>

Instead of:
<li class="last"><a href="#"> <span> Contacts </span> </a></li>
</ul>

Have to use mymenu.html version.

{%endcomment%}


{%comment%}
	</ul>
	<li class="last"><a href="#"> <span> Contacts </span> </a></li>
:version

- [ <span> Home </span> ](#){: .parent}
  - [ <span> Sub Item 1 </span> ](#){: .parent}
    - [ <span> Sub Item 1.1 </span> ](#){: .parent}
      - [ <span> Sub Item 1.1.1 </span> ](#)
      - [ <span> Sub Item 1.1.2 </span> ](#)
    - [ <span> Sub Item 1.2 </span> ](#)
    - [ <span> Sub Item 1.3 </span> ](#)
    - [ <span> Sub Item 1.4 </span> ](#)
    - [ <span> Sub Item 1.5 </span> ](#)
    - [ <span> Sub Item 1.6 </span> ](#)
    - [ <span> Sub Item 1.7 </span> ](#){: .parent}
      - [ <span> Sub Item 1.7.1 </span> ](#)
      - [ <span> Sub Item 1.7.2 </span> ](#)
  - [ <span> Sub Item 2 </span> ](#)
  - [ <span> Sub Item 3 </span> ](#)
- [ <span> Product Info </span> ](#){: .parent}
  - [ <span> Sub Item 1 </span> ](#){: .parent}
    - [ <span> Sub Item 1.1 </span> ](#)
    - [ <span> Sub Item 1.2 </span> ](#)
  - [ <span> Sub Item 2 </span> ](#){: .parent}
    - [ <span> Sub Item 2.1 </span> ](#)
    - [ <span> Sub Item 2.2 </span> ](#)
  - [ <span> Sub Item 3 </span> ](#)
  - [ <span> Sub Item 4 </span> ](#)
  - [ <span> Sub Item 5 </span> ](#)
  - [ <span> Sub Item 6 </span> ](#)
  - [ <span> Sub Item 7 </span> ](#)
- [ <span> Help </span> ](#)
{: .menu}
{%raw%}<li class="last"><a href="#"> <span> Contacts </span> </a></li>{%endraw%}

{%endcomment%}


{%comment%}
	<li><a href="#" class="last"> <span> Contacts </span> </a></li>	<- Getting		i.e.:		anchor	on class
	<li class="last"><a href="#"> <span> Contacts </span> </a></li>	<- Instead of	instead of:	li		on class
:version

{%endcomment%}

- [ <span> Home </span> ](#){: .parent}
  - [ <span> Sub Item 1 </span> ](#){: .parent}
    - [ <span> Sub Item 1.1 </span> ](#){: .parent}
      - [ <span> Sub Item 1.1.1 </span> ](#)
      - [ <span> Sub Item 1.1.2 </span> ](#)
    - [ <span> Sub Item 1.2 </span> ](#)
    - [ <span> Sub Item 1.3 </span> ](#)
    - [ <span> Sub Item 1.4 </span> ](#)
    - [ <span> Sub Item 1.5 </span> ](#)
    - [ <span> Sub Item 1.6 </span> ](#)
    - [ <span> Sub Item 1.7 </span> ](#){: .parent}
      - [ <span> Sub Item 1.7.1 </span> ](#)
      - [ <span> Sub Item 1.7.2 </span> ](#)
  - [ <span> Sub Item 2 </span> ](#)
  - [ <span> Sub Item 3 </span> ](#)
- [ <span> Product Info </span> ](#){: .parent}
  - [ <span> Sub Item 1 </span> ](#){: .parent}
    - [ <span> Sub Item 1.1 </span> ](#)
    - [ <span> Sub Item 1.2 </span> ](#)
  - [ <span> Sub Item 2 </span> ](#){: .parent}
    - [ <span> Sub Item 2.1 </span> ](#)
    - [ <span> Sub Item 2.2 </span> ](#)
  - [ <span> Sub Item 3 </span> ](#)
  - [ <span> Sub Item 4 </span> ](#)
  - [ <span> Sub Item 5 </span> ](#)
  - [ <span> Sub Item 6 </span> ](#)
  - [ <span> Sub Item 7 </span> ](#)
- [ <span> Help </span> ](#)
- [ <span> Contacts </span> ](#){: .last}
{: .menu}

{%comment%}{%endcomment%}

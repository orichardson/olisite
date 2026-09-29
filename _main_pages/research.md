---
# options: .rsch  .research  .main  .contrib  .out
# display: oli.{math, reflect};
display: oli.io;
# title: research
short: research
subtitle: Research
colors: 
    fg :     '#FFFFFF'
    bg :     '#000000'
    menu :   '#000000'
    nav :    '#4a4a4a'
    border : '#636363'
    # shadow : '#777777'
    # shadow : 'rgb(170, 255, 168)'
    shadow : '#AAAAAA'
glyph: flask
order: 2
redirect_from:
  - /
---

<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

<!-- <div class="color-marker" data-bg-color="{{site.main_pages[1].colors.fg}}" data-fg-color="{{site.main_pages[1].colors.bg}}"></div> -->
<!-- <h1> Research </h1> -->
<p style="max-width:85ch;">
<!-- I develop clean mathematical foundations for fallable agents.
My work spans machine learning, probabilistic graphical models, information theory, programming languages, category theory, and logic. -->
<!-- My research aims to develop clean, intuitive, and conceptually rich mathematical foundations for agents that are well-suited to modern AI systems.  -->
<!-- My research develops clean and conceptually rich mathematical foundations for AI systems.  -->
<!-- My research develops mathematical and conceptual foundations for fallible AI systems. -->
My research develops mathematical and conceptual foundations for fallible AI systems. 
<!-- The result so far has been an elegant unifying picture that explains many standard but seemingly ad-hoc choices made in practice. -->
The result so far has been a unifying picture that explains many standard but seemingly ad-hoc choices made in practice.
A key technical ingredient is a class of models called
<!-- [Probabilistic Dependency Graphs (PDGs)](https://orichardson.github.io/pdg/), -->
<!-- <a class="paper" href="https://arxiv.org/abs/2012.10800">Probabilistic Dependency Graphs</a> <a href="https://orichardson.github.io/pdg/">(PDGs)</a> -->
Probabilistic Dependency Graphs <a href="https://orichardson.github.io/pdg/">(PDGs)</a>
which
<!-- <a class="paper" href="https://arxiv.org/abs/2012.10800"> -->
subsume traditional graphical models,
<!-- </a> -->
<!-- and admit <a class="paper" href="https://arxiv.org/abs/2311.05580">similarly expensive inference procedures</a>, -->
<!-- yet can model inconsistent beliefs and <a class="paper" href="https://arxiv.org/abs/2202.11862">most scenarios in machine learning</a>.  -->
yet can model inconsistent beliefs and most scenarios in machine learning. 
<!-- This leads to a simple -->
Indeed, many important algorithms in AI turn out to be instances of an intuitive heuristic approach to resolving probabilistic inconsistency. 
</p> 

For an overview, see my 
[research statement]({{ site.baseurl }}/files/research-statement.pdf)
    <span style="color:#555; font-size:smaller;">[last update March 2024]</span> ;  
    &nbsp;&nbsp;for (a great deal) more, see
    <!-- [dissertation]({{ site.baseurl }}/files/oli-dissertation.pdf) -->
    my <span class="thesis-type">
        <a href="{{site.baseurl}}/files/oli-dissertation.pdf" style="color: color-mix(in srgb, var(--accent-color), white 30%) ;">dissertation</a></span>.

<br>

<h2>
<!-- <input class="search" size=13 oninput="this.size = this.value.length" style="background: none; text-align:center;" 
    value="Peer-Reviewed" />  &nbsp; -->
<!-- Peer-Reviewed -->
Papers and Publications 
</h2>

<!-- <div style="display:"> -->
<div class="right-button-panel">
    <button  
        onclick="$('.accordion-panel').each( (i,x) => $(x).data('expander')())"><i class="fa-solid fa-maximize"></i></button>
    <button 
        onclick="$('.accordion-panel').each( (i,x) => $(x).data('contractor')())"><i class="fa-solid fa-minimize"></i></button>
</div>

<!-- Legend: -->
<div class="legend-wrapper">
    <div class="legend-label">Legend</div>
    <div class="legend-pieces">
        <!-- TODO: make this into a loop... -->
        <div class="thesis-type legenditem">
            <span><i class="fa fa-file" aria-hidden="true"></i></span>
            thesis
        </div>
        <!-- <br> -->
        <div class="workshop-type legenditem">
            <span><i class="fa fa-file" aria-hidden="true"></i></span>
            workshop
        </div>
        <div class="preprint-type legenditem">
            <span><i class="fa fa-file" aria-hidden="true"></i></span>
            preprint
        </div>
        <br>
        <div class="conference-type legenditem">
            <span><i class="fa fa-file" aria-hidden="true"></i></span>
            conference
        </div>
        <!-- <br> -->
        <div class="journal-type legenditem">
            <span><i class="fa fa-file" aria-hidden="true"></i></span>
            journal
        </div>
    </div>
</div>



<!-- <h3> Conference Papers </h3> -->
<ul class='paperlist'>
{% assign papers_sorted = site.papers | sort: "month" | sort: "year"| reverse %}
{% for paper in papers_sorted %}
{% if paper.content.size > 5 %} {% assign more = true %} {% else %} {% assign more = false %} {% endif %}
{% if paper.hide %}{% else %}
<li id="{{paper.name | split: '.' | first}}" class="{{paper.type}}-type accordion-panel">
    {% if paper.awards %}
    <div class="special-tags">
    {% for award in paper.awards %} 
        <div class="special-tag">
            <i class="fa-solid fa-certificate"></i><br/>
            <div class="special-tag-text">{{award}}</div>
        </div>
    {% endfor %}
    </div>
    {% endif %}
    <!-- <b>{{paper.title}}</b><br/> -->
    <!-- <span class="papertitle hangingindent">{{ paper.title }} </span> -->
    <div class="papertitle hangingindent {% if more %}toggle-bbutton{% endif %}">{{ paper.title }}
        {% comment %}
        {% if paper.oral %} 
        <span class="special-tag">
            <i class="fa-solid fa-certificate"></i><br/>
            <div class="special-tag-text">oral</div>
        </span>
        {% endif %}
        {% endcomment %}
    </div>
        <!-- <br/> -->
    <div class="paper-descr {% if more %}toggle-bbutton{% endif %}">
        <!-- {{ paper.authors }} -->
        {% comment %}
        {% endcomment %}
        {% assign authors = paper.authors | replace: '\n', ' ' | replace: ", and ", " and " | replace: ", ", " and " | split: " and " %}
        {% assign penultimate = authors.size | minus : 1 %}
        {% for author in authors %}
            {%- if author contains 'Oliver' and author contains 'Richardson' -%} 
                <span class="myname">{{author}}</span>
            {%- else -%}
                {{ author }}
            {%- endif -%}
            {%- if forloop.index != authors.size and penultimate > 1-%}
                ,
            {%- endif -%}
            {% if forloop.index == penultimate %}
                and
            {% endif %}
        {% endfor %}
        <!-- we'll fix it later -->
        <!-- {{ paper.authors }} -->
        <br/>
        {{ paper.journal }}{{ paper.conf }}, {{paper.month}} {{ paper.year }} {{ paper.pubinfo }}
        <br/>
    </div>
    {% if more %}<div class="extra-content" style="margin-left:10px;font-size:initial;">
        {{ paper.content | markdownify}}
    </div>{% endif %}
    <div class="button-div">
        {%if paper.arxiv %}  <a href="{{paper.arxiv | relative_url}}" class="textbuttonlink">arXiv</a>   {% endif %}
        {%if paper.poster %} <a href="{{paper.poster | relative_url}}" class="textbuttonlink">poster</a>   {% endif %}
        {%if paper.code %}   <a href="{{paper.code | relative_url}}" class="textbuttonlink">code</a>   {% endif %}
        {%if paper.blog %}   <a href="{{paper.blog | relative_url}}" class="textbuttonlink">blog</a>   {% endif %}
        {% for l in paper.extralinks %}
            <a href="{{l[1] | relative_url}}" class="textbuttonlink">{{l[0]}}</a>
        {% endfor %}
        {% if more %}
        <button class="textbuttonlink toggle-button">
            <span class="text-folded">
                ++ <i class="fa-solid fa-circle-chevron-left"></i></span>
            <span class="text-unfolded">
                <i class="fa-solid fa-circle-chevron-up"></i></span>
        </button>
        {% endif %}
    </div>
</li>
{% endif %}
{% endfor %}
</ul>

<br>

<!-- <h2> Position Papers and Blog Posts </h2> -->
<!-- <div class="color-marker" data-bg-color="{{site.main_pages[1].colors.fg}}" data-fg-color="{{site.main_pages[1].colors.bg}}"></div> -->

<!-- <h2> Various Other Talks </h2> -->
<h2> Academic Talks </h2>
<br/>

<ul class="talk-list">
{% assign talks_sorted = site.talks | sort: "date" | reverse %}
{% for talk in talks_sorted %}
    <li> 
    <span class="talk-title"> {{ talk.title }} </span> 
    <br>
    {% for label in talk.labels %}
        <span class="label label-{{label.type}}">{{label.text}}</span>
    {% endfor %}
    <span class="talk-details">@ {{ talk.venue }}
    <!-- &nbsp;&nbsp;&nbsp; -->
    <!-- <br> -->
    ({{ talk.date | date: "%-e %B %Y" }}).
    </span>
    <div class="button-div" style="margin-top:-2px;margin-bottom:15px;">
        {% for l in talk.links %}
            <a href="{{l[1] | relative_url}}" style="{{l[2]}}" class="textbuttonlink">{{l[0]}}</a>
        {% endfor %}
    </div>
    </li>
{% endfor %}
</ul>

<!--- Eventually notes can go here! -->
<!-- 
    * semiringoid notes
    * notes on qualitative PDGs
    * notes on databases and PDGs
    * 
 -->
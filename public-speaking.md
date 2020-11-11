---
layout: default
title: Public speaking
permalink: "/public-speaking"

---
# Public speaking

I've been lucky enough to be asked to speak at conferences, be interviewed on podcasts and to present webinars. Below is the list of my engagements.

If you'd like me to come and speak at your event, organisation or business then please do [get in touch](mailto:rob@knaptonwright.co.uk).

<div class="card alert alert-warning">
<div class="card-body">
<p class="card-text">⚠ The layout and formatting of this section is a bit of a work in progress. I've recently changed the way these cards are created, using <a href="https://jekyllrb.com/docs/collections/">Jekyll's Collections feature</a>. The next stage is to reinstate separation between previous / upcoming engagements.</p>
</div>
</div>

## 2020

<div class="row row-cols-1 row-cols-md-3">
{% assign talks2020 = site.public-speaking | sort: 'date' | reverse | where: "date", "2020" %}
{% for public-speaking in talks2020 %}
<div class="col mb-3">
<div class="card">
<div class="card-header">
{{public-speaking.type}}
</div>
<div class="card-body">
<h4 class="card-title">{{public-speaking.title}}</h4>
<h5 class="card-subtitle mb-2 text-muted">{{public-speaking.location}}</h5>
<p class="card-text">{{ public-speaking.content | markdownify }}</p>
</div>
<div class="card-footer">
<small class="text-muted">{{public-speaking.date | date_to_long_string}}</small>
</div>
</div>
</div>
{% endfor %}
</div>

## 2019

<div class="row row-cols-1 row-cols-md-3">
{% assign talks2019 = site.public-speaking | sort: 'date' | reverse | where: "date", "2019" %}
{% for public-speaking in talks2019 %}
<div class="col mb-3">
<div class="card">
<div class="card-header">
{{public-speaking.type}}
</div>
<div class="card-body">
<h4 class="card-title">{{public-speaking.title}}</h4>
<h5 class="card-subtitle mb-2 text-muted">{{public-speaking.location}}</h5>
<p class="card-text">{{ public-speaking.content | markdownify }}</p>
</div>
<div class="card-footer">
<small class="text-muted">{{public-speaking.date | date_to_long_string}}</small>
</div>
</div>
</div>
{% endfor %}
</div>

## 2018

<div class="row row-cols-1 row-cols-md-3">
{% assign talks2018 = site.public-speaking | sort: 'date' | reverse | where: "date", "2018" %}
{% for public-speaking in talks2018 %}
<div class="col mb-3">
<div class="card">
<div class="card-header">
{{public-speaking.type}}
</div>
<div class="card-body">
<h4 class="card-title">{{public-speaking.title}}</h4>
<h5 class="card-subtitle mb-2 text-muted">{{public-speaking.location}}</h5>
<p class="card-text">{{ public-speaking.content | markdownify }}</p>
</div>
<div class="card-footer">
<small class="text-muted">{{public-speaking.date | date_to_long_string}}</small>
</div>
</div>
</div>
{% endfor %}
</div>
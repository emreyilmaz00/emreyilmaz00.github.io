---
layout: page
permalink: /services/
title: Services
description: 
nav: true
nav_order: 6
---

<article>
  <div class="cv">
  {% for data in site.data.resume2 %}
    {% if site.jsonresume2 and site.jsonresume2.size > 0 %}
      {% unless site.jsonresume2 contains data[0] %}
        {% continue %}
      {% endunless %}
    {% endif %}
    {% if data[0] == 'meta' or data[1].size == 0 %} {% continue %} {% endif %}
    {% case data[0] %}
    {% when 'review' %}
      <a class="anchor" id="{{ data[0] }}"></a>
      <div class="card mt-3 p-3">
      <div>
        <h3 class="card-title font-weight-medium">{{ data[0] | capitalize }}</h3>
        {% include resume/review.liquid %}
      </div>
      </div>
    {% when 'volunteer' %}
      <a class="anchor" id="{{ data[0] }}"></a>
      <div class="card mt-3 p-3">
      <div>
        <h3 class="card-title font-weight-medium">{{ data[0] | capitalize }}</h3>
        {% include resume/volunteer.liquid %}
      </div>
      </div>
    {% endcase %}
  {% endfor %}
  </div>
</article>

---
layout: page
title: services
permalink: /services/
description: Cool services!.
nav: true
display_categories: [work, fun]
horizontal: false
---

<!-- pages/services.md -->
<div class="services">
{%- if site.enable_service_categories and page.display_categories %}
  <!-- Display categorized services -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_services = site.services | where: "category", category -%}
  {%- assign sorted_services = categorized_services | sort: "importance" %}
  <!-- Generate cards for each service -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for service in sorted_services -%}
      {% include services_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for service in sorted_services -%}
      {% include services.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_services = site.services | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for service in sorted_services -%}
      {% include services_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for service in sorted_services -%}
      {% include services.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>

---
layout: page
title: Projects
permalink: /projects/
description: <!---The projects I was involved in during my Ph.D. studies at Georgia Tech and M.S and B.S years at ODTU/METU--->
nav: true
nav_order: 1
display_categories: [Ph.D. (Georgia Tech),Master of Science (ODTU/METU),Bachelor of Science (ODTU/METU)]
horizontal: false
---

Click on the project photos to get more information!

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
    {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{category}}</h2>
    </a>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
          </div>
        </div>
      {% else %}
      <div class="row row-cols-1 row-cols-md-3">
          {% for project in sorted_projects %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
  
  <!-- Display projects without categories -->
    
  {% assign sorted_projects = site.projects | sort: "importance" %}
  
   <!-- Generate cards for each project -->
    
  {% if page.horizontal %}
    
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
        {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
        {% endfor %}
        </div>
      </div>
    {% else %}
  <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
      {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}

  {% endif %}

</div>

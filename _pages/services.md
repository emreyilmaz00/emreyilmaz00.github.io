---
layout: page
permalink: /services/
title: Services
description: 
nav: true
---

**Reviewing** <br/>
  -<a href="https://arc.aiaa.org/loi/aiaaj">AIAA Journal</a> <br/>
  -<a href="https://www.sciencedirect.com/journal/transportation-research-part-c-emerging-technologies">Transportation Research. Part C: Emerging Technologies</a> <br/> 


**Volunteering and Leadership** <br/>
 -Conference Session Co-Chair, <a href="https://www.aiaa.org/aviation"> _AIAA Aviation Forum_, 2020</a>. <br/>
 -President, _Turkish Student Organization at Georgia Institute of Technology_, 2018-2021, Atlanta, GA. <br/>
 -Organization Team, UAM Expo, _Georgia Institute of Technology_, 2019, Atlanta, GA. <br/>
 

<!-- Education,  Interests -->

  <article>
      <div class="cv">
        {% for entry in site.data.cv %}
          <a class="anchor" id="{{ entry.title }}"></a>
          <div class="card mt-3 p-3">
            <h3 class="card-title font-weight-medium">{{ entry.title }}</h3>
            <div>
              {% if entry.type == 'list' %}
                {% include cv/list.liquid %}
              {% elsif entry.type == 'map' %}
                {% include cv/map.liquid %}
              {% elsif entry.type == 'nested_list' %}
                {% include cv/nested_list.liquid %}
              {% elsif entry.type == 'time_table' %}
                {% include cv/time_table.liquid %}
              {% elsif entry.type == 'list_groups' %}
                {% include cv/list_groups.liquid %}
              {% else %}
                {{ entry.contents }}
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    </article>



<!---

   <article>
      <div class="cv">
        {% for data in site.data.resume %}
          {% if site.jsonresume and site.jsonresume.size > 0 %}
            {% unless site.jsonresume contains data[0] %}
              {% continue %}
            {% endunless %}
          {% endif %}
          {% if data[0] == 'meta' or data[1].size == 0 %} {% continue %} {% endif %}
          <a class="anchor" id="{{ data[0] }}"></a>
          <div class="card mt-3 p-3">
            <h3 class="card-title font-weight-medium">{{ data[0] | capitalize }}</h3>
            <div>
              {% case data[0] %}
                {% when 'volunteer' %}
                  {% include resume/volunteer.liquid %}
                {% else %}
            {% endcase %}
           </div>
         </div>
       {% endfor %}
     </div>
   </article>

**Funding Proposal Experience** <br/>
 -_ARPA-E_: DIFFERENTIATE (Design Intelligence Fostering Formidable Energy Reduction and Enabling Novel Totally Impactful Advanced Technology Enhancements) Program.
For now, this page is assumed to be a static description of your courses. You can convert it to a collection similar to `_projects/` so that you can have a dedicated page for each course.--->

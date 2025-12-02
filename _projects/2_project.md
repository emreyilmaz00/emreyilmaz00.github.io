---
layout: page
title: eVTOL Aircraft
description: Control Allocation, Hybrid-Automata, Path Planning, Contingency Planning, Flight Dynamics Modeling
img: assets/img/evtol0.png
importance: 2
category: Ph.D. (Georgia Tech)
giscus_comments: false
related_publications: true
---

**Introduction**

With the introduction of novel eVTOL aircraft and drones into air space, the complexity in aircraft design and air space management will drastically increase. Safety and efficiency concerns must be solved before successful commercial flight operations can begin. In my research related to eVTOL aircraft, the objective is to respond to these concerns by formulating and solving optimization problems that can help enabling these technologies.  

Specifically, I focused on the following subjects in my PhD thesis {% cite yilmaz23phd %}:
  - eVTOL Aircraft Flight Dynamics and Performance Modeling 
  - Hybrid Automaton-Based Planning 
  - Control Allocation Optimization for Over-Actuated eVTOL Aircraft {% cite yilmaz24 %}
  - Distributed Electric Propulsion Concepts
  - Transition Corridors and Tilting Schedule Considerations
  - Multi-Disciplinary Analysis and Optimization Frameworks 


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vsp0.png" title="Bare Airframe" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vsp1.png" title="Props On" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    VSPAERO Trailing Vortex Solution at Forward Flight Condition
</div>
 
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/la8_ff.mp4" title="Forward Flight Condition" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/la8_h.mp4" title="Hover Condition" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<div class="caption">
   VSPAERO Trailing Vortex Solutions
</div>

<video loop controls='true' width='100%' height='100%'>      
   <% include video.liquid path="assets/video/la8_ff.mp4" type='video/mp4'>
</video>

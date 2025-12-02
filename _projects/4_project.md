---
layout: page
title: Advanced Air Mobility
description: Multi Agent Path Planning, MPC, Deep RL, MuZero, Pseudospectral Methods 
img: assets/img/traj2.png
importance: 3
category: Ph.D. (Georgia Tech)
related_publications: true
toc:
  sidebar: left
---

AAM/UAM air traffic management problems were formulated and solved via various optimization approaches. 

## Model Predictive Control Approach

We solved high-capacity urban air traffic optimization problems using model predictive control with constraint aggregation techniques. In a multi-agent environment, agent trajectories were optimized based on origin-destination pairs for the following optimization paradigms: 
  - Centralized optimization at each time step 
  - Sequential optimization at each time step
  - Sequential optimization for the entire flight trajectory

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/mpc_aam.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
   AAM/UAM Air Traffic Optimization Using Model Predictive Control (MPC) and Constraint Aggregation
</div>

<div class="caption">
    The multi-agent path planning problem is being solved at each time instant using centralized MPC framework)  
</div> 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/mpc1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/mpc2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/mpc3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Optimal Paths at Various Time Steps (The planning problem is initialized in a symmetric manner and solved using centralized MPC framework)  
</div> 
 
 
## Deep Reinforcement Learning Approach

  Inspired by the success of DeepMind’s deep reinforcement learning algorithm, <a href="https://deepmind.com/blog/article/muzero-mastering-go-chess-shogi-and-atari-without-rules">MuZero</a>, in mastering games without any knowledge about the rules and the environment, we investigated the feasibility of using MuZero for AAM research by casting the dynamic obstacle avoidance problem as a game.
 
 - Published a conference paper: <a href="https://arc.aiaa.org/doi/10.2514/6.2021-2377">AIAA AVIATION'21</a> {% cite yilmaz21 %}
  
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/muzero0.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Dynamic Obstacle Avoidance Achieved by Path Planning Networks Trained Using the MuZero Algorithm  
</div>


## Mixed Integer Linear Programming 

In this project led by Kotwicz Herniczek, corridor design problems were formulated as minimum cost multi-commodity flow problems. The goal is to generate a corridor network that is globally optimum in terms of trip length, airspace complexity, and corridor network size using linear programming (LP) and mixed integer linear programming (MILP). 
    
 - Co-authored a conference paper: <a href="https://arc.aiaa.org/doi/10.2514/6.2021-2376">[AIAA'21b]</a> {% cite kotwicz21 %}
 - Co-authored a journal paper: <a href="https://arc.aiaa.org/journal/jat">[AIAA JAT]</a> {% cite kotwicz22 %}


## Pseudospectral Methods

Pseudospectral methods were explored to achieve minimum time multi agent paths using using OpenMDAO, Dymos, and SNOPT.
 
Contributed to <a href="https://olasanni1.github.io/ETOL/index.html">Extensible Trajectory Optimization Library (ETOL)</a> for Dymos integration


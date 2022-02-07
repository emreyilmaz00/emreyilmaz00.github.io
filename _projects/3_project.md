---
layout: page
title: UAM Air Traffic Optimization
description: Multi Agent Path Planning, MPC, Constraint Aggregation, Deep RL, MuZero Algorithm, Pseudospectral Methods 
img: assets/img/7.jpg  
importance: 3
category: Ph.D. (Georgia Tech)
---

**Advanced Air Mobility/UAM Air Traffic Optimization**

AAM/UAM air traffic optimization research activites included multi-agent path planning optimization and dynamic obstacle avoidance using several optimizer paradigms such as centralized and sequential optimization. Model Predictive Control, constraint aggregation, Deep Reinforcement Learning techniques, and Optimal Control via Pseudospectral methods are investigated, implemented, and used for this urpose.

**UAM air traffic optimization using model predictive control and constraint aggregation.**

Model Predictive Control Approach to Urban Air Traffic Optimization via Constraint Aggregation 

Goal: Solve high-capacity urban air traffic optimization problems using model predictive control approach (receding horizon) with constraint aggregation  

Optimization Paradigms: 
  i ) Centralized optimizer at each time step 
 ii )  Sequential optimizer at each time step
Iii )  Sequential optimizer for the entire flight trajectory

Interior-Point Optimizer Library is used to solve the non-linear constrained optimization problems regarding MPC formulation. To achieve this, a large-scale linear system is repeatedly solved via a sparse symmetric indefinite linear solver.

Multi-agent optimal trajectories based on origin-destination pairs in high-capacity air traffic environment
 
Used libraries: DoMPC, CasADi, IPOPT, and sparse linear solvers.
 
 - A journal paper is in preparation.

 
**Deep Reinforcement Learning Approach to Air Traffic Optimization Using the MuZero Algorithm**  

 -Inspired by the success of DeepMind’s algorithm, MuZero, in mastering games without any knowledge about the rules and the environment 
 -Motivation: Use MuZero for advanced air mobility research by casting the dynamic obstacle avoidance problem as a game
 -Goal: Determine optimal policies for agents in dynamic air traffic environment based on state-action pairs and reward-based optimization of MuZero’s networks for learning the value, the policy, and the reward
 - Sequential Path Planning Optimization Approach at Each Time Step  
 - ATM Path Planning in context of AAM using a Deep RL technique (<a href=https://deepmind.com/blog/article/muzero-mastering-go-chess-shogi-and-atari-without-rules">[MuZero Algorithm])
  - Presented a conference paper in <a href="https://arc.aiaa.org/doi/10.2514/6.2021-2377">[AIAA'21a]</a>
 
 
    
    
 **Optimal Control Approach to Air Traffic Optimization Using SQP Solvers and Pseudospectral Methods**  

 - Used libraries: OpenMDAO, Dymos, SNOPT, SLSQP, etc.
 
 - Contributed to <a href="https://olasanni1.github.io/ETOL/index.html">Extensible Trajectory Optimization Library (ETOL)</a> for Dymos integration
   
    <!---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    --->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>


**Highways in the Sky for Urban Air Mobility Operations Summary**

Leaded by Kotwicz Herniczek.

Formulate corridor design problem as a minimum cost multi-commodity flow problem

Goal: generate a corridor network that is globally optimum in terms of trip length, airspace complexity, and corridor network size

Solved using Gurobi LP and MILP solvers

Limits the structural design of corridors

Current work focuses on allowing corridors with cardinal directions (N, S, W, E, climb, and descent)

     - Investigation of Air Traffic Metrics, Creating Optimal Highway Corridors Using Multi-Commodity Flow and MILP
    - Published an AIAA conference papers: <a href="https://arc.aiaa.org/doi/10.2514/6.2021-2376">[AIAA'21b]</a>
    - Submitted a journal paper to <a href="https://arc.aiaa.org/journal/jat">[AIAA JAT]</a> (current status: accepted).




<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>



<!---
{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %} --->


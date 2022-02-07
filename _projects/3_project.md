---
layout: page
title: UAM Air Traffic Optimization
description: Multi Agent Path Planning for UAM Air Traffic Optimization, Model Predictive Control, Constraint Aggregation, Deep Reinforcement Learning, MuZero Algorithm, Pseudospectral Methods <!---a project that redirects to another website--->
img: assets/img/7.jpg
redirect: https://unsplash.com
importance: 3
category: Ph.D. (Georgia Tech)
---

**Advanced Air Mobility/UAM Air Traffic Optimization**: Multi-Agent Path Planning Optimization, Dynamic Obstacle Avoidance, Model Predictive Control, Constraint Aggregation, Deep Reinforcement Learning, and Optimal Control via Pseudospectral Methods 


UAM air traffic optimization using model predictive control and constraint aggregation. Solved dynamic obstacle avoidance problems. Used libraries: OpenMDAO, Dymos, SNOPT, IPOPT, SLSQP, Gurobi etc.
    \item ATM Path Planning in context of AAM using a Deep RL technique (\href{https://deepmind.com/blog/article/muzero-mastering-go-chess-shogi-and-atari-without-rules}{MuZero Algorithm})
    \item Investigation of Air Traffic Metrics, Creating Optimal Highway Corridors Using Multi-Commodity Flow and MILP
    \item Contributed to \href{https://olasanni1.github.io/ETOL/index.html}{Extensible Trajectory Optimization Library (ETOL)} for Dymos integration
    \item Published two AIAA conference papers: \href{https://arc.aiaa.org/doi/10.2514/6.2021-2377}{[AIAA'21a]}, \href{https://arc.aiaa.org/doi/10.2514/6.2021-2376}{[AIAA'21b]}. Submitted a journal paper to \href{https://arc.aiaa.org/journal/jat}{[AIAA JAT]}.

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

Deep Reinforcement Learning Approach to Air Traffic Optimization Using the MuZero Algorithm   

Inspired by the success of DeepMind’s algorithm, MuZero, in mastering games without any knowledge about the rules and the environment 
Motivation: Use MuZero for advanced air mobility research by casting the dynamic obstacle avoidance problem as a game
Goal: Determine optimal policies for agents in dynamic air traffic environment based on state-action pairs and reward-based optimization of MuZero’s networks for learning the value, the policy, and the reward
Sequential Path Planning Optimization Approach at Each Time Step  



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

Model Predictive Control Approach to Urban Air Traffic Optimization via Constraint Aggregation 

Goal: Solve high-capacity urban air traffic optimization problems using model predictive control approach (receding horizon) with constraint aggregation  

Optimization Paradigms: 
  i ) Centralized optimizer at each time step 
 ii )  Sequential optimizer at each time step
Iii )  Sequential optimizer for the entire flight trajectory

Interior-Point Optimizer Library is used to solve the non-linear constrained optimization problems regarding MPC formulation. To achieve this, a large-scale linear system is repeatedly solved via a sparse symmetric indefinite linear solver.

Multi-agent optimal trajectories based on origin-destination pairs in high-capacity air traffic environment
 

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


**Highways in the Sky for Urban Air Mobility Operations Summary**

Leaded by Kotwicz Herniczek.

Formulate corridor design problem as a minimum cost multi-commodity flow problem

Goal: generate a corridor network that is globally optimum in terms of trip length, airspace complexity, and corridor network size

Solved using Gurobi LP and MILP solvers

Limits the structural design of corridors

Current work focuses on allowing corridors with cardinal directions (N, S, W, E, climb, and descent)

 

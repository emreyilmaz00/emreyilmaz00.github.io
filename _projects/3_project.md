---
layout: page
title: UAM Air Traffic Optimization
description: Multi Agent Path Planning, MPC, Constraint Aggregation, Deep RL, MuZero Algorithm, Pseudospectral Methods 
img: assets/img/traj2.png  
importance: 3
category: Ph.D. (Georgia Tech)
driveId: 1dSMf11HeAFsiYn5R0H17JJWpTbpuJpkd/preview
---

**AAM/UAM Air Traffic Optimization Using Model Predictive Control (MPC) and Constraint Aggregation**

We solved high-capacity urban air traffic optimization problems using model predictive control with constraint aggregation techniques. In a multi-agent environment, agent trajectories were optimized based on origin-destination pairs for the following optimization paradigms: 
  - Centralized optimization at each time step 
  - Sequential optimization at each time step
  - Sequential optimization for the entire flight trajectory

<!-- https://drive.google.com/file/d/1dSMf11HeAFsiYn5R0H17JJWpTbpuJpkd/view?usp=sharing -->

{% include googleDrivePlayer.html id=page.driveId %}

<div class="caption">
    The multi-agent path planning problem is being solved at each time instant using centralized MPC framework)  
</div> 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/mpc1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/mpc2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/mpc3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Optimal Paths at Various Time Steps (The planning problem is initialized in a symmetric manner and solved using centralized MPC framework)  
</div> 
 
 
**Deep Reinforcement Learning Approach to Air Traffic Optimization Using the MuZero Algorithm**  

  Inspired by the success of DeepMind’s deep reinforcement learning algorithm, <a href="https://deepmind.com/blog/article/muzero-mastering-go-chess-shogi-and-atari-without-rules">MuZero</a>, in mastering games without any knowledge about the rules and the environment, we investigated the feasibility of using MuZero for AAM research by casting the dynamic obstacle avoidance problem as a game.
 
 - Published a conference paper: <a href="https://arc.aiaa.org/doi/10.2514/6.2021-2377">AIAA AVIATION'21</a>
  
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/muzero0.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Dynamic Obstacle Avoidance Achieved by Path Planning Networks Trained Using the MuZero Algorithm  
</div>


**Highways in the Sky for Urban Air Mobility Operations Summary**

In this project led by Kotwicz Herniczek, corridor design problem were formulated as a minimum cost multi-commodity flow problem. The goal is to generate a corridor network that is globally optimum in terms of trip length, airspace complexity, and corridor network size using linear programming (LP) and mixed integer linear programming (MILP) problems and Gurobi. 
    
 - Published a conference paper: <a href="https://arc.aiaa.org/doi/10.2514/6.2021-2376">[AIAA'21b]</a>
 - Published a journal paper: <a href="https://arc.aiaa.org/journal/jat">[AIAA JAT]</a>
     
 **Optimal Control Approach to Air Traffic Optimization Using SQP Solvers and Pseudospectral Methods**  

Pseudospectral methods were explored to achieve minimum time multi agent paths using OpenMDAO, Dymos, and SNOPT libraries.
 
  Contributed to <a href="https://olasanni1.github.io/ETOL/index.html">Extensible Trajectory Optimization Library (ETOL)</a> for Dymos integration
   
<!--- An interior-point method based optimizer library was used to solve the non-linear constrained MPC optimization problems. Specifically, a large-scale linear system was repeatedly solved via a sparse symmetric indefinite linear solver. DoMPC, CasADi, IPOPT, and sparse linear solvers were used. A journal paper is in preparation.
Corridors were allowed for cardinal directions (N, S, W, E, climb, and descent) to limit the structural design. Air traffic metrics were investigated and utilized.**Introduction**

 Our goal was to determine optimal policies for agents in dynamic air traffic environment based on state-action pairs and reward-based optimization of MuZero’s networks that learn the value, the policy, and the reward. For this purpose, the sequential path planning optimization was implemented at each time step.

AAM (Advanced Air Mobility) and UAM (Urban Air Mobility) research activities include multi-agent path planning, dynamic obstacle avoidance, and several air traffic optimization paradigms such as centralized and sequential optimization. Problems were formulated using model predictive control (MPC), deep reinforcement learning, optimal control via pseudospectral methods, and mixed integer linear programming. <!--- Constraint aggregation is also investigated and utilized for this purpose. --->
--->

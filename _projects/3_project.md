---
layout: page
title: UAM Air Traffic Optimization
description: Multi Agent Path Planning, MPC, Constraint Aggregation, Deep RL, MuZero Algorithm, Pseudospectral Methods 
img: assets/img/traj2.png  
importance: 3
category: Ph.D. (Georgia Tech)
driveId: 1dSMf11HeAFsiYn5R0H17JJWpTbpuJpkd/preview
---

AAM (Advanced Air Mobility) and UAM (Urban Air Mobility) air traffic optimization research activities include multi-agent path planning, dynamic obstacle avoidance, and several paradigms such as centralized and sequential optimization. Problems are formulated using approaches such as model predictive control (MPC), deep reinforcement learning, optimal control via pseudospectral methods, and mixed integer linear programming. <!--- Constraint aggregation is also investigated and utilized for this purpose. --->

**AAM/UAM Air Traffic Optimization Using Model Predictive Control (MPC) and Constraint Aggregation**

<!-- https://drive.google.com/file/d/1dSMf11HeAFsiYn5R0H17JJWpTbpuJpkd/view?usp=sharing -->

{% include googleDrivePlayer.html id=page.driveId %}

We solve high-capacity urban air traffic optimization problems using model predictive control (receding horizon) approach with constraint aggregation techniques. In a multi-agent environment, agent trajectories are optimized based on origin-destination pairs. Several optimization paradigms are considered: 
  - Centralized optimizer at each time step 
  - Sequential optimizer at each time step
  - Sequential optimizer for the entire flight trajectory

An interior-point optimizer library is used to solve the non-linear constrained optimization problems formulated using MPC approach. To achieve this, a large-scale linear system is repeatedly solved via a sparse symmetric indefinite linear solver. The used libraries include DoMPC, CasADi, IPOPT, and sparse linear solvers. A journal paper is in preparation for this line of research.

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

  Inspired by the success of DeepMind’s deep reinforcement learning algorithm, <a href="https://deepmind.com/blog/article/muzero-mastering-go-chess-shogi-and-atari-without-rules">MuZero</a>, in mastering games without any knowledge about the rules and the environment, we investigated the feasibility of using MuZero for advanced air mobility research by casting the dynamic obstacle avoidance problem as a game. Our goal is to determine optimal policies for agents in dynamic air traffic environment based on state-action pairs and reward-based optimization of MuZero’s networks that learn the value, the policy, and the reward. For this purpose, the sequential path planning optimization is implemented at each time step.
 
 - Presented a conference paper in <a href="https://arc.aiaa.org/doi/10.2514/6.2021-2377">AIAA AVIATION'21</a>.
  
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/muzero0.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Dynamic Obstacle Avoidance Achieved by Path Planning Networks Trained Using the MuZero Algorithm  
</div>


**Highways in the Sky for Urban Air Mobility Operations Summary**

In this project leaded by Kotwicz Herniczek, we formulate corridor design problem as a minimum cost multi-commodity flow problem. The goal here is to generate a corridor network that is globally optimum in terms of trip length, airspace complexity, and corridor network size. We solved the linear programming (LP) and mixed integer linear programming (MILP) problems using Gurobi. Current work focuses on allowing corridors with cardinal directions (N, S, W, E, climb, and descent) which limits the structural design. Air traffic metrics are investigated and utilized for this purpose as well.
    
 - Published an AIAA conference papers: <a href="https://arc.aiaa.org/doi/10.2514/6.2021-2376">[AIAA'21b]</a>
 - Submitted a journal paper to <a href="https://arc.aiaa.org/journal/jat">[AIAA JAT]</a> (current status: accepted).

     
 **Optimal Control Approach to Air Traffic Optimization Using SQP Solvers and Pseudospectral Methods**  

Research activities focused on using pseudospectral methods and colored derivatives with the objective of obtaining minimum time multi agent paths.

  Used libraries: OpenMDAO, Dymos, SNOPT.
 
  Contributed to <a href="https://olasanni1.github.io/ETOL/index.html">Extensible Trajectory Optimization Library (ETOL)</a> for Dymos integration

  
  
  
   

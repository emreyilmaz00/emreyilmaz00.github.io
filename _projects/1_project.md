---
layout: page
title: Transfer Learning for Aerodynamics Applications
description: Transfer Learning, Deep Learning, Wind Tunnel Tests 
img: assets/img/cfd2wt.png
importance: 1
category: Research (DLR)
related_publications: true
---


## Predicting Onflow Parameters for Domain and Task Adaptation

 - A convolutional neural network (ConvNet) model is used to predict angle of attack and onflow speed based on sparse surface pressure data.
 - A transfer learning framework utilizing the ConvNet model is proposed for domain and task adaptation.
 - Demonstration cases including adaptation to changing data distribution, domain extension, noisy data, and task changes are investigated.
 - Published a journal paper: <a href="https://www.sciencedirect.com/science/article/pii/S1270963825012246">Aerospace Science and Technology</a> {% cite yilmaz26 %}.


## Predicting Operating Parameters During Wind Tunnel Tests

 - With the goal of bringing the knowledge learned from computational fluid dynamics (CFD) data to the wind tunnel testing phase with streaming data, a transfer learning approach is proposed and demonstrated for a wind turbine blade tip.
 - This approach requires first training a neural network offline by using only CFD data, then freezing the weights of the selected layers, and retraining the remaining weights using only wind tunnel data.
 - The feasibility of knowledge transfer from CFD runs to wind tunnel tests as well as real-time prediction and online learning during the experiments are successfully demonstrated.
 - Published a conference paper: <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2025-3588">AIAA Aviation'25</a> {% cite yilmaz25 %}.

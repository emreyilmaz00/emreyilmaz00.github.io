---
layout: page
title: Physics Informed ML
description: Deep Learning Applications to Airfoil Performance Prediction and Airfoil Inverse Design Problems, Deep Convolutional Neural Networks, Conditional GANs
img: assets/img/whycnn.png
importance: 2
category: Ph.D. (Georgia Tech)
---

In an NSF workshop in 2012, **Sobieski** stated that "_MDO needs to break out of its gilded cage, and find ways to help conceive new designs, not just search the design space defined by the user._"} [**Simpson** _et al._] Inspired by this vision, we proposed using deep learning methods as a new possible direction to overcome fundamental limitations of MDO parametrization.  

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/gilded3.png" title="A New Research Direction for MDO" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/hlmotiv.png" title="High Level Motivations" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Deep Learning as a direction for MDAO and High Level Motivations of Deep Learning 
</div>


**A Convolutional Neural Network Approach for Training Predictors for Airfoil Performance**

 In this work, we trained medium-fidelity predictors for airfoil performance prediction via deep convolutional neural networks. The framework is implemented using Tensorflow.
  
<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/whycnn.png" title="Why to use Convolutional Neural Networks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ...
</div>

 --Presented in <a href="https://arc.aiaa.org/doi/10.2514/6.2017-3660">AIAA Aviation'17</a>.


**A Deep Learning Approach to an Airfoil Inverse Desing Problem**

We attempted to solve airfoil inverse problem using a framework constructed with deep convolutional neural networks.

  --Presented in <a href="https://arc.aiaa.org/doi/10.2514/6.2018-3420">AIAA Aviation'18</a>.
   

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/inv0.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/inv1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    .
</div>


**Conditional Generative Adversarial Network Framework for Airfoil Inverse Design**

We used the game theoretic framework provided by training conditional generative adversarial networks (CGAN) to generate airfoil shapes given desired airfoil performance criteria. 

  --Presented in <a href="https://arc.aiaa.org/doi/10.2514/6.2020-3185">AIAA Aviation'20</a>.

<div class="row">
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.html path="assets/img/image_at_epoch_0025.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.html path="assets/img/image_at_epoch_0800.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        {% include figure.html path="assets/img/image_at_epoch_1600.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Airfoil Shape Generation by the generator in GAN Framework Shown at Different Epochs
</div>



 
 

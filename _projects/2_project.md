---
layout: page
title: Physics Informed ML
description: Deep Learning Applications to Airfoil Performance Prediction and Airfoil Inverse Design Problems, Deep Convolutional Neural Networks, Conditional GANs
img: assets/img/whycnn.png
importance: 2
category: Ph.D. (Georgia Tech)
---

**Introduction**

In an NSF workshop in 2012, **Sobieski** stated that "_MDO needs to break out of its gilded cage, and find ways to help conceive new designs, not just search the design space defined by the user._". Inspired by this vision, we proposed using deep learning methods as a new possible direction to overcome fundamental limitations of multi-disciplinary design and optimization (MDO) parametrization.  <!--- [**Simpson** _et al._] --->

<div class="row">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.html path="assets/img/gilded3.png" title="A New Research Direction for MDO" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.html path="assets/img/hlmotiv.png" title="High Level Motivations" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Deep Learning as a direction for MDO and High Level Motivations 
</div>


**A Convolutional Neural Network Approach for Training Predictors for Airfoil Performance**

 - Medium-fidelity predictors were trained for predicting airfoil performance using deep convolutional neural networks. The framework was implemented in Tensorflow. 
 - Published a conference paper: <a href="https://arc.aiaa.org/doi/10.2514/6.2017-3660">AIAA Aviation'17</a>.
  
<div class="row">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.html path="assets/img/whycnn.png" title="Why to use Convolutional Neural Networks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     The Application of Deep Convolutional Neural Networks to Airfoil Performance Prediction
</div>

 

**A Deep Learning Approach to an Airfoil Inverse Desing Problem**

 - Airfoil inverse problem was reformulated and solved using a framework constructed with deep convolutional neural networks.
 - Published a conference paper: <a href="https://arc.aiaa.org/doi/10.2514/6.2018-3420">AIAA Aviation'18</a>.
   
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/inv0.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/inv1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
      The Application of Deep Convolutional Neural Networks to Airfoil Inverse Design
</div>


**Conditional Generative Adversarial Network Framework for Airfoil Inverse Design**

 - A game theoretic framework was investigated by training conditional generative adversarial networks (CGANs) to generate airfoil shapes given the desired airfoil performance criteria. 
 - Published a conference paper: <a href="https://arc.aiaa.org/doi/10.2514/6.2020-3185">AIAA Aviation'20</a>.
 - **Funding Proposal Experience** <br/>
 -_ARPA-E_: DIFFERENTIATE (Design Intelligence Fostering Formidable Energy Reduction and Enabling Novel Totally Impactful Advanced Technology Enhancements) Program.

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/image_at_epoch_0025.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/image_at_epoch_0800.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/image_at_epoch_1600.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Airfoil Shape Generation by the Generator in GAN Framework Shown at Different Epochs
</div>



 
 

---
layout: page
title: Physics Informed Machine Learning
description: Deep Learning Applications to Airfoil Performance Prediction and Airfoil Inverse Design Problems <!---a project with a background image--->
img: assets/img/3.jpg
importance: 2
category: Ph.D. (Georgia Tech)
---

In an NSF workshop in 2012, **Sobieski** stated that "_MDO needs to break out of its gilded cage, and find ways to help conceive new designs, not just search the design space defined by the user._"} [**Simpson** _et al._] Inspired by this vision, we proposed using deep learning methods as a new possible direction to overcome fundamental limitations of MDO parametrization.  

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/gilded3.png" title="A New Research Direction for MDO" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/hlmotiv.png" title="High Level Motivations" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Deep Learning as a direction for MDAO and High Level Motivations of Deep Learning 
</div>


**A Convolutional Neural Network Approach for Training Predictors for Airfoil Performance**
  --Presented in <a href="https://arc.aiaa.org/doi/10.2514/6.2017-3660">AIAA Aviation'17</a>.
 
<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/whycnn.png" title="Why to use Convolutional Neural Networks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ...
</div>



**A Deep Learning Approach to an Airfoil Inverse Desing Problem**

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
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


**Conditional Generative Adversarial Network Framework for Airfoil Inverse Design**

  --Presented in <a href="https://arc.aiaa.org/doi/10.2514/6.2020-3185">AIAA Aviation'20</a>.

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
    Airfoil Shape Generation by GAN with Epochs
</div>




<!---

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal it's glory in the next row of images.

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---
--->


<!---
The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above: 
--->

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
{% endraw %}
--->

---
title: Language models recognize dropout and Gaussian noise applied to their activations
authors: |
    Damiano&nbsp;Fornasiere<sup>*</sup>, 
    Mirko&nbsp;Bronzi<sup>*</sup>, 
    Spencer&nbsp;Kitts<sup>*</sup>, 
    Alessandro&nbsp;Palmas, 
    Yoshua&nbsp;Bengio<sup>&dagger;</sup>, 
    Oliver&nbsp;Richardson<sup>&dagger;</sup>
type: preprint
conf: preprint 
arxiv: https://arxiv.org/abs/2604.17465 
year: 2026
month: April
awards:
    - Honorable Mention SPAR Demo
extralinks:
    - ['webpage', 'https://lawzero-org.github.io/llm-dropout-noise-recognition/']
    - ['code', 'https://github.com/lawzero-org/llm-dropout-noise-recognition/']
---


<div style="margin-top:20px;"> <!--max-width:80ch;-->

<sup>*</sup>main contribution, 
<sup>&dagger;</sup>supervision

<img style="float:right;margin-left:15px;margin-bottom:5px;border-radius:20px;max-width:100%;" 
    data-src="{{ site.baseurl }}/images/4papers/dropnoise-inv2-fig1.png"/>

<b>Abstract.</b>
We provide evidence that language models can detect, localize and, to a certain degree, verbalize the
difference between perturbations applied to their activations. More precisely, we either (a) mask activations,
simulating dropout, or (b) add Gaussian noise to them, at a target sentence. We then ask a multiple-choice
question such as “Which of the previous sentences was perturbed?” or “Which of the two perturbations was
applied?”. We test models from the Llama, Olmo, and Qwen families, with sizes between 8B and 32B, all of
which can easily detect and localize the perturbations, often with perfect accuracy. These models can also
learn, when taught in context, to distinguish between dropout and Gaussian noise. Notably, Qwen3-32B’s
zero-shot accuracy in identifying which perturbation was applied improves as a function of the perturbation
strength and, moreover, decreases if the in-context labels are flipped, suggesting a prior for the correct
ones—even modulo controls. Because dropout has been used as a training-regularization technique, while
Gaussian noise is sometimes added during inference, we discuss the possibility of a data-agnostic “training
awareness” signal and the implications for AI safety.

</div>
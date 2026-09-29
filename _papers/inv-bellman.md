---
# hide: true
title: "Inverting the Bellman Equation: from Q-values to World-Models"
authors: Alistair Letcher, Mattie&nbsp;Fellows, Alexander&nbsp;David&nbsp;Goldie, Jonathan&nbsp;Richens, Jakob&nbsp;Nicolaus&nbsp;Foerster, Oliver&nbsp;Ethan&nbsp;Richardson
type: conference
# conf: preprint (submitted to NeurIPS)
conf: NeurIPS
year: 2026
arxiv: https://arxiv.org/abs/2606.21173
month: December
extralinks:
    - ['webpage', 'https://inverting-bellman.github.io/']
    - ['code', 'https://github.com/aletcher/inverting-bellman']
    - ['<i class="fa-brands fa-x-twitter"></i><i class="fa-brands fa-twitter"></i>', 'https://x.com/_aletcher/status/2069412693744713935']
---

<div style="margin:20px;"> <!--max-width:80ch;-->
<img style="float:right;margin-left:15px;margin-bottom:20px;border-radius:20px;max-width:100%;" 
    data-src="{{ site.baseurl }}/images/4papers/qv2wm-inv-fig1_smaller.png"/>
</div>

**Abstract.**
Model-based and model-free reinforcement learning are traditionally viewed as
separate paradigms: instead of learning a model of the transition kernel P, model-free agents typically estimate value functions tied to a specific policy and reward.
In this paper, we challenge this dichotomy by proving that value-based agents
trained on a sufficiently rich set of reward functions, e.g. using goal-conditioned
RL, implicitly encode a unique and accurate world model. To extract this model in
practice, we introduce P-learning, an inverse analogue to Q-learning that samples
from an agent’s Q-values, policies and rewards to decode its internal model of
the environment. We then provide sufficient conditions on the type and number
of goals for which agents encode the true kernel P, covering both stochastic
and deterministic MDPs over finite or continuous state spaces. Even when our
assumptions are violated, we empirically demonstrate that agents trained on a
handful of reward functions encode accurate dynamics in Reacher, MountainCar
and stochastic variants of FourRooms. Surprisingly, we find that policies trained
exclusively on a Reacher agent’s implicit world model are quasi-optimal on out-of-distribution, velocity-based goals despite position-only training – suggesting
that agents contain hidden generalisation capabilities and providing a new lens into
the connection between model-based, model-free, and goal-conditioned RL
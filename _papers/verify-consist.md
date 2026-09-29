---
# title: How to Verify Consistency of Probabilistic Claims
title: How to Verify Probabilistic Consistency of Predictive Models
type: preprint
month: August
year: 2026
conf: preprint
arxiv: https://arxiv.org/abs/2608.11181
# authors: Yoshua Bengio, Shafi Goldwasser, Orr Paradise, Oliver Richardson
authors: Orr Paradise, Oliver Richardson, Yoshua Bengio, Shafi Goldwasser
---

**Abstract.**
When a probabilistic predictor answers many conditional-probability queries, are its answers
approximately self-consistent----and, if so, can this be verified in polynomial-time? This problem is of interest
for AI safety, when safety is derived from honesty about probabilistic predictions of unwanted
outcomes potentially caused by an AI action. To address it, we construct an interactive PCP
as follows. Let a predictive model be specified by a probability circuit P and a circuit Q which
outputs confidence in predictions. P and Q together implicitly specify exponentially many
probabilistic claims. We show a protocol in which a polynomial time verifier can verify (P, Q)’s
approximate consistency. The verifier is given the pair of circuits (P, Q), which it evaluates
at only a few points; alongside them it is given a proof oracle, an encoding of a witnessing
probability distribution allegedly consistent with the predictions of (P, Q), which it reads at a
few locations while interacting with a single un-trusted prover.
En-route to the above result, we need to ensure the existence of a sparse witnessing prob-
ability distribution consistent with the model predictions. To do so, we first consider witness
distributions for the consistency of explicit (rather than specified by a predictor) probabilistic
claims: say m claims, each of the form “Pr[Y = 1 | X = x] = p”, over n Boolean variables.
Building on a body of literature initiated by Nilsson (Artif. Intel. 1986), we place ℓ2
approximate probabilistic consistency of explicit claims in NP with certificates of length O(mn + log B)
in the input bit-precision B; and further show how a small additive completeness–soundness
gap removes dependence on the model’s precision B. This will be important for our interactive
PCP constructions.

Together these results provide a complexity-theoretic foundation for certifying the self-
consistency of probabilistic predictors. We view the explicit Interactive PCP we present as
the first step toward the eventual training of predictive models to prove their own consistency.


<div style="margin:20px;"> <!--max-width:80ch;-->
<img style="float:right;margin-left:15px;margin-bottom:20px;border-radius:20px;max-width:100%;" 
    data-src="{{ site.baseurl }}/images/4papers/BGPR-fig1.png"/>
</div>

Left: certifying an ℓ2 upper bound on consistency is NP-complete for explicitly given claims.
Right: verifying an entire implicitly encoded predictive model is in NEXPTIME and can therefore be done in polynomial time by interacting with a powerful prover.
    We go further and construct an explicit protocol for this purpose. 
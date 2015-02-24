title: Let's Read Principles of Planetary Climate, Chapter 2
category: planetaryclimate
date: 2015-02-23

<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});
</script>
<script type="text/javascript" src="path-to-mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

###Exercise 2.1
We have
\\[
p\_A = \frac{R^{\*}}{M\_A}\rho\_AT
\\]

\\[
p\_B = \frac{R^{\*}}{M\_B}\rho\_BT
\\]

Adding these together, we get:

\\[
p\_A + p\_B = \frac{R^{\*}}{M\_A}\rho\_AT + \frac{R^{\*}}{M\_B}\rho\_BT
\\]

which simplifies to:

\\[
p\_A + p\_B = R^{\*}T(\frac{\rho\_A}{M\_A} + \frac{\rho\_B}{M\_B})
\\]

We know that \\( \rho = \frac{nM}{\mu} \\). Plugging this in we get:
\\[
p\_A + p\_B = R^{\*}T(\frac{n\_A + n\_B}{\mu})
\\]

Now we also know that
\\[
p\_{A+B} = \frac{R^{\*}}{M}\rho T
\\]

And in this case,

\\[
M = \eta\_AM\_A + \eta\_BM\_B
\\]

Since \\( \rho\_A + \rho\_B = \rho \\), we have

\\[
p\_{A+B} = R^{\*}T \frac{\rho\_A + \rho\_B}{\eta\_AM\_A + \eta\_BM\_B}
\\]

We expand the \\( \eta \\)s in the fraction on the right side:
\\[
\frac{(\rho\_A + \rho\_B)(n\_A + n\_B)}{n\_AM\_A + n\_BM\_B}
\\]

Plugging in \\( \rho = \frac{nM}{\mu} \\) again we get:

\\[
\frac{(n\_AM\_A + n\_BM\_B)(n\_A + n\_B)}{n\_AM\_A + n\_BM\_B}
\\]

After cancelling, we can plug this back into the expression for \\( p \\):

\\[
p\_{A+B} = R^{\*}T \frac{n\_A + n\_B}{\mu}
\\]

So we see that

\\[
p\_{A+B} = p\_A + p\_B = R\_{A+B} \rho\_{A+B} T
\\]

Additionally, we can see that

\\[
R\_{A+B} = \frac{R^{\*}}{M}
\\]

Where \\( M \\) is the mean molecular weight.

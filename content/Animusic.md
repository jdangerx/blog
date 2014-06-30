Title: Animusic
Date: 2014-06-29
tags: Scav
slug: animusic
cover: full_animusic.jpg

This year for the
[Scavenger Hunt](http://scavhunt.uchicago.edu/list2014_2final.pdf) I
mostly worked on this item:

*49. Bring us an Animusic-style instrument that plays itself. Once
activated, it should perform, unaided, a composition of no less than
90 seconds. While your device may have electronic components, it must
not produce electronic
music. [175 points. 50 bonus points if the music is played by multiple distinct mechanisms that join in gradually as it proceeds]*

I saw this item at around 3 in the morning on Thursday, a few hours
after the craziness of list release. It grabbed my attention, both
because I knew I was expected to do it and because instruments have
fascinated me for some time, though I'd never gathered the gumption to
make anything more than a simple didgeridoo. So I cast around in my
mind for ideas on how to make something like this in the next few
days. First I had to know what the judges wanted, so I looked up the
source material on YouTube:

<iframe width="560" height="315" src="//www.youtube.com/embed/hyCIpKAIFyo" frameborder="0" allowfullscreen></iframe>

Clearly, I needed some sort of mechanical actuator. Luckily, I had
kept some solenoids from my failed attempt at a water curtain
in 2013. Another quick YouTube search confirmed that it was possible
for solenoids to hit things hard enough to make sounds. Unfortunately
the solenoids I had were pulling solenoids, which are not optimal for
striking things. So I modeled a simple lever that the solenoid could
pull on, and a mount to keep everything in line.

I cut them out the next morning on the lasercutter at the
[Hack Arts Lab](http://arts.uchicago.edu/hack-arts-lab-hal). Unfortunately,
I had forgotten to get materials, so I had to use the scrap in the
shop. I ended up cutting the main levers out of 3/4" thick plywood,
which required 3 passes at high power and low speed to get
through. Even then I had to use a Dremel to fully separate the pieces
from the stock.

Some judicious application of superglue to skateboard bearings
ensued. I like using skateboard bearings for moving parts because
they're easy to get and relatively cheap. They also fit great on
things that are 5/16" in diameter, such as Bic pens. I like superglue
because I like taking risks and do not know fear.

Once the superglue dried, I hooked up the whole apparatus to an
Arduino. The solenoids ran on 12V and 1.2A, which is far more than the
Arduino can output, so I needed to use some power transistors and an
external power source. Fortunately, I had planned ahead and converted
an old computer power supply into a serviceable benchtop power supply,
with binding posts for +12V, +5V, +3.3V, -5V, -12V, and GND. It even
had fancy things like short protection and everything! I got the power
transistors from RadioShack. Fat little suckers the size of your
fingernail, rated for 90W.

After all the wiring was sorted it was relatively simple to get the
lever to move. All I had to do was send a 5V, 20ms pulse to the base
voltage on the transistor. Even with my limited knowledge of C I was
able to manage that.

<img src="images/animusic/animusic_arm.jpg"/>

It remained to wire up several more solenoid-lever modules so we could
play multiple instruments, and have some sort of method for writing
music. I ran into some issues which were solved by adding a '\0' to
the end of a string and felt like a greenhorn, but it all came
together pretty quickly.

My friend Zach, an incredibly talented drummer (and the captain of our
team), brought over his drumset on Saturday night. We spied some large
pieces of MDF that nobody was using, and made a nice big base for
everything. By 6:30 in the morning we had everything wired up and
ready. Zach took a quick nap and about half an hour later we had this:

<iframe width="560" height="315" src="//www.youtube.com/embed/w9Puv_iJRiE" frameborder="0" allowfullscreen></iframe>

We sat there watching it loop over and over, sleep-deprived,
triumphant, shocked and awed by our own magnificence. A teammate
snored loudly on the couch, somehow sleeping through everything.

Then Zach scrapped all the music and re-wrote
it. [Here](http://scavjudges.tumblr.com/post/85751911609/another-fabulous-completion-of-item-49-by-max)
is the final result.

Title: 208
Author: John Xia
Date: 2013-08-15
Category: real things
Tags: scav, 3D printing
status: draft

<iframe width="560" height="315" src="//www.youtube.com/embed/zQqBJ3nv6Ls"
frameborder="0" allowfullscreen></iframe>

_208. An aquagraphic-style water curtain that displays your team name or
logo. [250 points] †_

This is one of the items I worked on for [Scav](http://scavhunt.uchicago.edu)
this year. I didn't complete it, but I will, someday.

Today is not that day.

Today I write about the original design: the story of what went wrong and why I
can't let it go. There's a bonus section at the end about the future design, if
you're interested.

First of all, thanks to all the people (Andrew, Catrina, Cecilie, Ryan, and the
rest of Max Palevsky Scav) who helped this thing get even partway complete. This
was by no means an individual effort.

My original concept was a small wooden frame 18" tall and 12" wide. I mounted a
piece of PVC pipe across the top as the water reservoir. Small holes were
drilled in the bottom of the pipe to let the water out. 20
[solenoids](http://www.sciplus.com/p/12VDC-PULL-SOLENOID_51553) were mounted in
a row next to the pipe; these moved in and out when I pulsed electricity through
them. Pieces of foamcore were attached to these solenoids to act as crude valves
for the water.

The solenoids were connected to a rotating drum (in this case, an old Centrella
oatmeal container). I wired it up so you could use it as sort of music-box: if
you draw with conductive material (aluminum foil, conductive paint, etc.) on the
drum, the drawing would act as a bunch of little switches; as you spun the drum,
the valves would move in sync with the picture.

I thought the idea had potential. It could be a cool machine to have around -
much cooler than what the item asked for. It didn't seem too hard to make,
either. All the wiring was pretty basic stuff.

I ran into a few problems on the last day. It all boils down to one
thing. Valves are hard to make.

First, I tried sealing the holes from the outside by sticking a piece of
foamcore next to it. The water leaked horribly. To make matters worse, when the
valves did open, the water stuck to the foamcore flap. This made the water drip
down at weird angles.

After a bunch of troubleshooting, Cecilie suggested that we seal the valves from
the inside. Instead of pushing a flap up against the outside of the hole, we
would have a series of tiny plungers that went up and down over the hole. This
would solve the leaking problem and the sticking problem! The water pressure
would push down on the valve when closed, ensuring it stayed closed and not
leaky. The sticking would be conquered because there would be nothing downstream
of the hole to mess with the water. We redesigned the reservoir to have a flat
bottom so the valves would seal. We also moved the solenoids to the top so they
slid vertically. We had about 12 hours left to complete this thing. We were
gonna make it!

But making accurate plungers out of foamcore is really, _really_ hard, and that
is what we ended up trying to do. At 6 AM Sunday we found that they were all
misaligned. The foamcore valves wobbled around on the solenoid. The drum wasn't
big enough to accommodate the wiring. The solenoids kept falling off.

<br>
**We didn't have enough time.**
<br>
<br>

I gave up, completely and utterly defeated. When I finally got myself together I
presented it to the judges. I tried to tell them how cool it would have
been. _If only they could see my vision!_ I swore I would get it working
eventually. They smiled and told me to contact them when I did.

This summer I've gotten even more excited about the idea of rebuilding it.
Showing off and using [our app](http://jdangerx.github.io/blog/fourthapp.html)
really hit home the visceral joy of drawing things in 3D. Drawing with falling
water would be beyond cool. I've been kicking some ideas around, to be covered
in detail after I implement them. In the hopes of forcing me to think
intelligently about them I have reproduced them below:

**Idea Number One:** 3D print the valve pieces. I should probably have done this
during Scav. Then again, spending several hours outside of HQ on Saturday night
was not an option. They will all be the same shape, and they'll be stiffer and
more accurate than the foamcore ones. They'll also attach to the solenoids
better if we design the pieces to be mounted securely.

**Idea Number Two:** While we're on the topic of mounting, I should 3D print
mounts for the solenoids, too. Then they will also be nice and solid. These two
combined should make the plunging valve action very reliable.

**Idea Number Three:** Make it taller. One thing some of the other teams
mentioned was that water falls really fast. To be able to see the picture for a
reasonable amount of time we need to either make the water fall slower or make
the screen taller. Maybe both.

**Idea Number Four:** Use a microcontroller. This could allow faster
timings. That leads to smaller droplets, which fall slower. However, we are
still limited by the speed of the solenoids. That can be alleviated by making
the solenoid travel much shorter, which might be facilitated by Ideas One and
Two. A potential drawback of this system is that we would lose the direct
connection between the drawing and the displayed water.

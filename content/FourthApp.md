Title: FourthApp
Date: 2013-08-13
Category: software
tags: 3D printing, code

I'm currently an intern at
[Mission St. Manufacturing](http://www.missionst.com/). We're a 3D
printing company that's trying to streamline 3D printing. If you're
not familiar with 3D printers, imagine building up an object with a
hot glue gun, carefully squeezing out layer upon layer of plastic. Now
imagine a robot doing that.

One of the problems we are fixing is that you have to jump through a
ton of hoops to print something. Making a 3D model is hard. Once you
have a model you have to turn that into instructions for your printer,
and once you have the instructions, you have to actually print
them. We hide most of this on our server so nobody has to deal
with it.

You can't hide the actual modeling, so we're making tablet apps that
make simple 3D modeling _really_ simple.  We've got a few in the
works. Let's take a look at one that turns your finger drawings into
real things that you can hold. Its code name is FourthApp.

First you draw something. It's kind of like Paint. No spray-can, though.

<img src="http://i.imgur.com/3Ve1p3b.jpg" alt="" style="width: 400px;"/>

Then you hit print preview. We turn it into a 3D model and send it
back down for your perusal:

<img src="http://i.imgur.com/ufGNaMuh.jpg" alt="" style="width: 400px;"/>

If it turns out satisfactorily you can choose to print your part:

<img src="http://i.imgur.com/xgTEGdsh.jpg" alt="" style="width: 400px;"/>

Which ends up looking like this:

<img src="http://i.imgur.com/vCxEIl5h.jpg" alt="" style="width: 400px;"/>

You are, no doubt, curious as to how this all works. I'd love to tell
you, but first we need to understand the basics. Namely, what does
making a 3D model entail? Conceptually, it's pretty easy - you take a
picture, figure out what you want the model to look like, and draw
triangles on the model until it's all covered, like this:

<img src="http://i.imgur.com/GsmBodl.jpg" alt="This is grabbed from an
open-source program called MeshLab." style="width: 400px;"/>

Once you have that, you can cut it into thin horizontal slices; then
you can write instructions to tell the printer how to move on each
layer. This process is called _toolpath generation_ or _slicing_.

However, the devil is in the details. We tried several different ways
of making models, which can be lumped into one of two categories:
path-based and image-based.

We started with a path-based method, which works like this: we track
the path the finger traces across the screen. Then we draw two paths
on either side, marking the bottom edges of the model. Then we play
connect-the-dots and make the triangles for the bottom face. Next we
make a copy of the bottom and move it up to make the top
face. Finally, we connect the top and bottom faces to each other to
make the sides. Ta-da!

This runs into some problems, though, when the path crosses over
itself. We end up with some triangles inside the model! The internal
triangles make it hard to determine the border of each slice. This
really messes with your toolpaths. We decided to try to detect the
self-intersections. This worked by checking each edge against each
other edge to see if they crossed. This is slow - when you start
drawing complex pictures, the brush noticeably lags behind your finger
as we accumulate more edges to check.

While trying to fix the code we started thinking about other
approaches. What if we took a screenshot and turned that into a 3D
model? We'd avoid the self-intersecting paths altogether - once you
have painted an area black, it doesn't matter if you go over it
again. It will still be black. It will be black until the end-times,
no matter how many times you draw over it. This was really exciting!
So we started hacking on it.

Soon we had something that kind of worked. The idea is pretty simple:
you look at each pixel in the picture, keeping track of how dark each
pixel is. This will correspond to height later. Each pixel has a 2D
position already. You can put that together with the heights you just
found to get a bunch of 3D points. Then you draw a bunch of triangles
in a giant game of connect-the-three-dimensional-dots, and voila! You
have a 3D model!

This method makes a lot of triangles. In fact, it makes about 10 times
as many as the last one. This means it's 10 times bigger, 10 times
harder to send over the Internet, 10 times harder to slice. To
alleviate these problems, we shrunk down the resolution of the images,
but ran into another snag: at such low resolutions, the beautiful,
organic curves (sensuous, even) that people were drawing became jagged
pixelated blocks. That can be helpful if you are trying to print out
characters from Super Mario, but that's not exactly what we want.  We
tried to find a happy medium between slow and pretty, but it wasn't
there.

Now we've hacked together another solution. The benefit of the
path-based approach is that the model itself is much smaller and
simpler; the benefit of the image-based approach is that we don't have
to deal with self-intersecting curves. A hybrid solution gets us both
of these. The app sends us a picture of what the user has drawn. Then
we use a nice program called
[potrace](http://potrace.sourceforge.net/) to trace the edges of the
drawing. From there, we connect the dots and get a model which is as
simple and smooth as a path-based one without any of the
self-intersection issues.

Of course, there's still ways to improve. I'm working on an extension
to this hybrid method that will let you use different shades of grey
in your drawing to indicate different thicknesses. We can trace those
edges with potrace to get the profile of each slice. Then we can stack
them on top of each other to create the model. This lets you make
things that are bumpy on top. You'd _really_ be getting somewhere.

Astute readers may notice that we don't need to turn the picture into
triangles to make toolpaths. All the printer does is fill in one
horizontal slice of the object and move up, so if we know what each
slice looks like we can make toolpaths straight from that. Luckily,
the different levels of grey represent exactly that! Instead of
stacking the slices, turning that into triangles, then slicing up the
triangles again, we can skip that middle step. This business of
translating between slices and triangles gets into deep waters very
quickly, though, and deserves its own post.

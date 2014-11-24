title: The Speed of News
Date: 2014-11-23
slug: speed-of-news

In college, I was fortunate enough to take a course on Sumerian
literature from [Christopher Woods] [1]. We learned, among other
things, that in ancient Sumeria places that were far away were also
somehow farther in the past. This is roughly similar to the
correspondence between space and time which we study in
relativity. Why did the Sumerians find space-time unification so
natural? In my [final paper] [2], I argued that at the core of both
conceptions of space-time was the limited speed of information. In
ancient Sumeria, the speed of information was much slower than the
speed of light, and thus the time-bending effects of space were more
evident. Fortunately, Dr. Woods was a physics student in his youth and
let me get away with writing 10 pages about physics for my
Civilization Studies course.

Several years later and a couple weeks ago, I participated in the
[hack@UChicago] [3] Fall Hackathon on a whim. I was tooting around
after the workshops, trying to figure out what to make, when I
remembered that paper.

I decided to make a [map](/relativity) that would let you see what
sort of news you would be hearing from around the world if news
traveled at human speeds. The blue (draggable) marker is your current
location. You can click the map to find the news that you would be
hearing from there. There's a dropdown menu with different news
speeds.

To make the map, I used a simple [Leaflet] [4] map with a [Mapbox] [5]
tile layer.  I use the Mapbox geocoder to find the location of your
click; it is, regrettably, of little use outside of the United States
and southern Canada. I use the [New York Times Article Search API] [6] to
find news from that location; it has similar regional
problems. Unfortunately the Google News API was deprecated long ago.

[1]: http://nelc.uchicago.edu/faculty/woods
[2]: /misc/NEHC_final.pdf
[3]: https://hack.uchicago.edu
[4]: http://leafletjs.com/
[5]: http://mapbox.com/
[6]: http://developer.nytimes.com/docs/read/article_search_api_v2

---
layout: default
title: Streaks tracking project
---


In the very fast flows, when the shutter of the camera is open for too long (relatively to the speed of the particles in the flow) the image is not a particle but a streak: streakline of a particle passing through the field of view. The beauty is that the streaks has so much information that it can improve our tracking ability a lot: it has 



*   length 
*   shape 
*   curvature 
*   velocity and acceleration 
*   ... 



![][1] ![][2]

![][3] ![][4]
    

Figure 1: Four view of same streaks in a field of view of 5 x 5 x 5 cm (waiting for your touch) 

Please, contact [me][5] if you wish to take the database of streaks images we have, the three-dimensional calibration data of the multi-camera system (see our PTV wiki for more details) and extract (data mining is another name, or intelligent image processing) the maximum of useful, relevant for physics and engineering information. 

For example, the small portion of the dataset, including the 3D-PTV software binary, calibration images and some demo images is available for downloading from Box.net: 

 <param name="movie" value="http://www.box.net/static/flash/box_explorer.swf?widgetHash=ysdlkzlfmi" /><param name="quality" value="high" /> <embed src="http://www.box.net/static/flash/box_explorer.swf?widgetHash=ysdlkzlfmi" quality="high" width="300" height="300" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" > </embed> 



## What we propose

There is a need to develop the software, working fine for the discrete, small and almost circular particles to work also with the unknown-length streaks. The idea is to use some image processing (Python, C/C++ or Matlab) to take each streak and split it into several 'ghost particles', e.g. beginning, end, center and so on. Then, using the 3D-PTV subroutines, match each one of those from different image views (2D to 3D is also available from different codes, see <http://ptvwiki.netcipia.net>) and proceed from there to measure the length, velocity, possibly acceleration of the particles, using their 'discretized' streaks. 

Another option is to take each streak as an object and using the 2D to 3D world transformation to build their 3D picture. It's not clear how to proceed, but really challenging path, as one would have a continuous 3D trajectory of a particle, with curvature, length, etc.

 [1]: ../images/Movie12_Scene28_1_183.jpg ""
 [2]: ../images/Movie12_Scene28_2_183.jpg ""
 [3]: ../images/Movie12_Scene28_3_183.jpg ""
 [4]: ../images/Movie12_Scene28_4_183.jpg ""


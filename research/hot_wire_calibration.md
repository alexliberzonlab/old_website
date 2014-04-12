---
layout: default
title: Look up table based multi - hot wire calibration
---



![from eFunda][1] ![Calibration unit][2]

From Wikipedia: "An **anemometer** is a device for measuring the velocity or the pressure of the wind, and is one instrument used in a weather station. The term is derived from the Greek word, anemos, meaning wind." Read more about hot-wire anemometers on eFunda web site. 

**LUT** is a shortcut of the lookup-table (In computer science, a lookup table is a data structure, usually an array or associative array, used to replace a runtime computation with a simpler lookup operation. The speed gain can be significant, since retrieving a value from memory is often faster than undergoing an expensive computation. Wikipedia) 

Details 

The algorithm and the software package are developed jointly by a group of students and researchers at the Faculty of Engineering, Tel Aviv University <http://www.eng.tau.ac.il> 



*   it's an open source under BSD license 
*   it's written currently in Matlab (works fine under Windows XP, Matlab R2006x) 
*   it makes use of the following open-source Matlab packages from the Matlab Central: 
    *   kdtree by Steven Michael, MIT 
    *   kNearestNeighbors by Ani 
    *   inpaint_nans by John D'Errico 
*   it's developed using a generous help of Lavoie P. from Queen's University, Canada, providing us with his Labview subroutines (not actually used, but very helpful). Read, e.g. his publication: PDF or look at Scholar 
*   Ideas are taken mostly from the literature (easiest way is to google for "multi hot wire calibration", e.g. >>> 
    *   Lavoie P. et al, Exp. Fluids, etc. 
    *   van Daijk et al. Exp. Fluids, 2004 



### Download

Non-members may check out a read-only working copy anonymously over HTTP. 



    svn checkout http://hotwirelut.googlecode.com/svn/trunk/ hotwirelut

 [1]: http://www.efunda.com/designstandards/sensors/hot_wires/images/hot_wire.gif "from eFunda"
 [2]: http://lh3.google.com/particle.tracking/R3QZMDkCvkI/AAAAAAAABSY/bOi4hCympOk/s400/Image003.jpg "Calibration unit"
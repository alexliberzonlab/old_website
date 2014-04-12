---
layout: default
title: 3D-PTV from ETH Zurich
---


3D-PTV is an abbreviation of the "three-dimensional particle tracking velocimetry", see more on Wikipedia.

### Basic principles
*   Flow is seeded with small tracers; 
*   Flow is illuminated with continous light source; 
*   The diffracted light is collected synchronsiously by several (best case is 4) digital (CCD or CMOS) cameras 



![](http://alexl.files.wordpress.com/2005/12/ptv.jpg)

Back view of the PTV system and the illuminated apparatus (Original photo: Dr. Jochen Willneff) 



### Analysis

Each particle position is determined by the software, using the apriori calibration of the camera parameters, and the matched particles provide a three-dimensional cloud of points; The tracking software tracks particles for relatively long time (an order of tens - hundreds of frames) and this information serves the post-processing analysis. 



![](http://alexl.files.wordpress.com/2005/12/particles.jpg)

(Original image: Dr. Michele Guala) 


### Typical results

The first output of the PTV software is the trajectories of particles in the observation volume: 


![](http://alexl.files.wordpress.com/2005/12/trajectories.jpg)

(Original image: Dr. Beat Luethi) 

The following post-processing analysis allows to calculate the fields of: velocities, velociy derivatives (i.e. rate-of-strain, vorticity), their production terms, etc. In addition, the Lagrangian nature of the data provides an unique option to follow the evolution of material elements. A high-speed three-dimensional Particle Tracking Velocimetry System (3D-PTV) 



Since 2006, our lab and ETH Zurich and University of Minnesota purchased a long-term digital video recording systems for high-speed 3D-PTV. The goals are: 


*   There is an increasing interest of the Hydromechanics group in moderate and high Re turbulent flows. Some experiments of the group, related to the stretching of Lagrangian material objects, the effect of dilute polymers and others are based on measurements at approximately ReÎ»= 50. They could be repeated in higher Reynolds numbers flows. In addition, an ability to track fluid tracers that move at tens of centimeters per second will open a new field of research in the free shear and wall bounded turbulent flows. 
*   The major goal is to perform experiments in two-phase turbulent flows. This can be achieved by a combination of the ‘old’, 60Hz 3D-PTV system, shown in Fig.1 (e.g., Luethi et al. 2005, Guala et al, 2005, Liberzon et al, 2005a, 2005b) and the new, high-speed system. The combined system allows us to follow two types of particles simultaneously e.g. heavy and light particles, or heavy particles and flow tracers. 

The system at ETH Zurich and in Turbulence Structure Laboratory is based on four (4) high-speed CMOS cameras by Miktrotron GmbH with 1280 x 1024 pixels, 10 bit, working at 500 fps. All four cameras are synchronized in a special way, with a maximum possible time jitter of 1/10 of the frame rate. The recording system is the only one of this type and includes the long-term streaming and storage of IO Industries (<http://www.ioindustries.com>), customized for our use by Cosyco. The system includes 48 hard-disks and 4 special frame-grabbers that deliver the information directly to the array of disks. 


<html>
<img src="http://alexl.files.wordpress.com/2005/12/newsystem.jpg" width="300">
</html>

Back view of 4 high-speed CMOS cameras with full CameraLink connection (650 Mb/sec) 



![](http://alexl.files.wordpress.com/2005/12/newsystem_cables.jpg)

Back (left) and front (right) view of the data streaming/recording unit from IO industries. Most of the cables are fiber channels between the high-speed framegrabbers and 4 raids of 12 hard disks each. 



![](http://alexl.files.wordpress.com/2005/12/streams5screenshot.jpg)

Screenshot of Streams5 ™ software by IO Industries, synchronization and recording at 500 fps 



### References

The main references are Ph.D. thesis of Dr. Beat Luthi and Dr. Jochen Willneff, and numerous publications, partially listed in my [Publications](../publications.html)
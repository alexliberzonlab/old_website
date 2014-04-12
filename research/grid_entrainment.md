---
layout: default
title: Entrainment across turbulent/non-turbulent interface
---


This research is performed by Markus Holzner, myself, Dr. Michele Guala, in cooperation with Prof. Arkady Tsinober and Prof. Wolfgang Kinzelbach, at ETH Zurich

The study is of turbulent entrainment - the process of "converting" of laminar flow into turbulent. This phenomena is common for many "partially" turbulent flows, for example, jets. In the jet, the boundary is what we distinguish between the turbulent and non-really-turbulent part of the flow. There is a continuous transfer of momentum across this interface between the turbulent and non-turbulent region which is very interesting. There, it is possible to "catch" the moment at which the irrotational flow becomes rotational, and starts producing turbulent fluctuations. The idea in our study is to employ the 3D Particle Tracking Velocimetry,(3D-PTV) to observe this phenomena through Lagrangian tracking of particles that "cross" the interface.

The experimental setup is an oscillating grid turbulence. The first step was to get more insight regarding the flow. Therefore we applied the Particle Image Velocimetry (PIV) at the scale of the vessel, as it is shown below.

![](http://alexl.files.wordpress.com/2006/02/1.png)


The motor starts oscillate the grid in vertical direction (up-down-up) with a frequency of 6 Hz (in this case), and the amplitude of the motion is plus/minus 4 millimeters. The grid is from circular rods of 1 mm, mesh size is 4 mm, and it is almost of the same size as the glass tank, 20 x 20 cm (the gaps are of the order of 1/2 mm).

For the PIV experiment we were able to apply the time-resolved measurements due to relatively long time scale of the flow, by using the high-speed CMOS camera of 1 megapixel at the rate of 50 fps (it can be speeded up to 2 KHz). The analysis of the images of the flow tracers were performed by the open source Matlab toolbox for PIV analysis, URAPIV. One instantaneous PIV realization with the arrows that denote the velocity in the vertical cross section and the contours that show the level of vorticity fluctuations is shown below.

![](http://alexl.files.wordpress.com/2006/02/5.png?w=521&h=278)

Vorticity and velocity fields, obtained from PIV analysis, were analysed by the level-set method (basically a sophisticated method to select one fixed threshold for the time-varying flows, used by Westerweel et al., 2'005, among others). So, we find the boundary between the turbulent/non-turbulent region by means of a fixed threshold. For example, the time evolution looks like this:

![](http://alexl.files.wordpress.com/2006/02/3.png?w=505&h=365)

In addition to Particle Image Velocimetry we applied the scalar visualization, by using a fluorescent dye (Uranin, Sc = 2000). The sample image is shown below, along with the level-set method. The thin curve represents the boundary in the scalar measurements:

![](http://alexl.files.wordpress.com/2006/02/2.png?w=479&h=283)

We asked whether we will be able to use velocity or vorticity as a "marker" for the particles crossing the interface. Previous observations were mostly based on scalar measurements. Therefore, we compared the result from the scalar concentration measurements with the result obtained by velocity or vorticity. The propagation speed of the front (i.e. how fast it moves down, "capturing" more and more non-turbulent fluid) is given below. H(t) is the distance of the boundary from the grid in centimeters, t is time in seconds, and the plots are from vorticity, velocity and scalar. We observe a good agreement and we will use most probably vorticity as a marker of the turbulent/non-turbulent interface in our 3D measurements.

![](http://alexl.files.wordpress.com/2006/02/4.png)


For example, one preliminary 3D-PTV result could be like this one, where solid points is the turbulent region and empty points are non-turbulent. The arrow shows the "main" direction of the propagation of the front (i.e. interface)

![](http://alexl.files.wordpress.com/2006/02/6.png)
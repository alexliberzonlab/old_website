---
layout: default
title: XPIV - multi-plane stereoscopic PIV
---


XPIV is our original development (patent pending) technology, developed back in 1999 - 2003 during the 
Ph.D. studies together with Roi Gurka. 

[Roi Gurka] and Alex Liberzon introduce three dimensional measurement technique (called XPIV) based on a Particle Image Velocimetry (PIV) system. The technique provides three-dimensional and statistically significant velocity data. The main principle of the technique lies in the combination of defocus, stereoscopic and multi-plane illumination concepts. The results of the turbulent boundary layer in a flume are presented below. The quality of the velocity data is evaluated by using the velocity profiles and relative turbulent intensity of the boundary layer. The analysis indicates that the XPIV is a reliable experimental tool for the three dimensional fluid velocity measurements. Introduction 

Experimental investigation of turbulent flows requires techniques that allow three-dimensional measurements with high spatial and temporal resolutions. Particle Image Velocimetry (PIV) is a state-of-the-art method in fluid dynamics research that provides high spatial resolution in two-dimensional slice of the flow (Adrian 1991; Raffel et al. 1998), and appears to be an appropriate basis for three-dimensional velocity measurements. The technique has only technological limitations to achieve a temporal resolution due to the illumination source (lasers) and recording media (CCD) frequencies which are available today. 

Several extensions of the classical PIV system have been proposed to achieve more than two-dimensional, two-component velocity information. The most common extension is the application of the second CCD camera to acquire the stereoscopic view of the flow, and thus to achieve the out-of-plane component of the velocity on a plane (Raffel et al. 1998). 

The known extensions of PIV toward 3D are: 



*   Multiple plane SPIV - it is the combination of two SPIV systems (i.e. 2 double-pulsed lasers, 4 cameras, polarized light, two planes only), Kahler and Kompenhans (1999). 
*   Defocusing PIV - three-dimensionality is achieved through defocusing principle, Willert and Gharib (1992). 
*   Holographic PIV - volume illunination and holographic recording procedure. Many different variations (light-in-flight, on-axis, off-axis, hybrid recording and reconstruction) are available. Limited success, very tedious configuration, extemely accurate and enormous spatial resolution. No time resolution. Zhang et al. (1997) and Barnhart et al. (1994), Hinrichs and Hinsch 1994. 

Understanding the drawbacks and advantages of the obtainable measurement systems led to the development of the multi-plane stereoscopic velocimetry technique (XPIV). The technique applies the principles of multi-sheet illumination, stereoscopic imaging and particle image defocusing. The experimental technique implemented with a stereoscopic PIV system, based on an additional optics and image processing algorithm. Experimental system: configuration and optics 



![](http://alexl.files.wordpress.com/2006/01/xpiv1.jpg)

Fig. 1. Experimental facility: 1) Flume, 2) water reservoirs, 3) piping, 4) double Nd: YAG laser and its power supply unit, 5) optical table, 6) frame 7) CCD 1 (left), 8) CCD 2 (right), 9) 45 mirror, 10) quarter plate, 11) beam splitting unit, 12) cylindrical lens, 13) three parallel laser sheets. The coordinate system is as follows: x - streamwise, y - wall normal and, z - spanwise directions 

**Optical arrangement** 



![](http://alexl.files.wordpress.com/2006/01/xpiv2.jpg)

Fig. 2. Schematic view of the optical array: 1) spherical lens 2) 45 deg. mirror, 3) half-wave plate on rotary mount, 4) polarizing beamsplitter, 5) non-polarizing beamsplitter, 6) right-angle prism, and 7) cylindrical lens. 

**Image recording and processing** 

Both CCD cameras in their stereoscopic configuration acquires the images of the same flow volume, while the most distance plane (of three) is set to be a focal plane of both cameras. The example of the image from one camera and its enhanced version is shown below. One can distinguish between the particles from three separate laser sheets: small and bright from the focal plane, mid-size, blurred from the middle plane and bigger and more blurred particles from the closest defocus plane. 



![](http://alexl.files.wordpress.com/2006/01/xpiv3.jpg)

Fig. 3. Original three plane PIV image (left), and enhanced three plane PIV image (right) 

Image processing algorithm 



    * Enhancement, background illumination correction thorough grayscale morphology operators (i.e. erosion, dilation, etc.)
        * Identification of particles in the focal plane: i) threshold, ii) iterative image reconstruction algorithm.
        * Discrimination of particles from two defocus planes: gradient (morphology operator), edge connection, filling procedure, and finally classification of objects (clustering) by using their area (size) property. The method used is granulometry.
    



![](http://alexl.files.wordpress.com/2006/01/xpiv4.jpg)

Fig 4. Particles in the focal plane (left), particles in two defocus planes (center), and the size distribution and its derivative (right) . Results 



![](http://www.eng.uwo.ca/people/rgurka/xpiv_example.jpg)

Fig. 5. Instantaneous three-dimensional velocity field 



![](http://alexl.files.wordpress.com/2006/01/xpiv6.jpg)

Fig. 6. Isosurfaces of the negative (blue) and positive (red) Reynolds stresses components (spanwise-normalwise) elongated in the streamwise direction. 



### References

Liberzon A., Gurka R., and Hetsroni G. (2004) XPIV - Multi-plane Stereoscopic Particle Image Velocimetry, Experiments in Fluids, 36(2), pp. 355-362. 

Liberzon A., Gurka R., Lampert S. and G. Hetsroni, (2005) Multi-dimensional characterisation of coherent structures using three-plane stereoscopic PIV, from the 6th Int. Symposium on PIV, Pasadena, CA, September 2005

 [Roi Gurka]: http://www.bgu.ac.il/~gurka

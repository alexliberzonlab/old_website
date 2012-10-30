# FPGA

### The bottleneck problem

The bottleneck of the high speed tracking systems today is the data transfer. Our real time image processing solution on FPGA is removing this constraint. One can achieve a single-camera-with-FPGA solution for the 3D Particle Tracking at very moderate budget. No synchronization, no data transfer limits, no framegrabbers, no image processing in software. Record and track in Matlab/Python or our 3D-PTV software. 



![][1]

![][2]

![][3]  
Mark and Eldad setting up the mirrors



### First results

![][4]

We have completed the first round of experiments in the Lid Driven Cavity facility. The 2D Sobel-based PTV system worked in parallel to the regular 3D-PTV system and the results were compared in the mid-plane of the cavity. 

The results appear to be very interesting, beyond the real time image processing story and summarized in the manuscript submitted to the Experiments in Fluids journal. More details are available from Mark or Alex. 

Read the short summary: [PDF][5] 

See the slideshow of Mark final seminar: [PDF][6]

 [1]: http://lh3.google.com/particle.tracking/RucBpp99CvI/AAAAAAAABAg/_QJCbyJw_Z0/s288/Image017.jpg ""
 [2]: http://lh3.google.com/particle.tracking/R72ZOs-L0aI/AAAAAAAABjY/Oili4BO4QfM/s288/Image005.jpg ""
 [3]: http://newhost.site/pmwiki.php?n=Research.FPGA?action=download&upname=mark_eldad_mirrors_test.png ""
 [4]: http://newhost.site/pmwiki.php?n=Research.FPGA?action=download&upname=Slide09.png ""
 [5]: http://docs.google.com/viewer?url=http%3A%2F%2Fwww.eng.tau.ac.il%2F~alexlib%2Fefdl%2Fpmwiki.php%3Fn%3DResearch.FPGA%3Faction%3Ddownload%26upname%3DAbstract.pdf
 [6]: http://docs.google.com/viewer?url=http%3A%2F%2Fwww.eng.tau.ac.il%2F~alexlib%2Fefdl%2Fpmwiki.php%3Fn%3DResearch.FPGA%3Faction%3Ddownload%26upname%3Dmark_seminar.pdf
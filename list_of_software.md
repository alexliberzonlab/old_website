---
layout: default
title: How to preserve the knowledge in the lab
---



### Alex Liberzon Laboratory software guide 

All the new members of the Alex Liberzon Laboratory have to find their way to collaborate with the other members. Therefore we strongly recommend to all the existing members to change their working environment to comply with the present list of tools and to all the new members simply to learn the best practice and continue to develop the single, centralized and continuous evolution path of knowledge in the laboratory (i.e. version controlled by Git)


#### Numerical tools
We use: 
 
1. Numerical/Scientific Python, recommended installation is of the [Enthought Python Distribution](http://www.enthought.com/products/epd.php) or [PythonXY](www.pythonxy.com). Highly recommended to use IPython notebook for your work, e.g. <http://nbviewer.ipython.org>  
1. [Matlab](www.mathworks.com) is still in use, but we will actively replace our codes with the Python versions along the time. Our goal is to have Matlab-free environment in a couple of years. 
1. Spreadsheets are sometimes used, but only for the tables. Never use it for figures or at least do not use it for the publication quality ones. All the figures have to be reproduced in Matplotlib or Matlab. 


#### Technical writing

1. LyX <http://www.lyx.org>
2. LaTeX <http://www.latex.org>
3. We provide our students with the LyX and LaTeX templates for the thesis and article writing, posters and presentations. See our [LyX and LaTeX thesis template](https://github.com/alexlib/tau_thesis_lyx_template), and the [Beamer example](https://speakerdeck.com/alexlib/resuspension-of-spherical-particles-in-the-oscillating-grid-turbulence) 

#### Bibliography management

1. Mendeley <http://www.mendeley.com>
2. Bibtex <http://www.bibtex.org>



#### Version control
---

> After two years of research and one year of heavy data analysis we discovered that the data was initially processed using some old and wrong version of a Matlab function. We could not even figure out when the version of the function was changed and who's the responsible (probably Alex, since he wrote this function in the first place …).   

----

> After 20 years of [3D-PTV](http://3dptv.github.com) development we have discovered numerous bugs, thanks to the new users and developers. Most of the bugs are harmless, yet affected hours of work of many people around the globe. We have never tested this code as we should, for every single function, we have never used version control, so we do not know if the 2009 version is similar to the 2012 one or not. Who and when introduced the bug and how it affected the Ph.D. Thesis of the most recent student, nobody will ever be able to discover. 

-----

The rules are:

1. **All our work** has to be **VERSION CONTROL** managed, i.e. thesis, articles, source code, whether it's Word, LyX, Matlab, Excel, LaTeX, Python, etc.
2. **Every** single function has to be TESTed. 
3. Use **Git**, either locally or on [Bitbucket](http://bitbucket.org) or if you deal with the open and publicly available source, then [Github](http://github.com) 


**How to do it:**

1. At the moment you get your new computer, install one of the following: [Github for Windows](http://windows.github.com/), [Github for Mac](http://mac.github.com/), [SourceTree from Bitbucket](http://www.atlassian.com/software/sourcetree/overview) or just Git shell. 

The rules are not debatable.




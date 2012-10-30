# BoundaryLayersCourse

## Boundary layer theory

![][1] 



1.  [Sources, books, links][2] 
2.  [Files from Virtual][3] 



### Recommended reading

1.  **Schlichting, H. and Gersten, K., 1999, Boundary layer theory, 8th English Edition, Springer-Verlag** 
2.  White, F.M., 1991, Viscous fluid flow, McGraw-Hill 
3.  A. D. Young, Boundary layers, 1989 , AIAA Publication. 
4.  T. Cebeci. T, and P. Bradshow, Physical and computational aspects of convective heat transfer, 1984, Springer.) 



### Quotes:

**D�Alembert�s paradox** 

(In inviscid, incompressible flow an immersed body experiences no drag) 

�I do not see then, I admit, how one can explain the resistance of fluids by the theory in a 

satisfactory manner. It seems to me on the contrary that this theory, dealt with and studied 

with profound attention gives, at least in most cases, resistance absolutely zero: a singular 

paradox which I leave to geometricians to explain.� 

Jean Le Rond d�Alembert, 1768 



![][4]

**Prandtl�s boundary-layer concept** 

�A very satisfactory explanation of the physical process in the boundary layer between a fluid 

and a solid body could be obtained by the hypothesis of an adhesion of the fluid to the walls, 

that is, by the hypothesis of a zero relative velocity between fluid and wall. If the viscosity 

was very small and the fluid path along the wall not too long, the fluid�s velocity ought to 

resume its normal value at a very short distance from the wall. In the thin transition layer, 

however, the sharp changes of velocity, even with small coefficient of friction, produce 

marked results.� 

**Ludwig Prandtl**, 1904 � Address to the 3rd Mathematical Congress in Heidelberg 



### Lectures



1.  **Introductory lecture** [Notes][5][ Δ][5] 
    *   Historical overview (Schlichting XIX-XXIII) 
    *   Introduction to viscous flows (Schlichting 3-27) 
    *   importance of viscous flows 
    *   no-slip condition 
    *   Newton's law of viscosity 
    *   Physical properties of water/gas 
    *   drag of a plate, cylinder, sphere 
2.  **The boundary layer concepts** (Schlichting 30-49) 
    *   Physical way, "zero-math" explanations 
    *   laminar BL on a flat plate 
    *   boundary layer thickness, displacement thickness, friction forces 
    *   turbulent BL, friction forces, viscous sublayer 
    *   pipe, airfoil, separations, wakes 
3.  **Math introduction** (Schlichting 51-100) 
    *   equations: continuity, momentum, stress-strain relations, vorticity 
    *   Navier-Stokes and energy equations 
    *   similarity laws, limits (low Re, high Re), mathematical example of two-layer solution 



* * *



1.  **Laminar flows: integral equations, solutions** 
    *   Intro: what do we want from BL solution - drag, separation point, BL thickness, velocity distribution 
    *   Integral momentum equation (IME) 
    *   Momentum ![\theta][6], displacement ![\delta][7] thicknesses, skin friction coefficient ![C_f][8] 
    *   solutions of integral momentum equation - the flat plate 
    *   the Pohlhausen method to solve integral momentum equation 
    *   the Thwaites-Walz method 
    *   web resources = www.engapplets.vt.edu 
    *   Integral energy equation (IEE) 
    *   solutions of IEE - starting-length problem 
2.  **Differential equations for laminar BL** 
    *   small control volume 
    *   the continuity equation 
    *   the momentum equation 
    *   the energy equation 
    *   equations for compressible flows 
3.  **Exact solutions, numerical solutions** (incompressible flows) 
    *   parallel flows 
    *   Couette flow, no ${\partial P/\partial x$} 
    *   flow between plates, constant ${\partial P/\partial x$} 
    *   superposition: moving plate, pressure gradient 
    *   unsteady flow of a starting flat plate 
    *   unsteady flow - oscillating flat plate 
    *   similar solutions 
    *   exact solution - flow over a flat plate: Blasius 
    *   similar solutions with pressure gradients 
    *   Falkner-Skan Wedge Flows 
    *   Low-Speed Energy Equation 
    *   Low-Speed Energy Equation flows with Pressure Gradient 
    *   Low-Speed Energy Equation Variable Wall Temperature 
    *   Numerically Exact Solutions 
    *   Finite Differences 
    *   The First Partial Derivative 
    *   The Second Partial Derivative 
    *   Grid System for a Finite Difference Solution of Boundary Layer Problems 
    *   Numerical Analysis of the Linear Model Equation: Explicit Formulation 
    *   Computational Errors 
    *   Von Neumann Stability Analysis 
    *   Numerical Analysis of the Linear Model Equation: Implicit Formulation 
    *   The Thomas Algorithm 
    *   The Boundary Layer Equations: An Explicit Solution Method 
    *   Numerical vs. Exact Solution: Explicit Solution to the Howarth Problem 
    *   The Boundary Layer Equations: An Implicit Solution Method 
    *   Application of Explicit and Implicit Numerical Methods 
4.  **Compressible Laminar Boundary Layers** 
    *   Compressible LBL 
    *   The Adiabatic Wall Temperature 
    *   The Reference Temperature Method 
    *   The Special Case of Pr = 1 
    *   The Recovery Factor for Pr ≠1 
    *   Compressibility Transformations 
    *   Howarth-Dorodnitzin 
    *   Crocco 
    *   Exact Solutions for Compressible Flow Over a Flat Plate: Crocco Method 
    *   Levy-Less 
    *   Pressure Gradients and Separation in High-Speed Flows 
5.  **Transition To Turbulent Flow** 
    *   Reynolds (1883) experiments 
    *   A Simple Method Based on ![Re_\theta][9] Michel�s Method 
    *   Hydrodynamic Stability Theory 
    *   Comparisons with data 
    *   The ![e^N][10] Method 
    *   Calculations and comparisons with data 
    *   Effects of Free Stream Turbulence, pressure gradient, roughness 
    *   flow around a sphere, low Reynolds, data 
    *   Density stratified flow above a plate and other examples 
6.  **Wall-Bounded, Incompressible External Turbulent Flows ** 
    *   Introduction, motivation of turbulent analysis 
    *   velocity profiles laminar vs turbulent, smooth vs rough 
    *   Friction Velocity and the Defect Law 
    *   universal wall law 
    *   laminar sublayer, overlap region, defect law 
    *   Law of the Wake by Coles (1956) 
    *   A Skin Friction Law 
    *   Total Turbulent Frictional Drag on a Flat Plate and Roughness Effects 
    *   Boundary layer profiles along an airfoil 
    *   Turbulence intensity profiles for flow over a flat plate and rough flat plate 
    *   Intermittency distribution in the boundary layer 
    *   Profiles of Reynolds stress and turbulent kinetic energy, spectra, dissipation 
    *   Turbulent energy balance in the boundary layer 
    *   vortical structures 
    *   the Central Problem of Analysis of Turbulent flows 
    *   Mean flow formulations: eddy viscosity (Boussinesq, 1877), mixing length (Prandtl 1925), their weakeness 
    *   Mean flow Integral Methods 
        *   Moses Method � Two Control Volumes 
        *   Mean Flow Models for Eddy Viscosity and Mixing Length 
    *   Models for the inner law, Van Driest model 
    *   Clauser's outer region eddy viscosity model 
    *   Formulations based on TKE 
        *   Dissipation term 
        *   Production term - Prandtl TKE model, Bradshaw model 
        *   Diffusion term - Prandtl/Bradshaw 
        *   Comparison with Klebanoff (1950) 
    *   Formulations based on TKE and a length scale 
        *   ![K-\epsilon][11] � Model by Spalding & Co-workers (1972) 
        *   ![K-\omega][12] � model by Wilcox (1998) 
    *   Formulations Based Directly on the Reynolds Stress 
        *   Reynolds Stress Model by Launder and Hanjalic 
        *   Reynolds Stress Model by Donaldson 
    *   DNS & LES 
7.  **Wall-Bounded Turbulent Flows with Variable Density and Heat Transfer ** 
    *   Heat Transfer 
        *   Mean Flow Variables 
        *   Temperature law of the wall 
        *   Edge of the boundary layer 
    *   High-speed flows, variation of fluid properties 
        *   variation of turbulent Prandtl number 
        *   Van Driest I 
    *   Skin Friction Law 
        *   Van Driest II 
    *   Log-law and other distributions for high Mach number flows 
    *   Averaging procedure for compressible turbulent flows: Reynolds averaging, Favre averaging 
    *   Mean flow models: eddy viscosity, mixing length, outer region models and comparison with data 
    *   Extended mixing length model 
    *   TKE models: Prandtl Energy Method, Bradshaw TKE model 
    *   Shocks and separations in supersonic TBL

 [1]: http://newhost.site/pmwiki.php?n=Main.BoundaryLayersCourse?action=download&upname=laminar_turbulent_Bl.png ""
 [2]: http://newhost.site/pmwiki.php?n=Main.BoundaryLayerSources
 [3]: http://tiny.cc/zriGZ
 [4]: http://www.desktopaero.com/appliedaero/blayers/images/image261.gif ""
 [5]: http://newhost.site/pmwiki.php?n=Main.BoundaryLayersCourse?action=upload&upname=lecture1.pdf
 [6]: http://physweb.bgu.ac.il/cgi-bin/mimetex.cgi?%5Ctheta
 [7]: http://physweb.bgu.ac.il/cgi-bin/mimetex.cgi?%5Cdelta
 [8]: http://physweb.bgu.ac.il/cgi-bin/mimetex.cgi?C_f
 [9]: http://physweb.bgu.ac.il/cgi-bin/mimetex.cgi?Re_%5Ctheta
 [10]: http://physweb.bgu.ac.il/cgi-bin/mimetex.cgi?e%5EN
 [11]: http://physweb.bgu.ac.il/cgi-bin/mimetex.cgi?K-%5Cepsilon
 [12]: http://physweb.bgu.ac.il/cgi-bin/mimetex.cgi?K-%5Comega
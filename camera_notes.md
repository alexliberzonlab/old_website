# CameraNotes

**Camera notes:**  

General System:  



*   Network connection: it possible to command on the system in the Lab from a distant network. By turning the computer in the Lab on 'Slay mode' and starting up the software from different computer or, by a fiber channel card that supply direct connection from the hard disks to the different computer. 
*   In the back of the computer there are connection to the different connectors on the hard disks, which connected to the cameras. B1 (start the counting from the left side of the computer) fit to cH1 and so on. (Page 3 in the Pdf. on the desktop). There are four connections of cards to the camera, and one more to the red. 
*   The left connector connects to the 'base' side on the camera and the right connector connects to the 'fall'. 
*   Default mode of frames per second is 500 fps.  
    

Software explanations:   
Software mode:  



*   'IDLE': the system in respite mode. 
*   'LIVE' (eye): see the display without saving data to the cards. 
*   'REC' (red circle): display and record (for future analysis) of the data. 
*   On the computer screen there are 4 windows display of the cameras information. We can change the windows size, place, etc. 'Windows'→'Tile Windows': default of one camera windows in organized display. 'View'→ 'multi stream view': default of four cameras windows in organized display. We can also add or get information in addition to default mode of each camera by clicking 'right click', while the mouse is marking the window display. 
*   Double click on camera window will give full display of this specific camera that we marked. 
*   'Right click' on the mouse gives also option of 'zoom' (in/out) or without zoom. If you are choosing without zoom you will get the default situation of the software. The importance of this option 'without zoom' when we interest to get full data from the computer. 
*   Any kind of orders to the cameras will show up only on the camera that we marked. 
*   On each camera window there are control buttons to getting the display that we like: (by marked with the mouse without pressing any button we will get which kind of order is it). 

[Attach:cn_image001.png][1][ Δ][1] 


:   1.  '· #' the third button (left side) is in order to view grey level, which is it the raw data (0-255, saturation) of the picture. 
    
    2.  The second button (left side), is in order to present number of frames, and also to see the record video as pictures file (frames).(this option is good for observing fast movement in the video). 

*   You can mark smaller area (i.e. ROI-range of interest) than full size display (with the mouse). Marked area is including: amount of area in pixel values, focus to our interest area and keeping more free space in the hard disk. Returning to full size display by 'Right click' and marked 'Clear ROI'. 

*   More data is available in the camera window toolbar. 

*   Record video management:  

[Attach:cn_image003.jpg][2][ Δ][2] 


:   *   Saving a file: display and record definitions are saved, but there is no pointer which disk comprises this information. 
    
    *   '  
        [Attach:cn_image004.jpg][3][ Δ][3]  
        

'- Control on the records opportunities. For external controlling on the record time, there is option of 'Use trigger'. By external button or by previously order in software. 


:   *   We can make different movie including different scenes during the camera run. By this action it will be easier to manage the experiment for our needs. Getting some scenes by press 'stop' during the record video every time that we would like. Pass to one more scenes by pushing 'record' again. 
    
    *   During the record we can divide the record video by the yellow arrow (i.e. event), '  
        [Attach:Camera\_notes\_04.jpg][4][ Δ][4]  
        ': 

[Attach:Camera\_notes\_05.jpg][5][ Δ][5] 


:   *   '···' -the second button (from left) on the camera window toolbar. Right click on him and choosing 'export ' for management of file filter, record in 10 bit or to change it to 10x2 (or 8x2). 

[Attach:Camera\_notes\_06.jpg][6][ Δ][6] 


:   *   'Export ': the export detail can be of one frame, or of the ROI that we marked. There are different options of saving a file such as, ascii (characteristic numbers), raw (for software programming), jpeg, etc. 
        *   You can get the export window options from the file menu too. 
        *   'Brows'- which file directory the file, will be saved. 
        *   'Export file name'- Which camera will send data to the saved file. 
        *   'Configuration'- to add data of the file such as, time, date. 
        *   'General option'- marked of the wanted options: 

1.  'Conversion filter'- when we used in conversion option (examples will show in continuation ) 
2.  'Use ROI'- will save only the range of interested that have been marked. 
3.  'Set of ROI'- right click on the mouse to control on the ROI data. 
    :   *   'Separate file for each frame'- divide the saved data in numbers of files. 
        *   Don't marked the 'Combine marked' cause it will save all data in one file, which means big mess. 
        *   If you marked 'Raw' file, you will need to define more definitions on the header. 
        *   Finishing of export process for creating a file by confirm the 'Export'. 

[Attach:Camera\_notes\_07.jpg][7][ Δ][7] 



*   'Device manager' : operation of camera, card and hard disk definitions, 

[Attach:Camera\_notes\_08.jpg][8][ Δ][8] 


:   *   Each camera has her on definition that can be different from the others. 

1.  'Rec': control on record time. Option to skip over the frames for information dilution. To set frame delay in ms. 
2.  'Display': 'disable display during record' is available. Control on color definition of the display for example, option to get negative display by 'conversion' or to get 'vertical flip' (opposite the picture in real time). For any option that we will choose there is impact on the 'Export' conversion definition.  
    Remark: for the future uses, if we would like to observe particles without the black background the picture will be taken as a real picture. This action probably will save in different hard disk (shtrampe). 
3.  'Output Lut (look up table)': two kinds of definitions, which finds in export option too. 
    1.  'rec/live'- decision for what is going to be. 
    2.  'Active setup'-manage the recorded video.  
        Remark: the default is linear, but you can choose 'custom' and mark your  
        own choices from each range. Choose 'Default' will return you to default  
        mode. 
4.  'Stream filter': add information on the exist module (camera window) such as, adding pixels histogram. The display of the adding choice will show up in the specific camera window, or in new window. 
5.  'Driver': for controlling on the hard disks, overview on the set up information.  
    Choosing the 'Configure ' will lead as to new toolbar with different options. 
    1.  Camera definitions: Mikrton MC 1310, of 8x8 bites or 8x10 bites (faster than 8x8, for this reason we will activate this as soon as we get one more disks for backup).  
        Remark: (1) need to get from the company 2x10. 
    2.  'Camera setting': 

[Attach:Camera\_notes\_09.jpg][9][ Δ][9] 

In this option (1) choose the camera that you will control on her, then (2) choose dll and press ok. Camera control window will show up (2x10, 8x8, 8x10). This window may it possible to get get direct controlling on the camera which is different from the drivers controlling on the system (include the camera). 


:   1.  'trigger on cc1': on this option we will see that all the cameras synchronized together. The camera waiting to signal from the drivers for introduce picture on the screen. Controlling on the camera by the driver make the camera un independent. 

Remark: while we are on trigger mode, don't change anything in camera definition. The time duration of recording had been control by the drivers.  
* Choosing 'Device selector '- we would not use with this option. 



*   Choosing 'Display setting' - transforming information on live decrease the information that presented on the computer screen. If we will choose 'Disable' no information will get to the screen. (when we missed frame). 

*   Choosing 'Time stwap' - external trigger synchronize. �not necessary. 
*   Choosing 'Trigger' - for using with an external trigger. 
*   Choosing 'Misclanos' - in order to control in the synchronize of the system. While we marked the trigger option this is the place of system  
    control on the cameras throw the drivers. 



1.  Option to change number of frames. 
2.  Option to control only on specific camera that you will choose, while the other will be un independent. 
3.  TTL0- one of the drivers is a master, while all the other will be his slaves. 

[Attach:Camera\_notes\_10.jpg][10][ Δ][10] 



1.  CC1- input information. 
2.  Administrator- don't touch! Only if we want to abuse part of the drivers.  
    Remark: we can get this option from 'File→stream adminstrator', memory allocating. 

[Attach:Camera\_notes\_11.jpg][11][ Δ][11] 

General remark:  
:   *   Delete scene is recommended from the end of scene list or to delete all the scenes. Delete scene form the middle of the list might does 'dfrag' to the computer. 
    *   CLFC Manger: manage the driver in different way from the stream, as user level. 
    *   Save a file with the date of a day.

 [1]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=cn_image001.png
 [2]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=cn_image003.jpg
 [3]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=cn_image004.jpg
 [4]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=Camera_notes_04.jpg
 [5]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=Camera_notes_05.jpg
 [6]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=Camera_notes_06.jpg
 [7]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=Camera_notes_07.jpg
 [8]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=Camera_notes_08.jpg
 [9]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=Camera_notes_09.jpg
 [10]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=Camera_notes_10.jpg
 [11]: http://newhost.site/pmwiki.php?n=Lab.CameraNotes?action=upload&upname=Camera_notes_11.jpg
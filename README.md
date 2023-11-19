***TODO:Reorganization projects***

- run `npm install`
- Overwrite all files in `modified_framework/@theatre` into `node_moduels/@theatre`

![1280X1280](https://user-images.githubusercontent.com/7036706/199702605-00b0a06b-9b67-4c55-ac7a-33f2bb840206.PNG)
## Introduction

- Import designs from Figma to 3D web pages for preview.
- After downloading and building a local LAN server, you can also preview the design in real time on your XR device.

## Environment
First, the XR device needs to be in developer mode and on the same LAN as the computer (PC previews only can ignore this).

This article includes a one-click environment installation script (below). To configure the environment manually, you can refer to the following required environments/libraries.
Required runtime environments/libraries

- Mac:Homebrew
- Win:Choco
- Preview required: Node.js, ADB, kill-port, serve

### Script download (important)

[Release](https://github.com/MartinRGB/XRViewer/releases "Release")


## Plugin usage

### Download (important)
[Release](https://github.com/MartinRGB/XRViewer/releases "Release")
### Installation (Important)
- Unzip the plugin file
- Right click>Plugins>Development>Import plugin from manifest
- Select manifest.json in the unpacked folder

![1280X1280 (1)](https://user-images.githubusercontent.com/7036706/199702758-3ad8b547-ac8e-4a60-aac8-0376c48368af.PNG)
![1280X1280 (2)](https://user-images.githubusercontent.com/7036706/199702774-11421e50-2158-4dd4-9141-57bea768d702.PNG)


After selecting Frame, click XRViewer to launch it.
### Features
- Ring reference line (1m), Point reference line (20cm), First view reference line (yellow camera position)

![2a4c82e4-0e59-489e-a52c-1c0ad3810cab](https://user-images.githubusercontent.com/7036706/199702955-c20b73e4-3b5e-413f-a4c9-d3ea52fbb17f.png)

- Camera FOV, position and other parameters, first and third viewpoint switch (controls button)

![ad1d6b55-b369-477c-b0e1-6306d148486c](https://user-images.githubusercontent.com/7036706/199702852-21902d4d-fbcf-49ad-9be7-ef981dc14986.png)

### Exporting and running
On the Figma side, there are three buttons SaveToFigma, Download(Serve), Download(Static)
#### SaveToFigma
as the name suggests, copies the entire renderer image to Figma

![f48bed7f-5784-45d3-bfa7-78e8ad6d0e25](https://user-images.githubusercontent.com/7036706/199703072-b27f801f-0fc4-4fcf-8e5d-7b76fdcdff5a.png)

#### Download(Serve) (Important)
Save images and web pages as zip and download them (local static preview is not possible)
1. Put the saved zip file and the run/serve file into the same folder.

![1280X1280 (3)](https://user-images.githubusercontent.com/7036706/199703166-7f2452e0-e2f5-4124-916a-8ec522646e45.PNG)

2. Unzip the zip (do not change the name). First click serve (same for mac) to open the local server, when the text below appears, it means the build is successful.

![1280X1280](https://user-images.githubusercontent.com/7036706/199703253-b1122c64-03a7-4e10-8b6d-d42c30dbeee6.PNG)

3. Then click run to start previewing on PC or XR device (need to be connected).

##### Tips: 
After clicking `serve` once, don't close the open command line window, save the modified zip to the same location and unzip it each time, then refresh the browser page to hot reload the design effect. 

#### Download(Static) 
Save images and web pages as a single inline html, which can be previewed locally and statically, but causes the file to be too large and slow to load.


### Script function introduction (Important)

There are three types of scripts: env/serve/run
- env: installing the initial environment above, you need to install it once for the first time.
- serve: placed in the upper level of the exported resources folder, after clicking it, the local machine will build a LAN server
- run: The XR device needs to be in developer mode. Clicking on it will open the preview page on both the computer and the XR device.
- **Note for Mac users:**
  1. If the zip is not an executable file after unpacking, open a terminal and type:
  `chomd +x <drag and drop the file into Terminal here>` to convert the file to an executable.
  2. If a security prompt appears, right click to open the file
     
## Known issues

### Feedback
Just leave a issue report in [issue](https://github.com/MartinRGB/XRViewer/issues "here")

### Figma-related (important)
- Mask needs to be fine cut, don't go beyond the frame's borders
- Rotation is not supported, try to rotate the Flattern property after the Rotation
- Only support a Frame, multiple or not selected will not be able to open the plug-in
- Frame is overwritten, but the visible objects should be deleted, otherwise z-fighting mask each other
- Gradient support is poor for now
- Hidden elements will still be imported into the plug-in

### Preview-related (important)
- Refreshing the page after changing parameters will not save the parameter cache
- There is a baseUnit fixed unit, the current panel width is fixed 1m, and then according to the height to width ratio to isometric scaling height, resulting in a shorter panel position (1.7m about height, corresponding to 1m width, 1m distance, before is 1.7m height, corresponding to 40m width degree, 40m distance)
- Some times, the save is not successful, you need to repeatedly save in Figma, and then refresh the page
- The first time you run the plug-in, it may not work, you need to try again
- Figma's sandbox environment can't use Node, so you need to export and click the executable to build the server, which requires some research.
- At the moment, you can't preview XR devices by mapping methods other than adb reverse, so you need to open developer mode, which requires some research.

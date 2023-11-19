![1280X1280](https://user-images.githubusercontent.com/7036706/199702605-00b0a06b-9b67-4c55-ac7a-33f2bb840206.PNG)
### Introduction

- Import designs from Figma to 3D web pages for preview.
- After downloading and building a local LAN server, you can also preview the design in real time on your XR device.

### Environment
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

### Script function introduction (Important)

There are three types of scripts: env/serve/run
- env: installing the initial environment above, you need to install it once for the first time.
- serve: placed in the upper level of the exported resources folder, after clicking it, the local machine will build a LAN server
- run: The XR device needs to be in developer mode. Clicking on it will open the preview page on both the computer and the XR device.
- **Note for Mac users:**
  1. If the zip is not an executable file after unpacking, open a terminal and type:
  `chomd +x <drag and drop the file into Terminal here>` to convert the file to an executable.
  2. If a security prompt appears, right click to open the file

### Development
     
- run `npm install`
- Overwrite all files in `modified_framework/@theatre` into `node_moduels/@theatre`
  
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

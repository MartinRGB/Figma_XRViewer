@echo off
for /f "delims=[] tokens=2" %%a in ('ping -4 -n 1 %ComputerName% ^| findstr [') do set NetworkIP=%%a
echo LAN Address: http://%NetworkIP%:3000/
cmd /k "adb shell am broadcast -a com.oculus.vrpowermanager.prox_close && scrcpy --bit-rate 25M --crop 1390:1470:170:180"
pause
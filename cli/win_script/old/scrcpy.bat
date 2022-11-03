@echo off
cmd /k "adb shell am broadcast -a com.oculus.vrpowermanager.prox_close && scrcpy --bit-rate 25M --crop 1390:1470:170:180"
pause
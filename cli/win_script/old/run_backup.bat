@echo off
for /f "delims=[] tokens=2" %%a in ('ping -4 -n 1 %ComputerName% ^| findstr [') do set NetworkIP=%%a
echo LAN Address: http://%NetworkIP%:3000/
cmd /k "npx kill-port 3000 && adb reverse tcp:3000 tcp:3000 && adb shell am start -a android.intent.action.VIEW -d http://localhost:3000 && start chrome.exe http://%NetworkIP%:3000/ && serve"
pause
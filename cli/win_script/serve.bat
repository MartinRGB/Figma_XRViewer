@echo off
for /f "delims=[] tokens=2" %%a in ('ping -4 -n 1 %ComputerName% ^| findstr [') do set NetworkIP=%%a
echo LAN Address: http://%NetworkIP%:3000/
cmd /k "npx kill-port 3000 & echo Notice:port 3000 is killed && adb reverse tcp:3000 tcp:3000 & echo Notice:adb reverse is working & echo Notice:start to serve the project && cd my_project && serve"
pause
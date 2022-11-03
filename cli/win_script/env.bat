@echo off
cmd /k "@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin" & echo Notice:choco is installed && choco is install adb & echo Notice:adb is installed && choco install nodejs.install & echo Notice:node is installed && refreshenv && npm install -g serve & echo Notice:serve is installed && npm install -g kill-port & echo Notice:kill-port is installed"
pause


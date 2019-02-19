if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off
start /min cmd /C "nodemon index.js"
goto :EOF
:minimized
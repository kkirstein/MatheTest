@echo off
rem MatheTest.bat
rem Starter batch file for MatheTest web-app
rem

echo Starting local webserver..
echo Hit Ctrl+C to stop.

start C:\Opt\dart\dart-sdk\bin\pub global run simple_http_server

timeout /T 2

start http://localhost:8080/index.html


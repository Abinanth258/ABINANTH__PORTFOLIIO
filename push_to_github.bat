@echo off
echo ========================================================
echo   Pushing Updated Bright Portfolio to GitHub
echo ========================================================
echo Target: https://github.com/Abinanth258/ABINANTH__PORTFOLIIO.git
echo.
cd /d "%~dp0"
"C:\Program Files\Git\cmd\git.exe" push --force origin main
echo.
echo ========================================================
echo Update sent to GitHub! 
echo Vercel will automatically rebuild your site in 30 seconds.
echo ========================================================
pause

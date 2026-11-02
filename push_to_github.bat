@echo off
echo ========================================================
echo   Pushing Abinanth's Portfolio to GitHub
echo ========================================================
echo Target: https://github.com/Abinanth258/ABINANTH__PORTFOLIIO.git
echo.
cd /d "%~dp0"
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
echo ========================================================
echo If successful, open https://vercel.com/new to deploy!
echo ========================================================
pause

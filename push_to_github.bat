@echo off
echo ========================================================
echo   Pushing Abinanth's Portfolio to GitHub
echo ========================================================
echo.
echo Make sure you have created the empty repository at:
echo https://github.com/new (Repository name: abinanth-portfolio)
echo.
cd /d "%~dp0"
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
echo ========================================================
echo If successful, open https://vercel.com/new to deploy!
echo ========================================================
pause

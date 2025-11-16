@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo Initializing git repository...
git init

echo Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/MuraddAlizada/future-tech.git

echo Adding all files...
git add .

echo Committing changes...
git commit -m "Initial commit: FutureTech Summit website"

echo Pushing to GitHub...
git branch -M main
git push -u origin main --force

echo.
echo Deployment complete!
pause


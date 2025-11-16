# PowerShell script to upload to GitHub
# Run this script from the nextjs-site directory

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting GitHub upload..." -ForegroundColor Green

# Get the current directory
$currentDir = Get-Location
Write-Host "Current directory: $currentDir" -ForegroundColor Cyan

# Initialize git if needed
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "Git repository already initialized" -ForegroundColor Green
}

# Configure remote
Write-Host "Configuring remote repository..." -ForegroundColor Yellow
$remoteExists = git remote | Select-String -Pattern "origin"
if ($remoteExists) {
    git remote set-url origin https://github.com/MuraddAlizada/future-tech.git
    Write-Host "Remote URL updated" -ForegroundColor Green
} else {
    git remote add origin https://github.com/MuraddAlizada/future-tech.git
    Write-Host "Remote added" -ForegroundColor Green
}

# Add all files
Write-Host "Adding all files..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Initial commit: FutureTech Summit website" 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Changes committed" -ForegroundColor Green
} else {
    Write-Host "No changes to commit or commit already exists" -ForegroundColor Yellow
}

# Set branch to main
Write-Host "Setting branch to main..." -ForegroundColor Yellow
git branch -M main

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "This may require authentication..." -ForegroundColor Cyan
git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully uploaded to GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/MuraddAlizada/future-tech" -ForegroundColor Cyan
} else {
    Write-Host "❌ Error occurred during push" -ForegroundColor Red
    Write-Host "You may need to authenticate with GitHub" -ForegroundColor Yellow
    Write-Host "Try: git push -u origin main --force" -ForegroundColor Yellow
}


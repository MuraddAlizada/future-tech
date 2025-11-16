# Git deployment script
$repoUrl = "https://github.com/MuraddAlizada/future-tech.git"

# Initialize git if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..."
    git init
}

# Add remote if it doesn't exist
$remoteExists = git remote | Select-String -Pattern "origin"
if (-not $remoteExists) {
    Write-Host "Adding remote repository..."
    git remote add origin $repoUrl
} else {
    Write-Host "Updating remote repository URL..."
    git remote set-url origin $repoUrl
}

# Add all files
Write-Host "Adding all files..."
git add .

# Commit changes
Write-Host "Committing changes..."
git commit -m "Initial commit: FutureTech Summit website"

# Push to repository
Write-Host "Pushing to GitHub..."
git branch -M main
git push -u origin main --force

Write-Host "Deployment complete!"


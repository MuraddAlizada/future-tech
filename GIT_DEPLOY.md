# Deploy to GitHub

## Quick Deploy (Windows)

1. **Open PowerShell or Command Prompt** in the `nextjs-site` folder
2. **Run the batch file:**
   ```bash
   deploy.bat
   ```

## Manual Deploy

If the batch file doesn't work, run these commands manually:

```bash
# Navigate to nextjs-site directory
cd nextjs-site

# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/MuraddAlizada/future-tech.git
# Or if remote already exists:
git remote set-url origin https://github.com/MuraddAlizada/future-tech.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: FutureTech Summit website"

# Push to GitHub
git branch -M main
git push -u origin main --force
```

## Notes

- The `--force` flag is used because the repository is empty
- Make sure you have Git installed and are authenticated with GitHub
- If you get authentication errors, you may need to set up a Personal Access Token


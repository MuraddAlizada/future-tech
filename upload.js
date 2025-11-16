const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting GitHub upload...\n');

const repoUrl = 'https://github.com/MuraddAlizada/future-tech.git';
const currentDir = process.cwd();

console.log(`Current directory: ${currentDir}\n`);

try {
  // Initialize git if needed
  if (!fs.existsSync(path.join(currentDir, '.git'))) {
    console.log('Initializing git repository...');
    execSync('git init', { stdio: 'inherit', cwd: currentDir });
  } else {
    console.log('Git repository already initialized');
  }

  // Configure remote
  console.log('\nConfiguring remote repository...');
  try {
    execSync('git remote get-url origin', { stdio: 'pipe', cwd: currentDir });
    execSync(`git remote set-url origin ${repoUrl}`, { stdio: 'inherit', cwd: currentDir });
    console.log('Remote URL updated');
  } catch (e) {
    execSync(`git remote add origin ${repoUrl}`, { stdio: 'inherit', cwd: currentDir });
    console.log('Remote added');
  }

  // Add all files
  console.log('\nAdding all files...');
  execSync('git add .', { stdio: 'inherit', cwd: currentDir });

  // Commit
  console.log('\nCommitting changes...');
  try {
    execSync('git commit -m "Initial commit: FutureTech Summit website"', { stdio: 'inherit', cwd: currentDir });
    console.log('Changes committed');
  } catch (e) {
    console.log('No changes to commit or commit already exists');
  }

  // Set branch to main
  console.log('\nSetting branch to main...');
  execSync('git branch -M main', { stdio: 'inherit', cwd: currentDir });

  // Push to GitHub
  console.log('\nPushing to GitHub...');
  console.log('This may require authentication...\n');
  execSync('git push -u origin main --force', { stdio: 'inherit', cwd: currentDir });

  console.log('\n✅ Successfully uploaded to GitHub!');
  console.log(`Repository: ${repoUrl}`);
} catch (error) {
  console.error('\n❌ Error occurred:', error.message);
  console.log('\nYou may need to:');
  console.log('1. Authenticate with GitHub (use Personal Access Token)');
  console.log('2. Run: git push -u origin main --force');
  process.exit(1);
}


# Quick Deployment Fix for Vercel

## Error: Exit Code 126 - Permission Denied

The storybook binary doesn't have execute permissions on Vercel's build servers.

## Solution

Created `vercel.json` with this configuration:

```json
{
  "buildCommand": "npx -y storybook@latest build",
  "outputDirectory": "storybook-static",
  "installCommand": "npm ci"
}
```

### Why This Works:
- `npx -y` automatically installs and runs storybook with proper permissions
- `npm ci` ensures clean dependency installation
- `storybook@latest` uses the globally available storybook package

## Deploy Now

```bash
git add vercel.json
git commit -m "Fix Vercel deployment with npx -y"
git push origin main
```

Vercel will auto-deploy and the build should succeed! ✅

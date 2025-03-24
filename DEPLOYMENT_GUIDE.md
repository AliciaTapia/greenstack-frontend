# Azure Deployment Guide

## Required Changes
1. Added `server.js` for Node.js hosting
2. Modified `package.json` scripts

## Critical Files
- `server.js`: Express server for Azure
- `web.config`: IIS configuration (for Windows hosting)
- `.env`: Azure environment variables

## Deployment Checklist
```bash
npm install
npm run build
git add -A
git commit -m "Add Azure deployment support"
git push
```

## Troubleshooting
| Issue | Solution |
|-------|----------|
| Blank page | Check `web.config` exists |
| 404 Errors | Verify `build/` folder contents |
| Node.js errors | Set `WEBSITE_NODE_DEFAULT_VERSION` in Azure |
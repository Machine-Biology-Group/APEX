# Build and Deployment instructions:

## Build Instructions

### Frontend Build
```bash
cd frontend
npm install
npm run build
```
This creates a `dist` folder with optimized production files.

### Backend Build
```bash
cd backend
npm install
npm run build
```
This creates a `dist` folder with compiled TypeScript files.

### Testing
```bash
cd backend
npm run test
```


## Current Deployment Setup

### Backend (Manual)

1. Build the backend locally:

2. Copy to apex1 server:
 ```bash
   # Copy built files
   scp -r backend/dist/* user@apex1:/data/nodeapp/apex-backend/
   
   # Copy package.json and install production dependencies
   scp backend/package.json user@apex1:/data/nodeapp/apex-backend/
   ssh user@apex1 "cd /data/nodeapp/apex-backend && npm install --production"
   
   # Copy any additional required files (uploads, configs, etc.)
   scp -r backend/uploads user@apex1:/data/nodeapp/apex-backend/
   ```
3. Create .env file in /data/nodeapp/apex-backend/
   Check environment variables in backend/README.md to know which variables are required.
4. Create a database file (only required on the first deployment). Run from the backend directory:
   ```bash
   npx prisma migrate deploy
   ```
5. Restart the systemd service:
   ```bash
   ssh user@apex1
   sudo /sbin/service api-backend restart
   ```


### Frontend Manual Deployment to apex1
NOTE: as of writing this, the frontend is not set up to be deployed to apex1.

1. **Build the frontend locally:**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. **Copy to apex1 server:**
   ```bash
   # Option 1: Using scp
   scp -r frontend/dist/* user@apex1:/data/frontendapp/apex-backend
   
   # Option 2: Using rsync
   rsync -avz --delete frontend/dist/ user@apex1:/data/frontendapp/apex-backend
   
   # Option 3: Manual copy via SFTP/FileZilla
   # Copy contents of frontend/dist/ to /data/frontendapp/apex-backend on apex1
   ```
## Configuration
The app in configured via Environment variables.

Frontend project varaibles:
VITE_BACKEND_BASE_URL=http://localhost:10000  -  this is the base url for the backend api.

Backend project variables:
DATABASE_URL="file:../jobs.db" - this is the path to the database file.
EMAIL_PROVIDER_API_KEY=qweqwqweqwe - this is the api key for the email provider api (currently duocircle).
LSF_CLUSTER_BASE_PATH=H:\Projects\anne\upenn\backend\src\tests\test-files - this is the path to the lsf cluster. It is used to determine file paths for input and output files
FILE_CLEANUP_PERIOD_DAYS=7 - this is the number of days after which the files will be deleted.
RATE_LIMIT_MAX_REQUESTS=100 - this is the maximum number of requests allowed in 24 hours per IP address.


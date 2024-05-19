const cp = require('child_process')
cp.execSync('npm run dev',{
    stdio:'inherit'
})
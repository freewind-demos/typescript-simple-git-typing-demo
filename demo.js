const workingDirPath = './local-repo'
const simpleGit = require('simple-git')(workingDirPath)

simpleGit.clone('https://github.com/freewind-demos/javascript-frontend-hello-world-demo.git', 'demo-project')

console.log('cloned to: local-repo/demo-project')
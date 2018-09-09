import simplegit = require('simple-git/promise')

const git = simplegit('./local-repo')

git.clone('https://github.com/freewind-demos/javascript-frontend-hello-world-demo.git', 'demo-project')
    .then(() => {
        console.log('cloned to: local-repo/demo-project')
    })

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gitOn = require("simple-git");
const git = gitOn('./local-repo');
git.clone('https://github.com/freewind-demos/javascript-frontend-hello-world-demo.git', 'demo-project')
    .exec(() => {
    console.log('cloned to: local-repo/demo-project');
});
//# sourceMappingURL=demo.js.map
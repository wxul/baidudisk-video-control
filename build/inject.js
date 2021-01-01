const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.resolve(__dirname, '../src/inject.js'), { encoding: 'utf8' })

const temp = `const theScript = document.createElement('script');
theScript.innerHTML = \`${file}\`;
document.body.appendChild(theScript);`

fs.writeFileSync(path.resolve(__dirname, '../dist/inject.js'), temp, { encoding: 'utf8' })
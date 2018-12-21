const fs = require('fs')

//update last update
let tmpl = `---
home: true
lastUpdate: ${Date.now()}
---

# This is the title of this article

[[TOC]]

## 1.title1

## 2.title2

### 2.1title2-1
`
fs.writeFileSync('./blog/README.md', tmpl)

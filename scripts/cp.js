const fs = require('fs-extra');
const path = require('path');
fs.copySync(path.join(__dirname, '../src'), path.join(__dirname, '../es'), { recursive: false });

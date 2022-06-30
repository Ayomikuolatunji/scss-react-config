

const fs = require('fs');
const path = require('path');
const Sass = require('node-sass');

const res=Sass.renderSync({
    data: fs.readFileSync(
        path.resolve("src/global.scss"),
    ).toString(),
    outputStyle: 'expanded',
    outFile:"global.css",
    includePaths: [
        path.resolve("src"),
    ]
})

console.log(res);
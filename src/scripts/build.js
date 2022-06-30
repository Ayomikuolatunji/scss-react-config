

const fs = require('fs');
const path = require('path');
const Sass = require('node-sass');



const compile=(paths,fileName)=>{
    const res=Sass.renderSync({
        data: fs.readFileSync(
            path.resolve(path),
        ).toString(),
        outputStyle: 'expanded',
        outFile:"global.css",
        includePaths: [
            path.resolve("src"),
        ]
    })
    .css.toString()

    fs.writeFileSync(
        paths.resolve(fileName)
        ,res
    )
    
}


compile("src/global.scss","dist/global.css")

console.log(res);
const fs = require('fs');
const path = require('path');
const Sass = require('node-sass');


const getComponents=(paths)=>{
   let allComponents=[];
   const types=["atoms","molcules","organisms","pages","templates","styles"];
   types.forEach(type=>{
         const components=fs.readdirSync(`src/${type}`)
          .map(fileName=>paths.resolve(fileName))
         ;
   })
}

const compile=(paths,fileName)=>{
    const res=Sass.renderSync({
        data: fs.readFileSync(
            path.resolve(paths),
        ).toString(),
        outputStyle: 'expanded',
        outFile:"global.css",
        includePaths: [
            path.resolve("src"),
        ]
    })
    .css.toString()

    fs.writeFileSync(
        path.resolve(fileName)
        ,res
    )
}


compile("src/global.scss","dist/global.css")



const fs = require('fs');
const path = require('path');
const Sass = require('node-sass');


const getComponents=()=>{
   let allComponents=[];
   const types=["atoms","molecules"];
   types.forEach(type=>{
         const components=fs.readdirSync(`src/${type}`)
          .map(fileName=>(
              {
                input:`src/${type}/${fileName}`,
                output:`dist/${fileName.slice(0,-4) + "css"}`
              }
          ))
         ;

         allComponents=[
            ...allComponents,
            ...components
         ]
   })

   return allComponents;
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

console.log(getComponents());
compile("src/global.scss","dist/global.css")

getComponents().forEach(({input,output})=>{
    compile(input,output)
})



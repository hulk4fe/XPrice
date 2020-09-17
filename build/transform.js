const { transformFileSync } = require("@babel/core")
const { join } = require('path')
const { readdirSync, readFileSync, statSync, writeFileSync, mkdirSync, existsSync } = require('fs')
const source = join(__dirname, '../src')
const output = join(__dirname, '../es')

const travelDirSync = (dir, outdir, cb)=>{
  readdirSync(dir).forEach(function(file) {
      var pathname = join(dir, file),
          outname = join(outdir, file);
      if (statSync(pathname).isDirectory()) {
        mkdirSync(outname)
        travelDirSync(pathname, outname, cb)
      }else{
        cb(pathname, outname, file);
      }
  })
}

const transformFiles = (file)=>{
  return transformFileSync(file, {
      babelrc: true
  }).code;
}

if(!existsSync(output)){
    mkdirSync(output)
}

travelDirSync(source, output, (pathname, outname, file) => {
    if(file.indexOf('.scss') === -1){
        const result = transformFiles(pathname)
        writeFileSync(outname, result)
    }else{
        writeFileSync(outname, readFileSync(pathname))
    }
})
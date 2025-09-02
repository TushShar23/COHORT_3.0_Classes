const { program } = require("commander");
const fs = require("fs");
let counter = 0;

program.name('Counter');
program.description("CLI to count the no of words in a file");
program.version('0.8.0');

// program.command('help')
// .option('-h',"help")
// .description('Helps you with the provided commands')



program.command('count')
.description("Tells you the number of words in the given file")
.argument('<file>','name of the file')
.action((file)=>{
    const contents =fs.readFileSync(file,'utf-8');
    const newcont = contents.trim();
    // console.log(contents.length);
    for(let i=0;i<newcont.length;i++){
        if(newcont[i]===" " || newcont[i]==="."){
            counter++;
        }
    }

    if(contents.length===0){
        console.log(`No of words in the file : ${counter}`);
    }
    else{
        console.log(`No of words in the file : ${counter+1}`);
    }
  }
)


program.parse();

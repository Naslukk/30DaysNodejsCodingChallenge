const fs = require('fs').promises;

async function readFileContent(filePath) {

    try {
        const content = await fs.readFile(filePath, 'utf8');
        if (content.trim() === ''){
            console.log('\nempty string');
        }else{
            console.log( '\n'+content);
        }
    } catch (error) {
        if(error.code === 'ENOENT'){
            console.error('\nError reading file: ENOENT: no such file or directory...');
        }else{
            console.error('Error occurred : ' + error.message);
        }
    }
}


const mainFile = 'test-files/file1.txt';
const emptyFile = 'test-files/empty-file.txt';
const noFile = 'test-files/nonexistent-file.txt';


async function readFile(){
    await readFileContent(mainFile);
    await readFileContent(emptyFile);
    await readFileContent(noFile);
}

readFile();
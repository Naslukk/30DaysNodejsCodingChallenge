const fs = require('fs').promises;


async function writeToFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content);
        console.log(' Data written to output1.txt');
    } catch (error) {
        if(error.code === 'ENOENT'){
            console.error('\nError writing to file: ENOENT: no such file or directory...');
        }else{
            console.error('Error occurred : ' + error.message);
        }
    }
}
async function call(){

    await writeToFile('test-files/output1.txt', 'Sample content.');
    await writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
}

call();
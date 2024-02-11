const path = require('path');

function checkFileExtension(filePath , expactedExtension) {
    const actualExtension = path.extname(filePath);

    if(actualExtension === expactedExtension){
        console.log('File has the expected extension : ' + expactedExtension + ' Actual extension : ' + actualExtension);
    }else {
        console.log(`File dose not have the expected extension : ${actualExtension} Actual extension : ${expactedExtension}`)
    }
}

checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', 'jpg');

const path = require('path');

function resolvePath(relativePath) {
    const basePath = "./test-files";
    const absolutePath = path.join(basePath, relativePath);
    console.log("Resolved relative:" , absolutePath);
}
resolvePath("./test-files/file1.txt");
resolvePath("nonexistest-folder/file1.txt");
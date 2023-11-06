import * as fs from 'fs';
import * as path from 'path';

const directoryPath = path.join(process.cwd(), '../intialDB/src/DB-files/DB-Operations/');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    } 
    files.forEach((file) => {
        console.log(file);
    });
});

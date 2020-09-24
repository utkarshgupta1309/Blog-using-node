const fs = require('fs');
const readst = fs.createReadStream('./docs/text.txt', {encoding: 'utf8'});
const writest = fs.createWriteStream('./docs/text4.txt');
readst.pipe(writest);
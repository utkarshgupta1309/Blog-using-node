
// const greet = (name) =>{
//     console.log(`hello, ${name}`);
// }
// //template literals!!
// greet('Utkarsh');
// greet('Isha');

// console.log(global);

// global.setTimeout(() => {
//    console.log('in the timeout');
//    clearInterval(interval);
    
// }, 3000);
 
// const interval = setInterval(() => {
//     console.log('in the interval');
    
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

// const people = ['U2','Ishu', 'Ankit', 'Kattu'];
// const ages = [20,21,19,20];

// console.log(people);
// module.exports = {
//     people, ages
// }

//------------reading files-------------
const fs = require('fs');
// fs.readFile('./docs/text.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// //--------------writing files

// fs.writeFile('./docs/text2.txt', 'ello world',() => {
//     console.log('file is written');
// });

//-------directories------------------
// if(!fs.existsSync('./assests')){
//     fs.mkdir('./assests', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created')
//     })  
// }
// else{
//     fs.rmdir('./assests', (err) => {
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log('Folder Deleted');
        
//     })
// }

// //------------------deleting files-----------
// if(fs.existsSync('./docs/deleteMe.txt'))
// {
//  fs.unlink('./docs/deleteMe.txt', (err) => {
//      if(err)
//      {
//          console.log(err);
//      }
//      console.log('File Deleted');
     
//  });
// }
const fs = require('fs');


// for(var i = 1; i <= 100; i++){
//     fs.mkdir('folder-' + i, () => {
//         // console.log('Created another new repo!')
//       });
// }

// for(var i = 1; i <= 100; i++) {
//     fs.rename('folder-' + i, 'new-folder-' + i)
// }


for(var i = 1; i <= 100; i++) {
    fs.rmdir('new-folder-' + i, (err, data) => {
        if(err) console.log('Error!', err);
        // console.log('Deleted another new repo!')
      });
}
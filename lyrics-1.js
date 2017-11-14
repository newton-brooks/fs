const fs = require('fs');




  fs.writeFile('lyrics-2.txt', 'Work, work, work, work, work, work He said me have to abraeerv', (err) => {
    if (err) {
      throw err;
    }
  });

let lyrics1;

 fs.readFile('lyrics-1.txt', function(err, data) {
    if (err) throw err;
    lyrics1 = data.toString();
    fs.readFile('lyrics-2.txt', function(err, data) {
        if (err) throw err;
        lyrics1 += data.toString()
        fs.writeFile('lyrics-3.txt',lyrics1, (err) => {
            if (err) {
              throw err;
            }
          });
      });
     
  });



//   fs.readFile('lyrics-1.txt', function(err, data) {
//     if (err) throw err;
//     lyrics1 = data.toString();
//     fs.readFile('lyrics-2.txt', function(err, data) {
//         if (err) throw err;
//         lyrics1 += data.toString()
//         fs.writeFile('lyrics-3.txt',lyrics1, (err) => {
//             if (err) {
//               throw err;
//             }
//           }); 
//       });
     
//   });


 

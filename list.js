const fs = require('fs');
const path = require('path');


fs.readdir('.', (err, data) => {
    if(err) {
         throw err;
    }


});


const filter = (dir, ext) => {
    fs.readdir(dir, (err, data) => {
         if(err) {
             throw err;
        }
        data.map(fileName => {
            if(path.extname(fileName).slice(1) === ext){
                console.log(fileName)
            }
        })
    });
  
}

filter('.', 'js')
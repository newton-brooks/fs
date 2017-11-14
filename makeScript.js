// console.log(process.argv)


const fs = require('fs');

fs.writeFile(process.argv[2], (process.argv).slice(3).join(' '), (err) => {
    if (err) {
      throw err;
    }
});

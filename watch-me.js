const fs = require('fs');



fs.watch('watch-me.txt', () => {
    fs.readFile('watch-me.txt', function(err, data) {
        if (err) {
            throw err;
        }
        fs.writeFile('new-text.txt', data.toString(), (err) => {
            if (err) {
              throw err;
            }
          });
      });   
});
  
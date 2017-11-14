var poem = '’Twas brillig, and the slithy toves \n     , Did gyre and gimble in the wabe: \nAll mimsy were the borogoves, \n      And the mome raths outgrabe. \n\n“Beware the Jabberwock, my son! \n      The jaws that bite, the claws that catch! \nBeware the Jubjub bird, and shun \n      The frumious Bandersnatch!” \n\nHe took his vorpal sword in hand; \n      Long time the manxome foe he sought— \nSo rested he by the Tumtum tree \n      And stood awhile in thought. \n\nAnd, as in uffish thought he stood, \n      The Jabberwock, with eyes of flame, \nCame whiffling through the tulgey wood, \n      And burbled as it came! \n\nOne, two! One, two! And through and through \n      The vorpal blade went snicker-snack! \nHe left it dead, and with its head \n      He went galumphing back. \n\n“And hast thou slain the Jabberwock? \n      Come to my arms, my beamish boy! \nO frabjous day! Callooh! Callay!” \n      He chortled in his joy. \n\n’Twas brillig, and the slithy toves \n      Did gyre and gimble in the wabe: \nAll mimsy were the borogoves, \n      And the mome raths outgrabe.';

var regex = /\n+/g
const fs = require('fs');



for(var i = 1; i <= 28; i++){
    for(var j = 0; j < poem.split(regex).length; j++){
        fs.writeFile('jabb-' + i + '.txt', poem.split(regex)[j], (err) => {
            if (err) {
              throw err;
            }
        });
    }
}











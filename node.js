// console.log(process.argv)
// console.log(Number(process.argv[2]) + Number(process.argv[3])) 

const fs = require('fs')
// const add = (num1, num2) => num1 + num2

// const num1 = Number([process.argv[2]])
// const num2 = Number(process.argv[3])
// console.log(`the result is ${add(num1,num2)}`)
 
// const add = (num1, num2) => num1 + num2

// const num1 = Number(process.argv[2]);
// const num2 = Number(process.argv[3])
// console.log(`the result is: ${add(num1, num2)}`)





// fs.readFile('words.txt', function(err,data) {
//     console.log(`err: ${err}`)
//     console.log(`data ${data}`)
// })

// ^^ this is what readfile does

// fs.readdir('.', (err,data) => {
//     if(err) {
//         console.log('error!', err)
//     }
//     console.log(data);
// })

// this is a way to read all files in the current folder ^^

// fs.mkdir('new folder', () => )


// fs.watch('words.txt', (eventType, filename) => {
//     console.log(eventType + ' in ' + filename);
//   })

var fileName = process.argv[2]

fs.readFile(fileName, 'utf-8', function(err,data){
    if(err) {
        throw err
    }
    console.log(data)
})


// fs.writeFile('words.txt', 'first message', function(err){
//     if(err) { throw err}
//     console.log('the file was saved')
//     fs.writeFile('words.txt', 'second message', function(err,data){
//         if(err) { throw err}
//         console.log(data)
//     })
// })







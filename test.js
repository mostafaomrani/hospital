const fs = require("fs");
const express = require("express");

// ****************************Question01********************************
// const app = express()
// const port = 3000
// app.get('/:message', (req, res, next) => {
//   const delay = req.query.delay
//   setTimeout(() => {
//     res.json({ message: req.params.message })

//   }, delay);
// })

// app.listen(port, () => {
//   console.log(`app listening on port ${port}`)
// })
// ******************************************************

// i = 0;
// k = 0;
// const files = ["mahdi.txt", "mahdi2.txt", "email.txt"];

// function readfile(i = 0) {
//   if (i >= files.length) {
//     messageAllReady();
//     return;
//   }
//   fs.readFile(files[i], (err, filei) => {
//     if (err) {
//     } else {
//       k = k + 1;
//     }
//     readfile(i + 1);
//   });
// }
// readfile();

// function messageAllReady() {
//   console.log(k);
// }

// function allExist(file, callback) {
//   fs.readFile(file[0], (err, file0) => {
//     console.log(file0)
//   })

//   callback(err, null)

//   callback(null, true)

//   callback(null, false)

// }

// allExist([mahdi.txt, mahdi2.txt, email.txt], (err, result) => {
//   if (err) {
//     console.err("an error occurred:" + err)
//   }
//   if (result === true) {
//     console.log("All Exist!")
//   } else {
//     console.log("At Least one of them does not exist!")
//   }

// })

// const files = ["mahdi.txt", "mail.txt", "mahdi.txt", "mail.txt", "mahdi.txt"];
// let message = ""

// function readfile(i=0) {
//   if (i >= files.length) {
//     messageAllReady();
//     return;
//   }
//   fs.readFile(files[i], (err, filei) => {
//     message += String(filei)
//     readfile(i + 1)
//   });
// };
// function messageAllReady() {
//   console.log("message=")
//   console.log(message)

// }
// readfile()

// i = 0;
// j = 0;
// function sayHello() {
//   console.log("Salam Khobi?");
//   i++;
//   console.log(i);
//   if (i === 10) clearInterval(timer);
// }
// function sayHello2() {
//   console.log("Mahdi?");
//   j++;
//   console.log(j);
//   if (j === 10) clearInterval(timer2);
// }

// timer = setInterval(sayHello, 3000);
// timer2 = setInterval(sayHello2, 2000);
// console.log("End");
const TTT = Buffer.from ('Mahdi:yarmohamadi','utf-8').toString("base64")
console.log(TTT)
const base64 = 'TWFoZGk6eWFybW9oYW1hZGk='
const LLL = Buffer.from (base64 , 'base64').toString('utf-8')
const [user,password] = LLL.split(':')
console.log(user)
console.log(password)
//here we have acquired the external library/module which is fs= file system which lets us do IO operation using nodejs

const fs = require("fs");

const content1 = fs.readFileSync("a.txt","utf-8");
// "utf-8 is an encoding format means format in which your data is processed.If we don't pass this then BY DEFAULT it will give us IN HEXADECIMAL BUFFER FORMAT"
console.log(content1);

const content2 = fs.readFileSync("b.txt","utf-8"); // sync here is synchronous
console.log(content2);

// THIS IS HAPPENING SYNCHRONOUSLY and SEQUENTIALLY


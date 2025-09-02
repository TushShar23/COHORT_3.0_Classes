//actual async fileread code

const fs = require("fs");

function PrintContent(err,data){
    if(err){
        console.log("File not found!");
    }
    else{
        console.log(data);
    }
}

// whosoever is read first that will be printed first.Agar paani pehle boil hogya toh hum usse pehle gas band karenge then machine ke pass jaayenge. 

// 1.
fs.readFile('a.txt','utf-8',PrintContent);
fs.readFile('b.txt','utf-8',PrintContent);

// 2.
fs.readFile('a.txt','utf-8',PrintContent);
fs.readFile('c.txt','utf-8',PrintContent);

// 3.
fs.readFile('b.txt','utf-8',PrintContent);
fs.readFile('c.txt','utf-8',PrintContent);

console.log("Done!");

// THE MAIN THING is that if your code has some lines of CPU intensive tasks(like running loops,logging etc..) and also some ASYNC,I/O intensive tasks so how it will run/gives the output is see if the async code is set to be executed after 10-15 or any no of seconds and your cpu task let say a loop is running 100000 times.Thread will first finish the CPU task doesn't matter if your async task has been completed,after given no of seconds that async code will be pushed to callback queue and from callback queue it will be called once CPU intensive task will be completed or you can say THREAD will be free.

// IN SHORT FIRST PRIORITY GIVEN BY THE THREAD IS TO CPU TASK doesn't matter your async code is finished(it will be in callback queue) till the time THREAD WILL BE FREE FROM EXECUTING CPU INTENSIVE TASK.

// TO make any async function sync.function you can write its definition by your own just do one thing put any cpu intensive task in its definition like infinite loop or something so that thread becomes busy there and gives the output.
    
// what makes a function async ?
// any function which uses web api,delegate its work to other,I/O intensiv task . readFile(),setTimeOut(),setInterval(),fetch(),database calls all are async functions and the tasks/functions which uses these are async tasks/functions.


// whenever you use a I/O operation be it hitting a database,calling apis response use async functions.

// if you have 10 or more async tasks that has been completed and pushed into callback queue.They will wait till the time your CPU intensive task will not be completed.

// IF there are 2 or more async functions in a code then the one who has less time or will be given 1000ms and another with 10000ms the 1000ms will get first in callback queue even if it is written after the 10000ms wala timeout.


// js arch - runtime=>(js engine,web apis/DOM,file system,network system,process apis,event loop,callback queue,microtask queue),js engine=>(call stack,heap)

// async function does not directly go to the call stack first they are delegated or pushed to web apis then the callback of async tasks is pushed into callback queue once thread got free from executing cpu intensive tasks of OR when thread gets free then through the event loop the callback from callback queue is pushed to the call stack and similar not same with microtask queue.
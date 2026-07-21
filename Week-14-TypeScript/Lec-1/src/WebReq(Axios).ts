import axios from "axios";
import type { AxiosResponse,isAxiosError } from "axios";
// YOU have to USE "IMPORT TYPE" when you are importing types of any external library 

// axiosResponse is a both a type and generic


// we are going to see how we use Axios or how we request data using Axios using TS


interface Todo{
    userId: number,
    id: number,
    title: string,
    complete: boolean
}
// we will use this structure for our data


// as this is gonna request data from API which is an async operation
const fetchData = async()=>{
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

        // axios return an OBJECT name RESPONSE/AxiosResponseObject

        console.log("Todo: ",response.data);
        // await we have used coz its an async process
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            // if it returns true it means the error is AXIOS error.
            console.log("Axios Error: ",error.message);
            // now error object has its own subproperties
            if(error.response){
                console.log(error.response.status);
            }
            //nothing just further destructuring
        }
    }
}

fetchData(); // working

/*

function hello(){
    return ("hello promise");
}


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(hello())
    }, 2000);
});

p.then((res)=>{
    console.log(res);
    // at first it was returning an extra "undefined" coz in js if a function expplicityy does not return anything then it returns UNDEFINED.We should execute the function here not in the "resolve()"
})
.catch((err)=>{
    console.log(err);
})


1. resolve(hello()) -> Result मिलता हैयहाँ आप फ़ंक्शन को तुरंत चला देते हैं। फ़ंक्शन जो भी return करेगा (जैसे कोई text, number या object), वही .then() के पास जाएगा।.then(res) में क्या मिलेगा: फ़ंक्शन का आउटपुट (जैसे: "Success")।
2. resolve(hello) -> Reference मिलता हैयहाँ फ़ंक्शन चलता नहीं है, बल्कि .then() के पास ट्रांसफर हो जाता है। .then() को फ़ंक्शन का केवल एक शॉर्टकट (Reference) मिलता है।.then(res) में क्या मिलेगा: पूरा फ़ंक्शन खुद function hello() { ... }।result देखने के लिए: आपको .then() के अंदर जाकर res() लिखकर उसे खुद चलाना पड़ेगा।

*/

/*



Why not just write Todo?

Because the response itself isn't a Todo.

The response looks like this:

{
   data: Todo,
   status: 200,
   headers: ...
}

So

AxiosResponse<Todo>

means

"This response object has a data property whose type is Todo."

If you wrote

const response: Todo

that would be incorrect, because response also contains status, headers, config, etc.


The generic tells TypeScript what's inside data.

AxiosResponse<Todo> → data is a Todo.
AxiosResponse<User> → data is a User.
AxiosResponse<Product[]> → data is an array of Product.

That's why AxiosResponse is generic: the wrapper is constant, but the payload (data) can be any type.








*/
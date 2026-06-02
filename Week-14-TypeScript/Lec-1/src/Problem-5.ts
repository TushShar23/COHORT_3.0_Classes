// A greet function taking name as an input call after 1s

const DelayedCall = (fn:()=>void)=>{
    setTimeout(() => {
        fn()
    }, 1000);
}


const Greet = (FirstName:string)=>{
    console.log(`Hey! ${FirstName}`)
}

DelayedCall(()=>{
    Greet("Tushar")
})


/*

WHAT I WAS DOING WRONG ->>


You are calling Greet("Tushar") immediately instead of passing the function itself.

This line:

DelayedCall(Greet("Tushar"))

does this:

1. Calls Greet immediately
2. console.log runs
3. Greet returns undefined
4. undefined gets passed to DelayedCall

But DelayedCall expects:

fn: () => void

which means:

a function with no parameters



"() => Greet("Tushar")"" WHY THIS WORKS ->>

a function
takes no arguments
returns void

Exactly matching:
() => void



*/
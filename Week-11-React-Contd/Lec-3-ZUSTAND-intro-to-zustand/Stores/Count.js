import { create } from 'zustand';

const useCountStore = create((set,get)=>({
    count:0,
    Increment: ()=>set((state)=>({count: state.count + 1})),
    Decrement: ()=>set((state)=>({count: state.count - 1}))
    // increment and decrement are actions
}))

// SO IN ZUSTAND THERE ARE STORES,ACTIONS,STATES

/*

You don’t want set() to run immediately when the store is created.
You want it to run only when someone calls increment().

- set( something )

This tells Zustand:

    “Hey, update the store”



(state) => ({ count: state.count + 1 })
This is not random. This is critical.

Why a function instead of an object?
Because Zustand (like React) supports functional updates.

set(state => ({ count: state.count + 1 })) // ✅ safe

Why?

    Ensures latest state

    Prevents race conditions

    Same reason React has setState(prev => ...)




Q-Why {} inside () ?

Because:
{} normally means function body
But here we want to return an object

Without parentheses ❌
(state) => { count: state.count + 1 } // returns NOTHING

With parentheses ✅
(state) => ({ count: state.count + 1 })


👉 Third () = “return object, not block”



VISUAL BREAKDOWN
() =>                     // action function
  set(
    (state) =>            // updater function
      ({ count: state.count + 1 }) // returned object
  )


SAME THING WITHOUT FANCY 
function increment() {
  set(function (state) {
    return {
      count: state.count + 1
    };
  });
}


Outer arrow → when to run
Inner arrow → how to update safely
Parentheses → return object

*/

export default useCountStore;
import { create } from 'zustand';

const useCountStore = create((set,get)=>({
    count:0,
    Increment: ()=>set((state)=>({count: state.count + 1})),
    Decrement: ()=>set((state)=>({count: state.count - 1}))
    // increment and decrement are actions
    // Because we want to return the OBJECT(Updated State) thats why we put {} inside () else it will be a simple function body
    
}))
/*

create((set) => ({ ... }))

    create creates a global store
    It returns a custom hook
    That hook is named by you (useStore)

👉 This hook is how components talk to the store.




- STATE(data) : (count)
- ACTIONS(updator functions) : (increment , decrement)Functions that modify state.They live inside the store
- SELECTORS(PARTICULAR Element/state which you want to update):Selector = “what slice of state do I care about?”



set((state) => ({ count: state.count + 1 }))

    set updates the store
    YOU NEVER MUTATE STATE DIRECTLY.
    ALWAYS RETURN A NEW OBJECT



SET : set is a function that Zustand itself creates and passes to you.

You passed a function to create.

(set, get) => ({ ... })
👉 Zustand calls this function for you, and injects:

set → function to update state
get → function to read current state

This pattern is called Dependency Injection.



const count = useCountStore((state) => state.count);
  (means)
  Give this component the current value of count from the global store,
  and re-render this component ONLY when count changes.”

  ANOTHER APPROACH FOR WRITING THIS(VERBOSE-using more than words/things than needed) :

  function CountVal() {
  const count = useCountStore(function selector(state) {
    return state.count;
  });

  return <div>{count}</div>;
}




  

*/

// ******IMPORTANT********
// WHAT KIND OF OBJECT IT RETURNS ?
/*The object you return is a PARTIAL STATE OBJECT.

Not full state.
Not random data.
Not a new store.


It is “the piece of state you want to change.”


Why “partial”?

Assume your store looks like this:

{
  count: 0,
  user: { name: "Tushar" },
  theme: "dark"
}


Now you return:

{ count: 1 }


You are NOT saying:

“Replace everything with this.”

You are saying:

“Update only count, keep everything else the same.”


The returned object is:
A shallow partial update object for the store state

"The object returned to set is a “patch” for the store state".
(A patch is a small fix or change applied to something bigger, without replacing the whole thing)
*/

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
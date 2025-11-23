import React from 'react';

// Here we are learning about ERROR BOUNDARY.SO WE ARE MAKING A BUGGY COMPONENT.
// ERROR BOUNDARY IS NOTHING BUT NOT LETTING YOUR "WHOLE SITE" TO BE CRASHED IN CASE IF ANY COMPONENT WILL NOT WORK OR SOME ERROR HAPPENS.

function Buggy_Component(){

    throw new Error("I crashed!");

    return(
        <> 
         <h1>Hi there</h1>
        </>
    )

    // we have thrown an error inside this component.Because of this OUR WHOLE APP WILL CRASH but we can save our APP BY INCLUDING ERROR BOUNDARY COMPONENT.

    // ERROR BOUNDARY COMPONENT IS ONLY AVAILABLE FOR "CLASS BASED COMPONENT ONLY".
}


// LAST TOPIC WAS FRAGMENTS IN THE LAST CLASS.

export default Buggy_Component;


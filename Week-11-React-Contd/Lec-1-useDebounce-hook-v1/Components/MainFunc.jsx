function MainCallingFunc(){
    fetch('amazon.com/api/search')
    .then((data)=>{
        return data.json()
    })
    .then((res)=>{
        return res;
    })
}

export default MainCallingFunc;
// this is the main CALLING FUNCTION which serves the request requested by the client.BECAUSE WE DONT WANT THAT THIS FUNCTION WILL BE CALLED SO FREQUENTLY WE USE DEBOUNCE.WHEN A USER FINISHES HIS/HER TYPING IN SEARCH BAR THEN WE WILL CALL THIS FUNCTION.IF THERE WE WILL BE SPECIFIED TIME GAP BETWEEN USER TYPING THEN AUTOMATICALLY REACT WILL THE CALL THIS FUNCTION.
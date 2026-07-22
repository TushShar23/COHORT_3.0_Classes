// how we can use TS in react 

interface ChaiCardProp{
    name: string,
    price: number,
    isSpecial?: boolean
}

// now there is a variable whose type is CHAICARDPROP and it contains the properties same as the GIVEN TYPE
export const ChaiCard = ( Card : ChaiCardProp)=>{
    return(
        <div>
            <article>
                <h2>{Card.name} {Card.isSpecial && "⭐"}</h2>
                <p>{Card.price}</p>
            </article>
        </div>
    )
  
}
import React from 'react'




const imgstyle = {
    width:"80px",
    borderRadius:"50%",
    padding:"20px 10px",
}

const detailsdiv = {
    display:"flex",
    fontSize:"17px",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"0.3rem",
    // border:"2px solid green",
    padding:"2px 5px",
    height:"50px"

}

const timediv = {
    display:"flex",
    // flexDirection:"row"
    justifyContent:"center",
    alignItems:"center",
    gap:"0.6rem",
    fontSize:"15px",
    // border:"2px solid green",
    padding:"1px 2.5px"
}



function Card({imageSource = "https://pbs.twimg.com/profile_images/1955359038532653056/OSHY3ewP_400x400.jpg",name="Anon",username="anonymous",subtitle,time,maincontent}) {
    // if there is no image provided then default IMAGE IS X.COM image and default NAME is "ANON"
  return (
    <div style={{width:"400px",height:"400px",display:"flex",flexDirection:"column",backgroundColor:"white",color:"black",borderRadius:"2rem",boxSizing:"border-box",alignItems:"center",gap:"1rem"}}>
        {/* first element = image */}
        <img src={imageSource} alt="img"  style={imgstyle}/>

        {/* second element = names box */}
        <div>
            <div className="details" style={{display:"flex",justifyContent:"center",alignItems:"flex-start", flexDirection:"column"}}>
                <div className="names" style={detailsdiv}>
                    <h3>{name}</h3>
                    <h3 style={{fontWeight:"500",marginRight:"3rem"}}>{username}</h3>


                    {/* Here comes the conditional rendering part.If let say our post component is not showing ANY USER then there is no need to show the clock image and time.SO THIS WE WILL HANDLE USING CONDITIONAL RENDERING */}
                    {time !== undefined && <div><i class="ri-time-line" style={timediv}><h3>{time}</h3></i></div>}
                </div>
                <p style={{marginTop:"-1rem",marginLeft:"0.5rem"}}>{subtitle}</p>
                {/* <div>
                </div> */}
            </div>
        </div>
        <div style={{fontSize:"25px",padding:"0.4rem",fontWeight:"600"}}>
            <p>{maincontent}</p>
        </div>
    </div>

    // This is  a very naive example in which we have seen CONDITIONAL RENDERING,
  )
}

export default Card
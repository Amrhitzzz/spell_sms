import React from 'react';
let bodycontent = "Reach More Customers With Faster, More Reliable SMS Messaging"
let bodybutton = "Contact with us"

function Body() {
    return (
        <div className ="home_body">
           <div className ="home_body_content">
               <p> { bodycontent } </p>
               <button> { bodybutton } </button>
           </div>

           <div className ="home_body_img">
               <img alt="bodyimg" />
           </div>
        </div>
    )
}

export default Body;

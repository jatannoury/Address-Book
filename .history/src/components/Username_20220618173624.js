import React, { useState, useEffect }from 'react';
import { AiOutlineUser } from "react-icons/ai";

const Username = ({setEmail,email}) => {
  
  return (
    <div className="user">
              <h1 className="icon"><AiOutlineUser /></h1>
              <input type="text" id="username" name="username" onChange={(e)=>{
                setEmail(e.target.value)
                }}/>
    </div>
  )
}

export default Username;
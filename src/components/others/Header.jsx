import React from "react";

const Header = ()=>{
    return (
        <div className="flex items-end justify-between font-medium text-white text-xl">
            <h1> Hello <br/> <span className="text-3xl font-semibold">Aman 👋</span>  </h1>
            <button className="text-white bg-red-500 rounded-sm font-medium px-2 py-2"> Logout </button>
        </div>
        
    )
}

export default Header
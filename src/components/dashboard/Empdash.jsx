import React from "react";
import Header from "../others/Header";
import TaskllistNumber from "../others/TasklistNumber";
import Tasklist from "../Tasklist/Tasklist";

const Empdash=()=>{

    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">
           <Header/>
           <TaskllistNumber/>
           <Tasklist/>
        </div>
    )

}

export default Empdash
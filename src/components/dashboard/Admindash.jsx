import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import Alltask from "../others/Alltask";

const Admindash = () => {
    return (
        <div className="h-screen w-full bg-black  p-7">
            <Header />
            <CreateTask/>
            <Alltask/>

        </div>

    )
}

export default Admindash
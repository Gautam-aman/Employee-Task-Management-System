import React from "react";

const TaskllistNumber =()=>{

    return (
        <div className=" flex mt-10 screen justify-between gap-5">
            <div className="py-6 px-9 rounded-xl w-[45%] bg-red-400 ">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="py-6 px-9 rounded-xl w-[45%] bg-blue-400 ">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="py-6 px-9 rounded-xl w-[45%] bg-green-400 ">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="py-6 px-9 rounded-xl w-[45%] bg-gray-400 ">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>

        </div>
         
    )

}

export default TaskllistNumber
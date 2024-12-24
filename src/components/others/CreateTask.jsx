import React from "react";

const CreateTask = ()=>{

    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form className="flex w-full flex-wrap  items-start justify-between ">
                    <div className="w-1/2">
                    
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                        <input className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" placeholder="Enter Task" type="text" />
                    </div>
                    <div className="pb-3">
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input className="text-sm  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400" type="date"/>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                        <input className="text-sm py-1 px-2 w-4/5 text-white rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Input Name"></input>
                    </div>
                    <div className="w-60">
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
                    </div>
                   
                    </div>
                   
                    <div className="w-1/2">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea className="text-sm py-1 px-2 w-4/5 text-white rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" rows={10} cols={30} placeholder="Describe Task" type="text" />
                    </div>
                    
                </form>
            </div>
    )

}

export default CreateTask
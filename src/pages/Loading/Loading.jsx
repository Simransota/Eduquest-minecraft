import React from 'react'
import duck from "../../assets/loading.gif"
function Loading() {
    return (
        <>
        <div className="flex justify-center items-center h-screen ">
            <h1>Loading...</h1>
            <img src={duck} alt="" className=''/>
            {/* Content of the centered div */}
        </div>
        </>
    )
}

export default Loading

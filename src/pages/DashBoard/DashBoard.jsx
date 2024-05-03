import React from 'react'
import BasicDateCalendar from '../../components/BasicDateCalendar'
import flyingheroes from "../../assets/flyingheroes.avif"
import Graph from '../../components/Graph.jsx'
import TestTable from '../../components/TestTable.jsx'
import Sidebar from '../../components/Sidebar.jsx'
function DashBoard() {
    return (
        <div className='bg-black'>

        <Sidebar/>
        <div className='absolute border-solid border-2 border-indigo-100  rounded-xl  w-[100vh] h-52 left-[13em] m-11'>
        {/* <div className='m-2 flex justify-center items-center text-2xl'>Hello Simran</div>
        <img src={flyingheroes} alt="" /> */}
        </div>
        <div className='w-[130vh] h-52 absolute top-[20em] ml-11'>
            {/* <Todo/> */}
            <TestTable/>
        </div>
        <div className='absolute left-[55em] top-10 border-solid border-2 rounded-xl border-indigo-100'>
        <BasicDateCalendar/>
        </div>
        <div className='w-[20em] h-52 absolute left-[55em] top-[25em] border-solid border-2 rounded-xl border-indigo-100'>
            <Graph/>
        </div>
        </div>
        
    
    )
}

export default DashBoard

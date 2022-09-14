import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function Table1() 
{
    const [launches,setLaunches]=useState([])
    useEffect(()=>{
        axios.get("https://api.spacexdata.com/v3/launches").then(res=>{console.log(res.data)
    setLaunches(res.data)
    })
    },[])
  return (
    <div>
        <table className="table">
            <thead>
            <tr className='tr'>
                <th>mission_name</th>
                <th>launch_year</th>
            </tr>
            </thead>
            <tbody>
            {
                   launches && launches.length>0 && launches.map((l)=>
                    {
                        return (<tr key={l.flight_number}><td className='content'>{l.mission_name}</td><td>{l.launch_year}</td></tr>)
                    }) 
            }
            </tbody>


     </table>
     
    </div>
  )
}

export default Table1;
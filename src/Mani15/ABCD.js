import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ABCD.css'
export default function ABCD() {
  let [data,setData]= useState([]);
  useEffect(()=>{
    getData();
  },[])
  

 function getData(){
    axios.get(
      "https://ixonotest.herokuapp.com/api/User/get-profiles"
    ).then((response)=>{

      setData([...response.data])
      console.log(data  )
    }).catch((error)=>{
      console.log(error);
    })
  }
function clear(){
  setData([])
}
  return (
    <div>
   <button onClick={clear}  className='button1'>Clear Screen</button>
    <button onClick={getData} className='button2'>Show Items</button>
    
    <table>
      <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>User </th>
        <th>MobileNumber</th>
      </tr>
      </thead>
      <tbody>
        {
          
          data.map((row)=>
            (
            <tr>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.username}</td>
              <td>{row.mobileNum}</td>

            </tr>)
          )
        }
      </tbody>
    </table>

    </div>
)
}
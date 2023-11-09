import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteVideoHistory, getallHistory } from '../services/allAPI';
function WatchHistory() {

  const[history , setHistory] = useState([])

  const allHistory = async()=>{
  const {data} =  await getallHistory()
  // console.log(data);
  setHistory(data)
  }
 // console.log(history);

 // function to remove history
 const removehistory = async(id)=>{
  await deleteVideoHistory(id)
  //to get the remaining history
 allHistory()
 }
 
  useEffect(()=>{
    allHistory()
  },[])
  return (
<>
    <div className="container mt-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}><i class="fa-solid fa-arrow-left fa-beat me-2"></i> Back to Home</Link>
    </div>
    <Table className='table mb-5 mt-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>CAPTION</th>

          <th>URL</th>

          <th>TIME STAMB</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        
       {history.length>0?
        history.map((item,index)=>( 
          <tr> <td>{index+1}</td>
        <td>{item.caption}</td>
        <td><a href={`${item.embedLink}?autoplay=1`}target='blank'>{item.embedLink}</a></td>
        <td>{item.timestamp}</td>
        <td><button onClick={()=>removehistory(item?.id)} className='btn btn-danger '><i class="fa-solid fa-trash"></i></button></td> 
        </tr>))
         :
         <p>Nothing to Watch Here</p>
          }
          
       
      </tbody>
    </Table>
  </>
  )
}

export default WatchHistory
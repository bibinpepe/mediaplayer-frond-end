import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'
import Videocard from './Videocard'




function View({UploadVideoStatus}) {
  const [allVideos , setAllVideos] = useState([])
  const [DeleteVideoStatus,setDeleteVideoStatus]= useState(false)
  const getAllUploadedVideos = async()=>{
    const response =await getAllVideos()
    const {data}=response
    setAllVideos(data)
  }
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[UploadVideoStatus,DeleteVideoStatus])
  return (
    
<>
<Row>
  { allVideos.length>0?
   allVideos.map((Videos)=>( <Col sm={12} md={6} lg={4} xl={3}>
    <Videocard displayVideo ={Videos} setDeleteVideoStatus={setDeleteVideoStatus}/>
  </Col>))
  :
  <p>Nothing to display</p>
}
</Row>
</>
    
  )
}

export default View
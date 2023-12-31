import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addtohistory, deleteVideo } from '../services/allAPI';
function Videocard({displayVideo, setDeleteVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{   setShow(true)
    const {caption,embedLink} = displayVideo
    let today = new Date()
    console.log(today);
    let timestamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);

    let videoDetails ={caption , embedLink ,timestamp}
    await addtohistory(videoDetails)
  
  }

  const removevideo = async(id)=>{
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
  }
  //function to drag videocard
  const cardDrag = (e,id)=>{
    console.log(`The ${id}  of Videocard  is dragged`);
    e.dataTransfer.setData("VideoId",id)
  }

  return (
   <>
    <div className='mt-3'>
        
  <Card style={{ width: '100%' ,height:"380px" }} className='mb-3' draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)}>
      <Card.Img height={"280px"} variant="top" src={displayVideo.url} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5>{displayVideo.caption}</h5>
        </Card.Title>
        <button onClick={()=>removevideo(displayVideo?.id)} className='btn btn-danger '><i class="fa-solid fa-trash"></i></button>
      
      </Card.Body>
    </Card>
    <Modal className='bg-' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
              </Modal>
    </div>
    
   </> 
   
  )
}

export default Videocard
import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Landingpage() {
  const navigatebyurl = useNavigate()
  return (
    <>
    <Row>
      <Col></Col>
      <Col lg={5}>
        <h2 className='mt-5'>Welcome to <span className='text-warning'>Media Player</span></h2>
        <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusantium quo sunt, in mollitia totam, modi cupiditate aliquid fuga voluptate reprehenderit perspiciatis suscipit tenetur. Dolorem ducimus laboriosam labore sunt aspernatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus praesentium qui dolor obcaecati! Temporibus, possimus asperiores doloremque officiis unde autem ex natus labore illum velit sunt alias quasi veritatis deleniti.\</p>
        <button onClick={()=>navigatebyurl("/Home")} className='btn btn-warning mt-4'>Get started <i class="fa-solid fa-arrow-right ms-2"></i></button>
        
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img className='mt-3  rounded' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" style={{height:"400px",width:"400px"}} />
      </Col>
    </Row>

<div className="container d-flex justify-content-center align-items-center w-100 mt- mb-5 flex-column">
  <h3 className='mb-5'>Features</h3>
  <div className="d-flex justify-content-evenly align-items-center">

  <Card className='cards cards-p-4' style={{ width: '18rem' ,margin:'20px'}}>
      <Card.Img style={{width:"100%", height:"300px"}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cards cards-p-4' style={{ width: '18rem',margin:'20px' }}>
      <Card.Img style={{width:"100%", height:"300px"}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='cards cards-p-4' style={{ width: '18rem',margin:'20px' }}>
      <Card.Img style={{width:"100%", height:"300px"}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>

<div className="container border border-2 rounded border-secodary p-5 mt-5 mb-5">
  <Row>
    <Col lg={6}>
      <h3 className='Warning'>Simple,Fast & Powerful</h3>    
      <p><span className='fs-5 fw-border'>Play Everything</span>: amet, consectetur adipisicing elit. Exercitationem rerum beatae eum reprehenderit culpa saepe sint quae aut dolorum corporis. Culpa molestias quos quo quae</p>  
      <p><span className='fs-5 fw-border'>Play Everything</span>: amet, consectetur adipisicing elit. Exercitationem rerum beatae eum reprehenderit culpa saepe sint quae aut dolorum corporis. Culpa molestias quos quo quae</p> 
      <p><span className='fs-5 fw-border'>Play Everything</span>: amet, consectetur adipisicing elit. Exercitationem rerum beatae eum reprehenderit culpa saepe sint quae aut dolorum corporis. Culpa molestias quos quo quae</p> 
      </Col> 
    <Col></Col>
    <Col lg={5}>
    <iframe width="100%" height="400" src="https://www.youtube.com/embed/7PIji8OubXU" title="Best of Dolby Vision 12K HDR 120fps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Col>
  </Row>
</div>
    </>
  )
}

export default Landingpage
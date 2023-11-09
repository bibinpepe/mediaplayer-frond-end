import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addAllCategory, deleteCategory, getAVideo, getAllcategories, updateCategory } from '../services/allAPI';
import Videocard from './Videocard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Category() {
  const [categoryName , setcategoryName] = useState("")
  const [category,setcategory] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  // function to add category
  const addtoCategory = async()=>{
    console.log(categoryName);


    if(categoryName){
      let body = {
        categoryName,
        allVideos:[]
      }
      const response = await addAllCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category added successfully')
        setcategoryName("")
        handleClose()
        allcategory()
      }
      else{
        toast.error(`Something went Wrong,Please Try Again Later`)
      }
     }
     else{
      toast.warning('Please Enter Category')
     }
  }
  // function to get categories
  const allcategory = async()=>{
    const {data} = await getAllcategories()
    setcategory(data)
  }
  useEffect(()=>{
    allcategory()
  },[])
const deleteAcategory = async(id)=>{
await deleteCategory(id)
allcategory()
}
//function to prevent 
const dragOver = (e)=>{
  e.preventDefault()
}

const VideoDrop = async(e,categoryId)=>{
  console.log(`dropped on category id ${categoryId}`);
  let videoid = e.dataTransfer.getData("VideoId")
  console.log(videoid);
  const {data} = await getAVideo(videoid)
  console.log(data);
  const selectedCategory = category.find(item=>item.id===categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  await updateCategory(categoryId,selectedCategory)
  allcategory()
}
  return (
    <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
      </div>
      {category?.length>0?
      category.map((item)=>(<div className='mt-5 border border-secondary p-3 m-5 rounded '>
      <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>VideoDrop(e,item?.id)}>
        <h6>{item.categoryName}</h6>
        <button onClick={()=>deleteAcategory(item?.id)} className='btn btn-danger '><i class="fa-solid fa-trash"></i></button>
      </div>
      <Row>
        <Col>
        {item?.allVideos?.length > 0?
        item.allVideos?.map(card=>(<Videocard displayVideo={card}/>))
      :<p>Nothing toi Display</p>
      }
        </Col>
      </Row>
    </div>))
    :
    <p>Nothing to See Here</p>
    }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="border border-secondary p-3 rounded">
      
     
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setcategoryName(e.target.value)}/>
    
     

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addtoCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default Category
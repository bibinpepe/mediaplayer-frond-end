import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{ width: "100%", height: "300px" }} className='d-flex justify-content-center align-items-center flex-column w-100 mt-5'>
      <div className="footer d-flex justify-content-evenly align-items-center w-100">
        <div className="website" style={{ width: "400px"}}>
          <h4  class="text-warning">
            <i class="fa-solid fa-video fa-warning text-warning"></i>{' '}
            Video Player
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam autem tenetur dolorum voluptas ipsam doloribus a exercitationem maxime, id dicta suscipit veniam perferendis est, eius ab, minima sint amet?</p>
         
        </div>
        <div className="links d-flex flex-column">
          <h3>Links</h3>
          <Link></Link>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landingpage</Link>
          <Link to={'/Home'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
          <Link to={'/watch-history'} style={{ textDecoration: 'none', color: 'white' }}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h3>Guides</h3>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>Bootswatch</Link>
        </div>
        <div className="contacts">
          <h4>Contact Us</h4>
          <div className="d-flex mb-4">
            <input type="text" className='form-control' placeholder='Enter your email' />
            <button className='btn btn-warning text-white ms-2'>subscribe</button>
          </div>
          <div className="icons d-flex justify-content-evenly">
            <Link to={''} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link to={''} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={''} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>

      </div>
      <p>Copyright @ 2023 Media Player. Built with React.</p>

    </div>


  )
}

export default Footer
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSort, faAdd, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import movie from '../Components/card1.jpg'


const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
  {/* <!-- Content --> */}
  <div id="content">
    <nav className="navbar navbar-dark" style={{background: '#000', padding: '20px'}}>
      <div className="container">
        <ul className="nav navbar-nav navbar-right">
          <h3 style={{fontSize: '24px', color: 'white'}}>Welcome User!!</h3>
        </ul>

        <div className='col-3'>
        <Button style={{background: 'white', color: 'darkred', border: 'none'}} variant="primary" className='btn-small' onClick={handleShow}>
            Add Movie
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type="text" placeholder="Genre" />
      <br />
        <Form.Control type="text" placeholder="Plot" />
      <br />
      <Form.Control type="text" placeholder="Release Date" />
      <br />
      <Form.Control type="text" placeholder="Ratings" />
      <br />
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Notes ABout Movie:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </div>

      </div>
    </nav>
    <div className="container">
    <div id='search-area'>
    
         {/* SEARCH AREA  */}

      <div className='row m-0 pt-5 d-flex justify-content-center'>
        <div className='col-9'>
        <div class="">
        <div class="">
          {/* <input type="search" style={{width: '',}} id="form1" class="form-control" placeholder='Search Movies...' />
        </div> 
        </div> */}
    </div>
    </div>

         {/* SORT AREA  */}
<div className='row m-0 pt-4  d-flex justify-content-center'>

<div className='col-3'>

<Button style={{background: 'darkred', border: 'none'}}>
  All
</Button>
  </div>

<div className='col-3'>

      <Button style={{background: 'darkred', border: 'none'}}>
        Name
      </Button>
        </div>

        <div className='col-3'>
        <Button style={{background: 'darkred', border: 'none'}}>
          Rating
        </Button>
        </div>

        <div className='col-3'>
      <Button style={{background: 'darkred', border: 'none'}}>
        Release Date
      </Button>
        </div>

       
    
</div>


</div>




<div className="container mt-5">
	<h2 className="text-center pb-4">Favourite Movies...</h2>
	<div className="row justify-content-center">

		<div className="card movie_card">
 <img src={movie} className="card-img-top" alt="..." />
		  <div className="card-body">
		  	<i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	<FontAwesomeIcon icon={faPlay} ></FontAwesomeIcon>
        </i>
		    <h5 className="card-title">POKEMON Detective Pikachu</h5>
		   		<span className="movie_info">2019</span>
		   		<span style={{float: 'right'}} className="movie_info"><i className="fas fa-star"></i><FontAwesomeIcon style={{color: 'gold'}} icon={faStar} /> 9 / 10</span>		  </div>
		</div>

				<div className="card movie_card">
 <img src={movie} className="card-img-top" alt="..." />
		  <div className="card-body">
		  	<i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
        <FontAwesomeIcon icon={faPlay} ></FontAwesomeIcon> 
      	</i>
		    <h5 className="card-title">Toy Story 4</h5>
		   		<span className="movie_info">2019</span>
		   		<span style={{float: 'right'}} className="movie_info"><i className="fas fa-star"></i><FontAwesomeIcon style={{color: 'gold'}} icon={faStar} /> 9 / 10</span>		  </div>
		</div>

				<div className="card movie_card">
        <img src={movie} className="card-img-top" alt="..." />
		  <div className="card-body">
		  	<i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		    <FontAwesomeIcon icon={faPlay} ></FontAwesomeIcon> 
      	</i>
		    <h5 className="card-title">Captain Marvel</h5>
		   		<span className="movie_info">2019</span>
		   		<span style={{float: 'right'}} className="movie_info"><i className="fas fa-star"></i><FontAwesomeIcon style={{color: 'gold'}} icon={faStar} /> 9 / 10</span>		  </div>
		</div>

				<div className="card movie_card">
        <img src={movie} className="card-img-top" alt="..." />
		  <div className="card-body">
		  	<i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	  <FontAwesomeIcon icon={faPlay} ></FontAwesomeIcon> 
        </i>
		    <h5 className="card-title">Spider-Man: Far From Home</h5>
		   		<span className="movie_info">2019</span>
		   		<span style={{float: 'right'}} className="movie_info"><i className="fas fa-star"></i><FontAwesomeIcon style={{color: 'gold'}} icon={faStar} /> 9 / 10</span>		  </div>
		</div>

				<div className="card movie_card">
        <img src={movie} className="card-img-top" alt="..." />
		  <div className="card-body">
		  	<i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		    <FontAwesomeIcon icon={faPlay} ></FontAwesomeIcon> 
      	</i>
		    <h5 className="card-title">Alita: Battle Angel</h5>
		   		<span className="movie_info">2019</span>
		   		<span style={{float: 'right'}} className="movie_info"><i className="fas fa-star"></i><FontAwesomeIcon style={{color: 'gold'}} icon={faStar} /> 9 / 10</span>
		  </div>
		</div>

				<div className="card movie_card">
		  <img src={movie} className="card-img-top" alt="..." />
		  <div className="card-body">
		  	<i className="play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	  <FontAwesomeIcon icon={faPlay} ></FontAwesomeIcon> 
        </i>
		    <h5 className="card-title">Spider-Man: Into the Spider-Verse</h5>
		   		<span className="movie_info">2019</span>
		   		<span style={{float: 'right'}} className="movie_info"><i className="fas fa-star"></i><FontAwesomeIcon style={{color: 'gold'}} icon={faStar} /> 9 / 10</span>		  </div>
		</div>

		

	</div>
</div>

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>


    </div>
  </div>

    </div>
  )
}

export default Home

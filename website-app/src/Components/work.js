import React from 'react';
import {Card} from 'react-bootstrap';
import "../styles/work.css";
function Work() {
  return (
    <div className="work">
     <h3 className='text-center m-5 text-white'>Work we've Done So Far</h3>
  <div className='row mx-auto'>
  <div className='col-sm-3 ml-4'>
  <Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1496093044462-e7ee398276c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title className='text-center'>Your Dinnings</Card.Title>
  </Card.Body>
</Card>
</div>
<div className='col-sm-3 mx-auto'>
<Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1562184552-997c461abbe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
  <Card.Body>
    <Card.Title className='text-center'>Work Areas</Card.Title>
  </Card.Body>
</Card>
</div>
<div className='col-sm-3 ml-auto mr-4'>
<Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1553524810-47c06fe4462c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
  <Card.Body>
    <Card.Title className='text-center'>Bed Rooms</Card.Title>
  </Card.Body>
</Card>
      </div>
      <div className='col-sm-3 mt-5 ml-4'>
  <Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1542372533-4b345928c0a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" />
  <Card.Body>
    <Card.Title className='text-center'>Sitting Area</Card.Title>
  </Card.Body>
</Card>
</div>
<div className='col-sm-3 mt-5 mx-auto'>
<Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title className='text-center'>Living Rooms</Card.Title>
  </Card.Body>
</Card>
</div>
<div className='col-sm-3 mt-5 mr-4 ml-auto'>
<Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1505692433770-36f19f51681d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
  <Card.Body>
    <Card.Title className='text-center'>Guest Rooms</Card.Title>
  </Card.Body>
</Card>
      </div>
    </div>
    </div>
  );
}

export default Work;

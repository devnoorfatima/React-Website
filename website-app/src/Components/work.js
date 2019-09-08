import React from 'react';
import {Card} from 'react-bootstrap';
function Work() {
  return (
    <div className="work">
     <h3 className='text-center'>Work we've Done So Far</h3>
    <div className='row mx-auto'>
      <div className='col-sm-3 ml-4'>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className='col-sm-3 mx-auto'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="../1.jpeg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className='col-sm-3 ml-auto'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
      </div>
    </div>



    </div>
  );
}

export default Work;

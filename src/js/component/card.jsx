import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BSCard() {
  return (
    <Card className = "m-4 d-flex justify-content-start" style = {{ width: '12' }}>

      <Card.Img className= "w-25" src="https://thispersondoesnotexist.com/" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BSCard;
import React from 'react'
import Card from 'react-bootstrap/Card';

const Cart = ({data,page}) => {
  
  return (
    <div>

   
    <div className='cart'>
    <Card >
      <Card.Body>
      <Card.Img className='hart' variant="top" src={data.img} />
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        {data.description}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>


    </div>

    </div>
  )
}

export default Cart
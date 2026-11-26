import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const OurStory = () => {
  return (
    <Container fluid>
      <Row className='p-5 align-items-center bg-black text-white'>
        
        <Col>
    <h2>Our Story</h2>
<p>
            MovieNest was created from a passion for movies and entertainment. We believe everyone deserves an easy and enjoyable way to discover great films.
    
</p>
<p>
    From thrilling action adventures and captivating dramas to hilarious comedies and family-friendly animations, we bring different movie experiences closer to our audience.
    
</p>
<p>
    Whether you're planning a movie night with friends, a special date or a family outing, MovieNest makes your movie journey easier.
    
</p>        
        
        </Col>
        <Col><img src="/lin1.jpg" alt="" className='img-fluid'/></Col>
      </Row>
    </Container>


  )
}

export default OurStory
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const WhoWeAre = () => {
  return (
   <Container fluid>
      <Row className='p-5 align-items-center bg-white text-black'>
        <Col><img src="/kin1.png" alt="" className='img-fluid'/></Col>
        <Col>
        <h2>More Than Movies. It's an Experience.</h2>
        <p>
            Welcome to MovieNest, where great stories come alive and every movie experience becomes memorable.
    
        </p>
<p>
    We are a movie discovery and cinema booking platform designed to bring entertainment closer to everyone. From the latest blockbusters to upcoming releases, MovieNest makes it easy to explore movies, discover favourites and book cinema tickets.
    
</p>
<p>
    Our goal is to make every movie experience simple, exciting and enjoyable.
    
</p>

        </Col>
      </Row>
    </Container>
    



  )
}

export default WhoWeAre
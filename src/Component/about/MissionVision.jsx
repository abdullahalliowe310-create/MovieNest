
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MissionVision = () => {
  return (
    <Container fluid>
      <Row className='p-4 bg-white text-black'>

        <Col md={6} className='p-3'>
          <div className='d-flex align-items-center gap-3 border border-warning rounded p-3 shadow-sm'>

            <div className='mission-icon'>
              🎯
            </div>

            <div className='mission-line'></div>

            <div>
              <h4>Our Mission</h4>
              <p>
                To deliver exceptional cinema experiences by
                combining quality entertainment, excellent customer
                service, and a welcoming environment where everyone
                can enjoy the magic of movies.
              </p>
            </div>

          </div>
        </Col>

        <Col md={6} className='p-3 text-black'>
          <div className='d-flex align-items-center gap-3 border border-warning rounded p-3 shadow-sm'>

            <div className='mission-icon'>
              👁
            </div>

            <div className='mission-line'></div>

            <div>
              <h4>Our Vision</h4>
              <p>
                To become a leading cinema destination known for
                outstanding entertainment experiences, innovation,
                customer satisfaction, and a lasting connection
                with movie lovers.We aim to connect movie lovers with the films they love. 
              </p>
            </div>

          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default MissionVision

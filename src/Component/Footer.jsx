import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from 'react-bootstrap';
import mimi from '/mimi.jpg'
import Form from 'react-bootstrap/Form';

const Footer = () => {
  return (
    <div>
      <footer className='bg-black text-white' >
<Container fluid>

      <Row>

        <Col>
        <img src={mimi} alt="" />
        <p>Escape Reality, Enter the World of Cinema</p>
        <p>Your destination for unforgettable cinema experience. Discover the latest blockbusters, book your favourite seats, and enjoy entertainment across Nigeria</p>

        </Col>

        <Col>
        <h5>Quick Links</h5>
<Nav>
         <Nav.Link href="/">Home/Discovery</Nav.Link> 

          <Nav.Link href="/comingsoon">Coming Soon</Nav.Link>

           <Nav.Link href="/nowshowing">Now Showing</Nav.Link>

            <Nav.Link href="/badagry">Cinema Location</Nav.Link>

             <Nav.Link href="/showtime">Showtimes</Nav.Link>
</Nav>
        </Col>


        <Col>
<h5>Explore</h5>
<Nav>
<Nav.Link href="/foods">Food and Drinks</Nav.Link>
<Nav.Link href="/about">About us/info</Nav.Link>
<Nav.Link href="/contact">Contact us</Nav.Link>
<Nav.Link href="/account">My Account</Nav.Link>
<Nav.Link href="/Bookings">My bookings</Nav.Link>
</Nav>
        </Col>

        <Col>
        <h5>Support</h5>
        <Nav>
        <Nav.Link href="/helpcenter">Help Center/Services</Nav.Link>
<Nav.Link href="/FAQs">FAQs</Nav.Link>
<Nav.Link href="/Bookings">Booking Assistance</Nav.Link>
<Nav.Link href="/cancellation">Cancellation Policy</Nav.Link>
</Nav>
        </Col>

        <Col>
        <h5>Follow us</h5>
        <Nav>
        <Nav.Link href="https://www.facebook.com/filmoneng/" target='-blank'> <i class="fa-brands fa-facebook"></i>Facebook</Nav.Link> <br />
        
<Nav.Link href="https://www.instagram.com/filmoneng/" target='-blank'><i class="fa-brands fa-instagram"></i>Instagram</Nav.Link>
<Nav.Link href="/https://x.com/filmone" target='-blank'><i class="fa-brands fa-x-twitter"></i>X(Twitter)</Nav.Link>
<Nav.Link href="https://www.youtube.com/filmhouse" target='-blank'><i class="fa-brands fa-youtube"></i>Youtube</Nav.Link>
</Nav>
        </Col>
        
      

      </Row>

      <Row className='border-top border-secondary mt-5 py-4'>
        <Col>
        <h3>Stay Updated with MovieNest</h3>
        <p>Get the latest movie releases, exclusive offers and cinema updates delivered to Your inbox</p>
        </Col>
        <Col>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Button type='button' style={{backgroundColor: 'goldenrod', color: 'black', whiteSpace:'nowrap'}}>Subscribe</Button>
    </Form>
    
        </Col>
      </Row>

      <Row  className='border-top border-secondary mt-5 py-4'>
        <Col>&copy; {new Date().getFullYear()} MovieNest. All Rights Reserved.</Col>
      </Row>
    </Container>
      </footer>
    </div>
  )
}

export default Footer
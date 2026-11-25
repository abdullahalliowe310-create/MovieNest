import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src="/mili.jpg" alt="" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cinema">Cinemas</Nav.Link>
            <Nav.Link href="/showtime">Showtime</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link> 
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="nowshowing">Now showing</NavDropdown.Item>
              <NavDropdown.Item href="comingsoon">
                Coming Soon
              </NavDropdown.Item>
              
            </NavDropdown> 
             <button href="/Booking">Book Tickets</button>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
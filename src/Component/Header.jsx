import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/mili.jpg" alt="" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100" >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/link">Link</Nav.Link>
            <Nav.Link href="/movie">Movies</Nav.Link>
            <Nav.Link href="/movie details">Movie details</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>  
             <button>Book Tickets</button>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
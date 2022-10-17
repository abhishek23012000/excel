import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import contact from './Add'

function ColorSchemesExample() {
  return (
    <div>
      <div style={{margin:"0px"}} >

      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand >Focus with me</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/add">Pricing</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
        
      </div>
      
    </div>
  );
}

export default ColorSchemesExample;
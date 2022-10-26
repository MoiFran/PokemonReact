import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/pokeapi_256.3fa72200.png";

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className="mb-3">
      <Container fluid className=" m-auto">
        <Navbar.Brand href="#">
          <img src={Logo} style={{ width: 70, height: 30 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="https://pokeapi.co/" target="_blank">
              Api Info
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

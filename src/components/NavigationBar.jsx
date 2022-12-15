import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <>
        <section id="navbar">
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#F1F3FF'}}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src="./assets/img/binar.svg" alt="Binar Rental Car" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto me-4">
                    <Nav.Link className="fw-semibold px-1 px-sm-3" href="#service">Our Services</Nav.Link>
                    <Nav.Link className="fw-semibold px-1 px-sm-3" href="#why-us">Why Us</Nav.Link>
                    <Nav.Link className="fw-semibold px-1 px-sm-3" href="#testimonial">Testimonial</Nav.Link>
                    <Nav.Link className="fw-semibold px-1 px-sm-3" href="#faq">FAQ</Nav.Link>
                </Nav>
                <Button className="btn btn-banner fw-semibold ms-2">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </section>
        </>
    );
};

export default NavigationBar;

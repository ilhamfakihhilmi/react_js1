import { Nav, Container, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>Fakih Films</Navbar.Brand>
                <Nav>
                    <Nav.Link>TRENDING</Nav.Link>
                    <Nav.Link>SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;
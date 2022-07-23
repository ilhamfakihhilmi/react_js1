import { Nav, Container, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">Fakih Films</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;
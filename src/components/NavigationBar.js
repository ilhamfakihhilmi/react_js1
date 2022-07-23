import { Nav, Container, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar> 
            <Container>
                <Nav.Link>TRENDING</Nav.Link>
                <Nav.Link>SUPERHERO</Nav.Link>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;
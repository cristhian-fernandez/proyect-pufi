import styles from './Nav.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavHeader() {
    return (
        <Navbar className={styles.menu} expand="lg">
            {/* <Container > */}
            <div className={styles.menu_toggle}>
                <Navbar.Brand href="/" className={styles.logo}>Pufi</Navbar.Brand>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className={styles.menu_option}>
                            <span><i className="fa-solid fa-couch"></i></span>
                            <span className={styles.menu_item}>PUFI PUFF</span>
                        </Nav.Link>
                        <Nav.Link href="#" className={styles.menu_option}>
                            <span><i className="fa-solid fa-umbrella"></i></span>
                            <span className={styles.menu_item}>PUFI RAIN</span>
                        </Nav.Link>
                        <Nav.Link href="#" className={styles.menu_option}>
                            <span><i className="fa-solid fa-wallet"></i></span>
                            <span className={styles.menu_item}>PUFI CART</span>
                        </Nav.Link>
                        <Nav.Link href="#" className={styles.menu_option}>
                            <span><i className="fa-solid fa-suitcase"></i></span>
                            <span className={styles.menu_item}>PUFI NAP</span>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
            <div>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="me-auto">                         */}
                    <Nav className={styles.menu_account}>                        
                        <NavDropdown title="MI CUENTA" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Mi Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#">Favoritos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Cerrar Session
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">MI COMPRA</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            {/* </Container> */}
            </div>
        </Navbar>
    );
}

export default NavHeader;
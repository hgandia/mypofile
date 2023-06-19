import { useState } from 'react';
import styles from '../styles.module.css';
import { Nav, Navbar, NavLink, NavItem, NavbarToggler, Collapse } from 'reactstrap';

const Navigator = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Navbar>
            <NavbarToggler className={styles.toggler}/>
            <Nav> 
                <NavItem>
                    <NavLink className={styles.navigationFont}>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={styles.navigationFont}>
                        Projects
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={styles.navigationFont}>
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={styles.navigationFont}>
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Navigator;
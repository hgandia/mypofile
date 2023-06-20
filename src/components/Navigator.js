import { useState } from 'react';
import styles from '../styles.module.css';
import { Nav, Navbar, NavLink, NavItem, NavbarToggler, Collapse } from 'reactstrap';

const Navigator = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Navbar expand='md'>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav> 
                    <NavItem className={styles.navigationFont}>
                        <NavLink className='nav-link'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className={styles.navigationFont}>
                        <NavLink className='nav-link'>
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem className={styles.navigationFont}>
                        <NavLink className='nav-link'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem className={styles.navigationFont}>
                        <NavLink className='nav-link'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigator;
import { useState } from 'react';
import styles from '../styles.module.css';
import { Nav, Navbar, NavLink, NavItem, NavbarToggler, Collapse } from 'reactstrap';

const Navigator = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Navbar expand='md' >
            <NavbarToggler style={{ backgroundColor: '#FFF2CC'}} onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className={styles.navigationFont}> 
                    <NavItem className={styles.navigationFont}>
                        <NavLink style={{ color: '#FFF2CC'}}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className={styles.navigationFont}>
                        <NavLink style={{ color: '#FFF2CC'}}>
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem className={styles.navigationFont}>
                        <NavLink style={{ color: '#FFF2CC'}}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem className={styles.navigationFont}>
                        <NavLink style={{ color: '#FFF2CC'}}>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigator;
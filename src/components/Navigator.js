import { useState } from 'react';
import styles from '../styles.module.css';
import { Nav, Navbar, NavLink, NavItem, NavbarToggler, Collapse } from 'reactstrap';

const Navigator = (ref) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log('ref in Navigator: ', ref);
    return(
        <Navbar expand='md' >
            <NavbarToggler 
                style={{ backgroundColor: '#FFF2CC'}} 
                onClick={() => setIsOpen(!isOpen)} 
                className='me-1'
            />
            <Collapse isOpen={isOpen} navbar>
                <Nav className={styles.navigationFont} justified> 
                    <NavItem className={styles.navigationFont} >
                        <NavLink style={{ color: '#FFF2CC'}}
                            onClick={() => ref.current.scrollTo(1)}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className={styles.navigationFont}>
                        <NavLink style={{ color: '#FFF2CC'}}
                            onClick={() => ref.current.scrollTo(2)}
                        >
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
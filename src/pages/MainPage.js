import { Nav, Navbar, NavLink, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Logo from '../app/assets/HG1.gif';
import Slide1 from '../app/assets/cyberWeb.jpg';
import CircuitLine1 from '../app/assets/Slide1_Graphics.png';
import CircuitLine2 from '../app/assets/Slide2_Graphics.png';
import CircuitLine3 from '../app/assets/Slide3_Graphics.png';
import styles from '../styles.module.css';
import { Container, Row, Col } from 'reactstrap';
import { useRef, useState } from 'react';

const MainPage = () => {
    const ref = useRef();
    console.log('ref is: ', ref);
    const [isOpen, setIsOpen] = useState(false);
    
    return(
            <Parallax 
                pages={5} 
                ref={ref}  
                style={{
                    backgroundImage: `url(${Logo})`,  
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center'
                }}>
                    <ParallaxLayer 
                        offset={0} 
                        factor={0.5} 
                        speed={0.2}
                        style={{
                            maxHeight: '10%'                            
                        }} 
                    >
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
                                            onClick={() => ref.current.scrollTo(0)}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(1)}
                                        >
                                            Projects
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(2)}
                                        >
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(3)}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </ParallaxLayer> 
                    <ParallaxLayer
                        offset={1}
                        factor={1}
                        speed={0.5}
                        style={{
                            backgroundImage: `url(${Slide1})`,  
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat:'no-repeat',
                            maxHeight: ''
                        }} 
                    />      
                    <ParallaxLayer offset={1} speed={1.5}
                        style={{
                            backgroundImage: `url(${CircuitLine1})`,  
                            backgroundSize: '5%',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'right',
                            backgroundRepeat:'no-repeat'
                        }}
                    >
                        <Navbar expand='md' light>
                            <NavbarToggler 
                                style={{ backgroundColor: '#FFF2CC'}} 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='me-1'
                            />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className={styles.navigationFont} justified> 
                                    <NavItem className={styles.navigationFont} >
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(0)}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(1)}
                                        >
                                            Projects
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(2)}
                                        >
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(3)}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        <Container>
                            <Row>
                                <Col style={{ 
                                    fontWeight: 'bold', 
                                    marginTop: '440px',
                                    color: '#FFF2CC'
                                }}>
                                    
                                    <h2>This is a heading</h2>
                                    <p>This is a test for Parallax</p>
                                </Col>
                            </Row>
                        </Container>   
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2}
                        factor={1}
                        speed={-2.5}
                        style={{
                            backgroundImage: `url(${Slide1})`,  
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat:'no-repeat',
                            maxHeight: ''
                        }} 
                    />
                    <ParallaxLayer
                        offset={2}
                        factor={1}
                        style={{
                            backgroundImage: `url(${CircuitLine2})`,  
                            backgroundSize: '9.2%',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'right',
                            backgroundRepeat:'no-repeat'
                        }}
                    >
                        <Navbar expand='md' light>
                            <NavbarToggler 
                                style={{ backgroundColor: '#FFF2CC'}} 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='me-1'
                            />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className={styles.navigationFont} justified> 
                                    <NavItem className={styles.navigationFont} >
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(0)}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(1)}
                                        >
                                            Projects
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(2)}
                                        >
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(3)}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        <Container>
                            <Row>
                                <Col style={{ 
                                    fontWeight: 'bold', 
                                    marginTop: '500px',
                                    color: '#FFF2CC'
                                }}>
                                    <h2>This is the other heading</h2>
                                    <p>This is a test for Parallax</p>
                                </Col>
                            </Row>
                        </Container>
                    </ParallaxLayer>
                    <ParallaxLayer 
                        offset={3} 
                        factor={1} 
                        speed={3.3}
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(255,255,176,0.4), rgba(255,255,176,0.4))',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat:'no-repeat',
                            maxHeight: ''
                        }}
                    />
                    <ParallaxLayer 
                        offset={3} 
                        factor={1} 
                        speed={-3.3}
                        style={{
                            backgroundImage: `url(${CircuitLine3})`,  
                            backgroundSize: '18%',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'right',
                            backgroundRepeat:'no-repeat'
                        }}
                    >
                        <Navbar expand='md'>
                            <NavbarToggler 
                                style={{ backgroundColor: '#FFF2CC'}} 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='me-1'
                            />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className={styles.navigationFont} justified> 
                                    <NavItem className={styles.navigationFont} >
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(0)}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(1)}
                                        >
                                            Projects
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(2)}
                                        >
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#FFF2CC'}}
                                            onClick={() => ref.current.scrollTo(3)}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </ParallaxLayer>
            </Parallax>        
);
}

export default MainPage;
import { Nav, Navbar, NavLink, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ContactForm from '../components/ContactForm';
import Arrow from '../app/assets/SVG/Arrow.gif';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../app/assets/HG_Orbitron.gif';
import Slate3 from '../app/assets/graySlate.jpg';
import Viewpager from '../components/Viewpager';
import Slate1 from '../app/assets/Slate1.jpg';
import Galaxy from '../app/assets/Galaxy.jpg';
import AboutMe from '../components/AboutMe';
import styles from '../styles.module.css';
import { useRef, useState } from 'react';




const MainPage = () => {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    
    return(
            <Parallax 
                pages={5} 
                ref={ref}  
                style={{
                    backgroundImage: `url(${Logo})`,  
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
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
                        speed={0}
                        style={{
                            backgroundImage: `url(${Slate1})`,  
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat:'no-repeat'
                        }} 
                    />      
                    <ParallaxLayer 
                        offset={1} 
                        speed={1.4}
                        className={styles.circuit1}
                        style={{
                            backgroundSize: ''
                        }}>
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
                            <Row>
                                <Col>
                                    <h1 className={styles.projects}>PROJECTS</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    md='6' sm='10'
                                    className={styles.orbitronFont}
                                    style={{color: '#FFF2CC'}}>
                                    <h3 className={styles.h3_heading}>Welcome to the Projects Section!</h3>
                                    <Row className='mx-5'>
                                        <Col className='mx-5'>        
                                            <hr  className='mx-5'/>
                                        </Col>
                                    </Row>
                                    <p className={styles.projects_paragraph}>
                                        Here, I would like to share with you some of the exciting 
                                        projects I have been working on. These projects represent 
                                        my passion, expertise, and dedication to creating innovative 
                                        solutions. Please take a moment to explore the diverse range 
                                        of projects listed by going through the pictured animated carousel.
                                    </p>
                                    <p className={styles.projects_paragraph}>
                                        I have used multiple technologies to develop these projects. 
                                        From CSS frameworks like bootstrap to JavaScript libraries 
                                        like React.JS and Node.JS for back-end, to frameworks like Reactstrap, 
                                        Redux, React-Router, ReactSpring and Express.JS for back-end, to programming
                                        languages like JavaScript and Python. 
                                    </p>
                                    <p className={styles.projects_paragraph}>
                                        For an in-depth look at the source code please follow the 
                                        'Source Code' link that will take you to the respective github 
                                        repository.  For the app experience please click on the 'Live Demo'
                                        link underneath the app picture. 
                                    </p>
                                </Col>
                                <Col me='6'className={styles.container}>
                                    <Viewpager />
                                </Col> 
                            </Row>                           
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2}
                        factor={1}
                        speed={-2.5}
                        style={{
                            backgroundImage: `url(${Slate3})`,  
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat:'no-repeat'
                        }} 
                    />
                    <ParallaxLayer
                        offset={2}
                        factor={1}
                        speed={1.3}
                        className={styles.circuit2}
                        style={{
                           backgroundSize: ''
                        }}>
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
                            <Row>
                                <Col >
                                    <h1 className={styles.projects}>ABOUT ME</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                        md='6' sm='10'
                                        className={styles.orbitronFont}
                                        style={{color: '#FFF2CC'}}>
                                        <h3 className={styles.h3_heading}>My name is Herbert Gandía</h3>
                                        {/* <Row className='mx-5'>
                                            <Col className='mx-5'>        
                                                <hr  className='mx-5'/>
                                            </Col>
                                        </Row> */}
                                        <p className={styles.projects_paragraph}>
                                            Here, I would like to share with you some of the exciting 
                                            projects I have been working on. These projects represent 
                                            my passion, expertise, and dedication to creating innovative 
                                            solutions. Please take a moment to explore the diverse range 
                                            of projects listed by going through the pictured animated carousel.
                                        </p>
                                        <p className={styles.projects_paragraph}>
                                            I have used multiple technologies to develop these projects. 
                                            From CSS frameworks like bootstrap to JavaScript libraries 
                                            like React.JS and Node.JS for back-end, to frameworks like Reactstrap, 
                                            Redux, React-Router, ReactSpring and Express.JS for back-end, to programming
                                            languages like JavaScript and Python. 
                                        </p>
                                        <p className={styles.projects_paragraph}>
                                            For an in-depth look at the source code please follow the 
                                            'Source Code' link that will take you to the respective github 
                                            repository.  For the app experience please click on the 'Live Demo'
                                            link underneath the app picture. 
                                        </p>
                                        <Row>
                                            <Col>
                                                {/* <BoxSpread /> */}
                                            </Col>
                                        </Row>
                                    </Col>
                                <Col className={styles.orbitronFont}>
                                    <AboutMe />
                                </Col> 
                            </Row>
                    </ParallaxLayer>
                    <ParallaxLayer 
                        offset={3} 
                        factor={1} 
                        speed={3.3}
                        style={{
                           // backgroundImage: 'linear-gradient(rgba(255,255,176,1), rgba(255,255,176,1), rgba(0,0,0,1))',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat:'no-repeat',
                            maxHeight: '',
                            backgroundImage:`url(${Galaxy})`
                        }}
                    />
                    <ParallaxLayer 
                        offset={3} 
                        factor={1} 
                        speed={-3.3}
                        className={styles.circuit3}
                        style={{  
                            backgroundSize: ''
                        }}>
                        <Navbar expand='md'>
                            <NavbarToggler 
                                onClick={() => setIsOpen(!isOpen)} 
                                className='me-1'
                            />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className={styles.navigationFont} justified> 
                                    <NavItem className={styles.navigationFont} >
                                        <NavLink style={{ color: '#000000'}}
                                            onClick={() => ref.current.scrollTo(0)}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#000000'}}
                                            onClick={() => ref.current.scrollTo(1)}
                                        >
                                            Projects
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#000000'}}
                                            onClick={() => ref.current.scrollTo(2)}
                                        >
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className={styles.navigationFont}>
                                        <NavLink style={{ color: '#000000'}}
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
                                <Col className={styles.contactme}>
                                    <h1 className={styles.h1_heading}>Contact Me</h1>
                                    <p>~ For any questions or Inquiries please reach out ~</p></Col>
                            </Row>
                        </Container>
                            <Row>
                                <Col md='3' className={styles.finger} style={{marginTop: '-120px'}}>
                                    <img src={Arrow} alt='Arrow pointing to the right' />
                                </Col>
                                <Col md='9' 
                                    className={styles.contactform}
                                    style={{ marginTop: '70px'}}
                                     >
                                    <ContactForm />
                                </Col>
                            </Row>
                    </ParallaxLayer>
            </Parallax>        
);
}

export default MainPage;
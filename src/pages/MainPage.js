import { Nav, Navbar, NavLink, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import NavBack from '../app/assets/Slide2_Graphics_Horizontal.png';
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
        <>
            <Navbar expand='md' 
                    fixed='top'
                    className={styles.navback} 
                    style={{ backgroundImage: `url(${NavBack})` }}>
                <NavbarToggler 
                    style={{ backgroundColor: '#FFF2CC'}} 
                    onClick={() => setIsOpen(!isOpen)} 
                />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className={styles.navigationFont} justified> 
                        <NavItem className={styles.navigationFont}>
                            <NavLink style={{ color: '#FFF2CC', textShadow:'-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}
                                onClick={() => ref.current.scrollTo(0)} href='#'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className={styles.navigationFont}>
                            <NavLink style={{ color: '#FFF2CC', textShadow:'-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}}
                                onClick={() => ref.current.scrollTo(1)} href='#'>
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem className={styles.navigationFont}>
                            <NavLink style={{ color: '#FFF2CC', textShadow:'-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}}
                                onClick={() => ref.current.scrollTo(2)} href='#'>
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem className={styles.navigationFont}>
                            <NavLink style={{ color: '#FFF2CC', textShadow:'-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}}
                                onClick={() => ref.current.scrollTo(3)} href='#'>
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Parallax 
                pages={4} 
                ref={ref}  
                style={{
                    backgroundImage: `url(${Logo})`,  
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center'
                }}>
                    <ParallaxLayer
                        offset={1}
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
                        offset={1.06}
                        factor={1}
                        speed={1.3}
                        className={styles.circuit2}
                        style={{
                           backgroundSize: ''
                        }}>
                            <Row>
                                <Col >
                                    <h1 className={styles.projects}>ABOUT ME</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    md='12' lg='6'
                                    className={styles.orbitronFont}
                                    style={{color: '#FFF2CC'}}>
                                    <h3 className={styles.h3_heading}>Welcome to my Web Development Journey</h3>
                                    <p className={styles.aboutme_paragraph}>
                                        Greetings! I'm Herbert Gandia, a seasoned RF Engineer who has 
                                        recently embarked on an exciting transition into the world 
                                        of Full Stack Web Development. With 14 years of experience 
                                        in RF engineering, I've channeled my passion for problem-solving 
                                        and analytical thinking into the dynamic realm of coding.   
                                    </p>
                                    <h4 className={styles.h3_heading}>About Me</h4>
                                    <p className={styles.aboutme_paragraph}>
                                        As an RF Engineer, I've navigated the complexities of 
                                        designing, optimizing, and troubleshooting RF systems. 
                                        Now, after a year and a half of dedicated study and hands-on 
                                        projects, I'm thrilled to showcase my journey into the world 
                                        of web development.
                                    </p>
                                    <h4 className={styles.h3_heading}>Bridging the Gap</h4>
                                    <p className={styles.aboutme_paragraph}>
                                        What sets me apart is my unique ability to bridge the gap 
                                        between RF engineering and web development. My transition 
                                        is not just a shift in career; it's a fusion of analytical 
                                        thinking, technical acumen, and a relentless pursuit of excellence. 
                                        From tackling intricate technical challenges to crafting elegant 
                                        web solutions, my journey reflects a commitment to continuous 
                                        learning and adaptability.
                                    </p>
                                    <h4 className={styles.h3_heading}>What You'll Find Here</h4>
                                    <p className={styles.aboutme_paragraph}>
                                        Explore my portfolio to witness the seamless integration 
                                        of my engineering background with my newfound web development 
                                        skills. From responsive web applications to server-side 
                                        development, each project reflects my dedication to precision 
                                        and innovation.
                                    </p>
                                </Col>
                                <Col>
                                    <AboutMe />
                                </Col> 
                            </Row>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2}
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
                        offset={2.06} 
                        speed={1.4}
                        className={styles.circuit1}
                        style={{
                            backgroundSize: ''
                        }}>
                            <Row>
                                <Col>
                                    <h1 className={styles.projects}>PROJECTS</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    md='12' lg ='6'
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
                                        of projects listed by dragging the pictured animated carousel.
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
                                <Col>
                                    <Viewpager />
                                </Col> 
                            </Row>                           
                    </ParallaxLayer>
                    <ParallaxLayer 
                        offset={3} 
                        factor={1} 
                        speed={3.3}
                        style={{
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat:'no-repeat',
                            maxHeight: '',
                            backgroundImage:`url(${Galaxy})`
                        }}
                    />
                    <ParallaxLayer 
                        offset={3.06} 
                        factor={1} 
                        speed={-3.3}
                        className={styles.circuit3}
                        style={{  
                            backgroundSize: ''
                        }}>
                        <Container>
                            <Row>
                                <Col className={styles.contactme}>
                                    <h1 className={styles.h1_heading}>Contact Me</h1>
                                    <p className={styles.subTitle}>~ For any questions or Inquiries please reach out ~</p>
                                </Col>
                            </Row>
                        </Container>
                            <Row>
                                <Col md='3' lg='2' xl='3' className={styles.finger} style={{marginTop: '-120px'}}>
                                    <img src={Arrow} alt='Arrow pointing to the right' />
                                </Col>
                                <Col lg='10' xl='9' className={styles.contactform}>
                                    <ContactForm />
                                </Col>
                            </Row>
                    </ParallaxLayer>
            </Parallax>
        </>       
    );
}

export default MainPage;
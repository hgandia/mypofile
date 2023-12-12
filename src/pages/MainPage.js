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
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem className={styles.navigationFont}>
                            <NavLink style={{ color: '#FFF2CC', textShadow:'-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}}
                                onClick={() => ref.current.scrollTo(2)} href='#'>
                                About
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
                        offset={1.06} 
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
                                    md='12' lg ='6' xl='6'
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
                        offset={2.06}
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
                                        md='12' lg='6' xl='6' 
                                        className={styles.orbitronFont}
                                        style={{color: '#FFF2CC'}}>
                                        <h3 className={styles.h3_heading}>My name is Herbert Gandía</h3>
                                        <p className={styles.projects_paragraph}>
                                            I am an engineering professional with experience in RF engineering, 
                                            IC physical design and some software development.  I have worked in the
                                            semiconductor industry for two years and fourteen years in the wireless
                                            communications industry.  For the last year and a half, I have been
                                            studying and practicing full stack web development, where I would like to 
                                            embark in next.   
                                        </p>
                                        <p className={styles.projects_paragraph}>
                                            While my previous experience has been in RF Engineering, I am excited to 
                                            transition into the world of software development and have been working 
                                            diligently to acquire the necessary skills.
                                        </p>
                                        <p className={styles.projects_paragraph}>
                                            Throughout my career as an RF Engineer, I have honed my ability to 
                                            analyze complex problems, design efficient solutions, and collaborate 
                                            with cross-functional teams. These skills, along with my natural curiosity 
                                            and eagerness to learn, make me confident in my ability to thrive as a 
                                            software developer. 
                                        </p>
                                        <p className={styles.projects_paragraph}>
                                            I have invested significant time and effort in upskilling, learning 
                                            languages such as JavaScript, HTML, Python and CSS, as well as various 
                                            frameworks and tools, including React, Node.js, Express, and Git. 
                                            Additionally, I have completed several personal projects to gain practical
                                            experience.
                                        </p>
                                        <p className={styles.projects_paragraph}>
                                            I understand that transitioning to a new field can be a challenge, but I am 
                                            eager to embrace the challenge and bring my unique perspective and experience 
                                            to the team. I am confident that my skills and passion for software development 
                                            make me an excellent prospect.
                                        </p>
                                        <p className={styles.projects_paragraph}>
                                            Please look through the accordion to get a glimpse at my experience and 
                                            skillset.
                                        </p>
                                    </Col>
                                <Col>
                                    <AboutMe />
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
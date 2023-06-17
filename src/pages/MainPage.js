import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Slide1 from '../app/assets/Modern design/Slide1.JPG';
//import Slide2 from '../app/assets/Modern design/Slide2.JPG';
import bass from '../app/assets/bass.jpg';
import Intro from '../components/IntroSlab';
import UnderWater from '../app/assets/underWater.jpg';
import { Container, Row, Col } from 'reactstrap';
import { useRef } from 'react';

const MainPage = () => {
    const ref = useRef();
    
    return(
            <Parallax 
                pages={6} 
                ref={ref}  
                style={{
                    backgroundImage: `url(${Slide1})`,  
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat:'no-repeat'
                }}
            >
                    <ParallaxLayer 
                        offset={0} 
                        factor={1} 
                        speed={-1.8}
                        horizontal
                    >
                        <Intro />
                    </ParallaxLayer>        
                    <ParallaxLayer offset={1} speed={1.5}
                        style={{ 
                            backgroundColor: 'tan',  
                            backgroundSize: 'cover',
                            maxHeight: '20%'
                        }}
                    >
                        <Container>
                            <Row>
                                <Col style={{ 
                                    fontWeight: 'bold', 
                                    marginTop: '445px'
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
                            backgroundImage: `url(${bass})`,  
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
                    >
                        <Container>
                            <Row>
                                <Col style={{ 
                                    fontWeight: 'bold', 
                                    marginTop: '500px',
                                    color: '#FFFFFF'
                                }}>
                                    <h2>This is a heading</h2>
                                    <p>This is a test for Parallax</p>
                                </Col>
                            </Row>
                        </Container>
                    </ParallaxLayer>
                    <ParallaxLayer 
                        offset={2.2} horizontal
                        factor={2.3} 
                        speed={3.3}
                        style={{
                            backgroundImage: `url(${UnderWater})`,  
                            backgroundSize: '100%',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat:'no-repeat',
                            maxHeight: ''
                        }}
                    >
                                <Intro />
                    </ParallaxLayer>
            </Parallax>     
    
);
}

export default MainPage;
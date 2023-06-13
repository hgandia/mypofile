import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col } from 'reactstrap';
import Intro from '../components/IntroSlab';
import CircuitLine1 from '../app/assets/circuit_lines/blueCircuitLinesBlackBG/Slide1.JPG';
import CircuitLine2 from '../app/assets/circuit_lines/blueCircuitLinesBlackBG/Slide2.JPG';
import CircuitLine3 from '../app/assets/circuit_lines/blueCircuitLinesBlackBG/Slide3.JPG';


const MainPage = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <Parallax pages={6} style={{ top: '0', left: '0' }}>
                        <ParallaxLayer 
                            offset={0} 
                            factor={1.5} 
                            speed={0} 
                            style={{ backgroundImage: `url(${CircuitLine1})`,  backgroundSize: '100%' }} 
                        />

                        <ParallaxLayer offset={0.25} speed={0.8}>
                            <Intro />
                        </ParallaxLayer>

                        <ParallaxLayer 
                            offset={1} 
                            factor={2} 
                            speed={2} 
                            style={{ backgroundImage: `url(${CircuitLine2})`,  backgroundSize: '100%' }} 
                        />

                        <ParallaxLayer
                            offset={1.2}
                            factor={0.70}
                            speed={0.3}
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#0F6FC6',
                            fontSize: '55px'
                            }}>
                            <p><strong>PAGE 2</strong></p>
                        </ParallaxLayer>
                        <ParallaxLayer 
                            offset={2} 
                            factor={1} 
                            speed={-4} 
                            style={{ backgroundImage: `url(${CircuitLine3})`,  backgroundSize: '100%' }} 
                        />   

                        <ParallaxLayer
                            offset={2}
                            speed={-2}
                            factor={1}
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#0F6FC6',
                            fontSize: '55px'
                            }}>
                            <p><strong>PAGE 3</strong></p>
                        </ParallaxLayer> 
                        <ParallaxLayer 
                            offset={3} 
                            factor={2} 
                            speed={5} 
                            style={{ backgroundImage: `url(${CircuitLine3})`,  backgroundSize: '100%' }} 
                        />
                        <ParallaxLayer 
                            offset={3} 
                            speed={1} 
                            style={{ 
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '55px',
                                color: '#0F6FC6' 
                            }}
                        >
                        <p><strong>PAGE 4</strong></p>
                        </ParallaxLayer>
                    </Parallax>
                </Col>
            </Row>
        </Container>         
    );
}

export default MainPage;
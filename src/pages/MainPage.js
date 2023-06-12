import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col } from 'reactstrap';
import Intro from '../components/IntroSlab';
import heartOfTron from '../app/assets/heartOfTron.jpg';
import CircuitLine1 from '../app/assets/circuit_lines/Slide1.JPG';

const MainPage = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <Parallax pages={5} style={{ top: '0', left: '0' }}>
                        <ParallaxLayer 
                            offset={0} 
                            factor={1.5} 
                            speed={0} 
                            style={{ backgroundImage: `url(${CircuitLine1})`,  backgroundSize: '100%' }} 
                        />

                        <ParallaxLayer offset={0.25} speed={0.8}>
                            <Intro />
                            {/* <p style={{color: 'white'}}>Page 1</p> */}
                        </ParallaxLayer>

                        <ParallaxLayer 
                            offset={1} 
                            factor={2} 
                            speed={2} 
                            style={{ backgroundImage: `url(${heartOfTron})`,  backgroundSize: '100%' }} 
                        />

                        <ParallaxLayer
                            offset={1.2}
                            factor={0.70}
                            speed={0.5}
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            fontSize: '55px',
                            // backgroundImage: `url(${heartOfTron})`,
                            // backgroundSize: '100%'
                            }}>
                            <p><strong>PAGE 2</strong></p>
                        </ParallaxLayer>   

                        <ParallaxLayer
                            offset={2}
                            speed={-4}
                            factor={1}
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'black',
                            fontSize: '55px',
                            backgroundColor: '#FA8743'
                            }}>
                            <p><strong>PAGE 3</strong></p>
                        </ParallaxLayer> 
                        <ParallaxLayer 
                            offset={3} 
                            speed={2} 
                            style={{ 
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '55px',
                                color: '#7E0306', 
                                backgroundColor: '#FFDECD' 
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
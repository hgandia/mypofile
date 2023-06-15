import { Container, Row, Col } from 'reactstrap';
import herbie1 from '../app/assets/herbie1.JPG';


const Intro = () => {

    return(
         <Container>
            <Row style={{ marginTop: '300px'}}>
                <Col md='6'>
                    <p style={{
                        color: '#D1CEC5',
                        marginLeft: '0px',
                        marginTop: '0px',
                        font: '100px bold Bahnschrift Light SemiCondensed'
                        }}>Herbert Gandia
                    </p>
                    <p style={{
                        color: '#887E65',
                        marginTop: '0px',
                        marginLeft: '0px',
                        font: ' 30px bold Ariel'
                        }}>Full Stack Developer / RF Engineer
                    </p>
                </Col>
                <Col>
                    <img 
                        src={herbie1} alt='pic of green lion' 
                        style={{ 
                            width: '80%',  
                            height:'100%', 
                            marginTop: '0px',
                            marginLeft: '0px'
                        }}
                    />
                </Col>
            </Row>
         </Container>
        
    );

}
export default Intro;
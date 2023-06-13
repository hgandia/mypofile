import { Container, Row, Col } from 'reactstrap';
import greenLion from '../app/assets/greenLion.jpg';


const Intro = () => {

    return(
         <Container>
            <Row>
                <Col sm='6'>
                    <p style={{
                        color: '#0F6FC6',
                        marginLeft: '-50px',
                        marginTop: '90px',
                        font: '100px bold Bahnschrift Light SemiCondensed'
                        }}>Herbert Gandia</p>
                    <p style={{
                        color: '#0F6FC6',
                        marginTop: '20px',
                        marginLeft: '-60px',
                        font: ' 30px bold Ariel'
                        }}>Full Stack Developer / RF Engineer</p>
                </Col>
                <Col className='mx-right'>
                    <img 
                        src={greenLion} alt='pic of green lion' 
                        style={{ 
                            width: '100%',  
                            height:'100%', 
                            marginTop: '10px',
                            marginLeft: '200px'
                        }}
                    />
                </Col>

            </Row>
         </Container>
        
    );

}
export default Intro;
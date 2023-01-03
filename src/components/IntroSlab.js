import { Container, Row, Col } from 'reactstrap';
import SideSlab from './SideSlab.tsx';
import profilePic from '../app/assets/profilePicVintage.JPG';
import '../myStyling.css';

const Intro = () => {

    return(
          <Container>
            <Row>
                <Col md='6'>
                    <img src={profilePic} alt='Herbert' style={{ height: '977px', width: '977px' }} className='herbie' />
                </Col>
                <Col className='side_parallax'>
                    <SideSlab />
                </Col>
            </Row>
        </Container>
    );

}
export default Intro;
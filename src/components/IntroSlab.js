import { Row, Col } from 'reactstrap';
import SideSlab from './SideSlab.tsx';
//import profilePic from '../app/assets/profilePicVintage.JPG';
import '../myStyling.css';

const Intro = () => {

    return(
    
            <Row className='herbie'>
                {/* <Col  lg='6'>
                    <img src={profilePic} alt='Herbert' style={{ height: '975px', width: '975px' }} />
                </Col> */}
                <Col>
                    <SideSlab />
                </Col>
            </Row>
        
    );

}
export default Intro;
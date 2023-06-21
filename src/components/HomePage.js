import { Row, Col } from 'reactstrap';
import Navigator from './Navigator';

const HomePage = (ref) => {
    console.log('ref is: ', ref);
    const cssMenuRight = {
        display: 'flex',
        justifyContent: 'flex-start'
        
    }

    return(
            <Row>
                <Col style={cssMenuRight}>
                    <Navigator ref={ref}/>
                </Col>
            </Row>        
    );

}
export default HomePage;
import { Row, Col } from 'reactstrap';
import Navigator from './Navigator';


const HomePage = () => {
    const cssMenuRight = {
        display: 'flex',
        justifyContent: 'flex-end'
    }

    return(
            <Row >
                <Col style={cssMenuRight}>
                    <Navigator />
                </Col>
            </Row>        
    );

}
export default HomePage;
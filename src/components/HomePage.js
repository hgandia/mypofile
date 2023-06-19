import { Container, Row, Col } from 'reactstrap';
import Navigator from './Navigator';


const HomePage = () => {

    return(
         <Container>
            <Row>
                <Col>
                    <Navigator />
                </Col>
            </Row>
         </Container>
        
    );

}
export default HomePage;
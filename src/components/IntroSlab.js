import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import SideSlab from './SideSlab.tsx';
import profilePic from '../app/assets/profilePicVintage.JPG';

const Intro = () => {

    return(
         <Container>
            <Row>
                <Col md='4' style={{ alignSelf: 'left'}}>
                    <Card className='px-3' style={{backgroundColor:'black'}}>
                        <CardTitle>My Pic</CardTitle>
                        <CardImg src={profilePic} />
                        <CardBody>
                            <CardText>Hello!</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col style={{marginTop: '-180px'}}>
                    <SideSlab />
                </Col>
                
            </Row>
        </Container>
    );

}
export default Intro;
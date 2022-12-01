import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import profilePic from '../app/assets/profilePicVintage.JPG';

const Intro = () => {

    return(
        <Container>
            <Row>
                <Col md='4' className='mx-auto'>
                    <Card className='px-3' style={{backgroundColor:'black'}}>
                        <CardTitle>My Pic</CardTitle>
                        <CardImg src={profilePic} />
                        <CardBody>
                            <CardText>Hello!</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='mx-auto'>
                <p>Hello!</p>
                </Col>
            </Row>
        </Container>
    );

}
export default Intro;
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Intro from '../components/IntroSlab';
import heartOfTron from '../app/assets/heartOfTron.jpg';
// import Experience from '../components/ExperienceSlab';
// import Education from '../components/EducationSlab';
// import Hobbies from '../components/HobbiesSlab';


const MainPage = () => {

    return(
        <Parallax pages={5} style={{ top: '0', left: '0' }}>
            <ParallaxLayer offset={0} speed={2.5}>
                <Intro />
            </ParallaxLayer>

            <ParallaxLayer offset={1} factor={2} speed={2} style={{ backgroundImage: `url(${heartOfTron})`,  backgroundSize: '100%' }} />

            <ParallaxLayer
                offset={1}
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
    );
}

export default MainPage;
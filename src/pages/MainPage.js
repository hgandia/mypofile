import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import cyberWeb from '../app/assets/cyberWeb.jpg';
import heartOfTron from '../app/assets/heartOfTron.jpg';

const MainPage = () => {

    return(
        <Parallax pages={4} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                offset={0}
                speed={2.5}
                factor={2}
                style={{ 
                    color:'white',
                    fontSize: '55px',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundImage: `url(${cyberWeb})`,
                    backgroundSize: 'cover'
                }}
            >
                <p><strong>WELCOME TO THE BEGINNINGS OF MY PAGE</strong></p>
            </ParallaxLayer>

            {/* <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'steelblue' }} /> */}

            <ParallaxLayer
                offset={1}
                speed={0.5}
                factor={4}
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'TEAL',
                fontSize: '55px',
                backgroundImage: `url(${heartOfTron})`
                }}>
                <p><strong>THIS IS THE SECOND PAGE</strong></p>
            </ParallaxLayer>   

            <ParallaxLayer
                offset={2}
                speed={1.5}
                factor={4}
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'TEAL',
                fontSize: '55px',
                backgroundColor: 'steelblue'
                }}>
                <p><strong>THIS IS THE THIRD PAGE</strong></p>
            </ParallaxLayer>    
        </Parallax>       
    );
}

export default MainPage;
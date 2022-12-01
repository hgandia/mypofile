import { Parallax, ParallaxLayer } from '@react-spring/parallax'
//import heartOfTron from '../app/assets/heartOfTron.jpg';

const MainPage = () => {

    return(
        <Parallax pages={5} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{ 
                    color:'lightblue',
                    fontSize: '55px',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    // backgroundImage: "linear-gradient(#B68FA2, #333B3E, #3E555E, #586F77, #ACBCB1)"
                }}
            >
                <p><strong>WELCOME TO THE BEGINNINGS OF MY PAGE</strong></p>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

            <ParallaxLayer
                offset={1}
                factor={0.7}
                speed={0.5}
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '55px',
                // backgroundImage: `url(${heartOfTron})`
                }}>
                <p><strong>THIS IS THE SECOND PAGE</strong></p>
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
                backgroundColor: 'steelblue'
                }}>
                <p><strong>THIS IS THE THIRD PAGE</strong></p>
            </ParallaxLayer> 
            <ParallaxLayer 
                offset={3} 
                speed={2} 
                style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '55px',
                    color: 'white', 
                    backgroundColor: 'black' 
                }}
            >
            <p><strong>THIS IS THE FOURTH PAGE</strong></p>
            </ParallaxLayer>
        </Parallax>       
    );
}

export default MainPage;
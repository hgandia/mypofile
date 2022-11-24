import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const MainPage = () => {

    return(
        <Parallax pages={3} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p><strong>Scroll down</strong></p>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'steelblue' }} />

            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                }}>
                <p><strong>Scroll up</strong></p>
            </ParallaxLayer>       
        </Parallax>       
    );
}

export default MainPage;
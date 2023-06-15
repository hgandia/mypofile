import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Slide1 from '../app/assets/Modern design/Slide1.JPG';
import Slide2 from '../app/assets/Modern design/Slide2.JPG';
import herbie1 from '../app/assets/herbie1.JPG';
import Intro from '../components/IntroSlab';
import { useRef } from 'react';

const MainPage = () => {
    const ref = useRef();
    
    return(
    <div style={{ width: '100%', height: '100%'}}>
        <Parallax pages={8} enabled={true} ref={ref}>
    {/*------------------------Home Page--------------------------------------------------*/}
                <ParallaxLayer 
                    offset={0} 
                    factor={1} 
                    speed={0.5} 
                    style={{ 
                        backgroundImage: `url(${Slide1})`,  
                        backgroundSize: 'cover'
                    }} 
                >
                            <Intro />
                </ParallaxLayer>
    {/*------------------------Backdrop Image #1--------------------------------------------------*/}
                <ParallaxLayer 
                    offset={1}
                >
                    <img src={Slide2} alt='slide 2 pic' />
                </ParallaxLayer> 
    {/*------------------------Projects Page--------------------------------------------------*/}
                <ParallaxLayer 
                    offset={2} 
                    factor={1} 
                    speed={0.5} 
                    style={{ 
                        backgroundImage: `url(${Slide1})`,  
                        backgroundSize: 'cover'
                    }} 
                >
                            <Intro />
                </ParallaxLayer>
    {/*------------------------Backdrop Image #2--------------------------------------------------*/}
                <ParallaxLayer 
                    offset={3}
                >
                    <img src={Slide2} alt='slide 2 pic' />
                </ParallaxLayer>
    {/*------------------------About Page--------------------------------------------------*/}  
                <ParallaxLayer 
                    offset={4} 
                    factor={1} 
                    speed={0.5} 
                    style={{ 
                        backgroundImage: `url(${Slide1})`,  
                        backgroundSize: 'cover'
                    }} 
                >
                            <Intro />
                </ParallaxLayer>
    {/*------------------------Backdrop Image #3--------------------------------------------------*/}
                <ParallaxLayer 
                    offset={5}
                >
                    <img src={Slide2} alt='slide 2 pic' />
                </ParallaxLayer>
    {/*------------------------Contact Page--------------------------------------------------*/} 
                <ParallaxLayer 
                    offset={6} 
                    factor={1} 
                    speed={0.5} 
                    style={{ 
                        backgroundImage: `url(${Slide1})`,  
                        backgroundSize: 'cover'
                    }} 
                >
                            <Intro />
                </ParallaxLayer> 
    {/*------------------------Backdrop Image #4--------------------------------------------------*/}          
                <ParallaxLayer 
                    offset={7}
                >
                    <img src={herbie1} alt='slide 2 pic' />
                </ParallaxLayer>  
                    
        </Parallax>       
    </div>
);
}

export default MainPage;
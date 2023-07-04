import { useSprings, animated } from '@react-spring/web';
import edjWebsite from '../app/assets/edjWebsite1.jpg';
import Backend from '../app/assets/edjWebsiteBackend.png';
import Hangman from '../app/assets/Hangman1.jpg';
import Portfolio from '../app/assets/portfolioHome.jpg';
import { useDrag } from 'react-use-gesture';
import useMeasure from 'react-use-measure';
import styles from '../styles.module.css';
import clamp from 'lodash.clamp';
import { useRef } from 'react';

const pages = [
    edjWebsite,
    Backend,
    Hangman,
    Portfolio
];

const github = [
    'https://github.com/hgandia/edj-react', 
    'https://github.com/hgandia/edjServer', 
    'https://github.com/hgandia/Hangman', 
    'https://github.com/hgandia/myprofile'
];

const liveDemo = [
  'https://estrelladejacob.org/home', 
  'https://estrelladejacob.org/contactus', 
  '', 
  ''
];

const pagesText = ['Church Front-end App', 'Church Back-end Server', 'Hangman - Terminal Game', 'Portfolio Page', 'Node.JS'];

function Viewpager() {
  const index = useRef(0);
  const [ref, { width }] = useMeasure();
  const [props, api] = useSprings(
    pages.length,
    i => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: 'block',
    }),
    [width]
  );
  console.log('api: ', api);
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && distance > width / 2) {
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
      cancel()
    }
    api.start(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * width + (active ? mx : 0)
      const scale = active ? 1 - distance / width / 2  : 1
      return { x, scale, display: 'block' }
    });
  });
  
  return (
    <div ref={ref} className={styles.wrapper}>
      {props.map(({ x, display, scale }, i) => (
        <animated.div className={styles.page} {...bind()} key={i} style={{ display, x }}>
          <animated.h2 
            className={styles.orbitronFont}
            style={{color: '#FFF2CC', x, scale}}>
            {pagesText[i]}
          </animated.h2>
          <animated.div style={{ x, scale, backgroundImage: `url(${pages[i]})`, marginBottom: '10px' }} />
            <animated.h5 
              className={styles.orbitronFont}
              style={{ x, scale}}>
              <a  href={github[i]}
                  style={{color: '#FFF2CC', margin: '25px'}} 
                  target='_blank' 
                  rel='noreferrer'>Source Code</a>{' '}
              <a  href={liveDemo[i]} 
                  style={{color: '#FFF2CC', margin: '25px'}} 
                  target='_blank' 
                  rel='noreferrer'>Live Demo</a>
            </animated.h5>
        </animated.div>
      ))}
    </div>
  );
}

export default Viewpager;

import { useSprings, animated } from '@react-spring/web';
import edjWebsite from '../app/assets/edjWebsite1.jpg';
import { useDrag } from 'react-use-gesture';
import useMeasure from 'react-use-measure';
import styles from '../styles.module.css';
import clamp from 'lodash.clamp';
import { useRef } from 'react';

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  edjWebsite,
  'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const github = ['', 'https://github.com/hgandia/edj-react', '', '', ''
];

const liveDemo = ['', 'https://estrelladejacob.org/home', '', '', ''
];

const pagesText = ['HTML', 'Church Website', 'JavaScript', 'React.JS', 'Node.JS'];

function Viewpager() {
  const index = useRef(0);
  const [ref, { width }] = useMeasure();
  console.log('ref: ', ref);
  console.log('width: ', width);
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
      const scale = active ? 1 - distance / width / 1.5 : 1
      return { x, scale, display: 'block' }
    });
  });
  
  return (
    <div ref={ref} className={styles.wrapper}>
      {props.map(({ x, display, scale }, i) => (
        <animated.div className={styles.page} {...bind()} key={i} style={{ display, x, marginLeft: '220px' }}>
          <h2 style={{color: '#FFF2CC'}}>{pagesText[i]}</h2>
          <animated.div style={{ x, scale, backgroundImage: `url(${pages[i]})`, marginBottom: '10px' }} />
            <h5>
              <a  href={github[i]} 
                  style={{color: '#FFF2CC', margin: '25px'}} 
                  target='_blank' 
                  rel='noreferrer'>Source Code</a>{' '}
              <a  href={liveDemo[i]} 
                  style={{color: '#FFF2CC', margin: '25px'}} 
                  target='_blank' 
                  rel='noreferrer'>Live Demo</a>
            </h5>
        </animated.div>
      ))}
    </div>
  );
}

export default Viewpager;

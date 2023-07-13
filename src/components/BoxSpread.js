import { useState } from 'react';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';

import { Skills }  from '../app/shared/Skills';
import styles from '../styles.module.css';

const BoxSpread = () => {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: '#969489' },
    to: {
      size: open ? '100%' : '30%',
      background: open ? '' : '#969489',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? Skills : [], {
    ref: transApi,
    trail: 400 / Skills.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <div className={styles.boxSpreadWrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.boxSpreadContainer}
        onClick={() => set(open => !open)}>
        {transition((style, item) => (
          <animated.div
            className={styles.boxSpreadItem}
            style={{ ...style, background: item.css }}
          >
            <img 
                src={item.image} 
                alt='tech icon' 
                className={styles.boxSpreadItem} 
                style={{ marginTop: '5px', marginBottom: '-6px'}}
            />
           </animated.div>
        ))}<p>Click Me!</p>
      </animated.div>
    </div>
  );
};

export default BoxSpread;

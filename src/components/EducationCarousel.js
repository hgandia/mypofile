import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, List } from "reactstrap";
import { Education } from '../app/shared/Education';
import styles from '../styles.module.css';
import { useState } from "react";

const EducationCarousel = (args) => {
    const [activeIndex, setActiveIndex] = useState(0); 
    const [animating, setAnimating] = useState(false); 

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === Education.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);        
      };
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? Education.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const EducationSlides = Education.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <List type='unstyled' style={{marginBottom: '90px'}}>
                    <li className={`${styles.liFlex} ${styles.liHeader}`}>
                        <img 
                            src={item.image} 
                            alt='school icon'
                            className={styles.liIcon}
                        />
                        {item.school}
                    </li>
                    <li className={`${styles.liFlex} ${styles.liSubHeader1} ${styles.victormono}`}>
                        {item.location}
                    </li>
                    <li className={`${styles.liFlex} ${styles.liSubHeader2} ${styles.victormono}`}>
                        {item.time}
                    </li>
                    <ul 
                        className={styles.liFlex} 
                        style={{ 
                                marginTop:'40px'
                            }}>
                        <li className={`${styles.liBullet} ${styles.victormono}`}>
                            Area of Study: <span style={{marginLeft:'1px'}}>{item.studyField}</span>
                        </li>
                    </ul>
                    <ul className={styles.liFlex}>
                        <li className={`${styles.liBullet} ${styles.victormono}`}>
                            Degree Received: <span style={{marginLeft:'1px'}}>{item.degree}</span>
                        </li>
                    </ul>
                </List> 
            </CarouselItem>
        );
    });

    return(
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
                interval='90000'
                pause='hover'
                dark
            >
                <CarouselIndicators
                items={Education}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                style={{ backgroundColor:'#FFFBEF'}}
                />
                {EducationSlides}
                <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
                className={styles.carouselLeft}
                />
                <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
                className={styles.carouselRight}
                />
            </Carousel>
    );
};

export default EducationCarousel;
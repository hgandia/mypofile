import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, List } from "reactstrap";
import { Vexperience } from '../app/shared/Experience';
import styles from '../styles.module.css';
import { useState } from "react";

const ProjectsCarousel = (args) => {
const [activeIndex, setActiveIndex] = useState(0); 
const [animating, setAnimating] = useState(false); 

const next = () => {
if (animating) return;
const nextIndex = activeIndex === Vexperience.length - 1 ? 0 : activeIndex + 1;
setActiveIndex(nextIndex);        
};

const previous = () => {
if (animating) return;
const nextIndex = activeIndex === 0 ? Vexperience.length - 1 : activeIndex - 1;
setActiveIndex(nextIndex);
};

const goToIndex = (newIndex) => {
if (animating) return;
setActiveIndex(newIndex);
};

const ProjectsSlides = Vexperience.map((item) => {
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
                        alt='organization icon'
                        className={styles.liIcon}
                    />
                    {item.employer}
                </li>
                <li className={`${styles.liFlex} ${styles.liSubHeader1} ${styles.victormono}`}>
                    {item.location}
                </li>
                <li className={`${styles.liFlex} ${styles.liSubHeader2} ${styles.victormono}`}>
                    {item.time}
                </li>
                <li className={`${styles.liFlex} ${styles.liSubHeader3}`}>
                    <u>{item.jobTitle}</u>
                </li>
                {
                    item.bullets.map((bullet, idx) => {
                            return(
                            <ul className={styles.liFlex}>
                                <li 
                                    className={`${styles.liBullet} ${styles.victormono}`}
                                    key={idx}
                                >
                                    {bullet}
                                </li>
                            </ul>
                            );
                        })
                }
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
            items={Vexperience}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            style={{ backgroundColor:'#FFFBEF'}}
            />
            {ProjectsSlides}
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

export default ProjectsCarousel;
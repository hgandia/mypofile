import { 
    Carousel, 
    CarouselControl, 
    CarouselIndicators, 
    CarouselItem,
    List
} from "reactstrap";
import { Certifications } from '../app/shared/Education';
import styles from '../styles.module.css';
import { useState } from "react";

const CertificationsCarousel = (args) => {
const [activeIndex, setActiveIndex] = useState(0); 
const [animating, setAnimating] = useState(false); 

const next = () => {
if (animating) return;
const nextIndex = activeIndex === Certifications.length - 1 ? 0 : activeIndex + 1;
setActiveIndex(nextIndex);        
};

const previous = () => {
if (animating) return;
const nextIndex = activeIndex === 0 ? Certifications.length - 1 : activeIndex - 1;
setActiveIndex(nextIndex);
};

const goToIndex = (newIndex) => {
if (animating) return;
setActiveIndex(newIndex);
};

const CertificationsSlides = Certifications.map((item, id) => {
return (
    <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
    >
        {          
            id >= 0 ?
                <List type='unstyled' style={{marginBottom: '90px'}}>
                    <li className={styles.liHeader}>
                        <img 
                            src={item.image} 
                            alt='school icon'
                            className={styles.liIcon}
                        />
                        {item.school}
                    </li>
                    <li 
                        className={styles.liFlex}
                        style={{
                            marginLeft:'97px',
                            marginTop:'-25px',
                            fontSize:'13px'
                    }}>
                        {item.location}
                    </li>
                    <li 
                        className={styles.liFlex}
                        style={{
                            marginLeft:'97px',
                            fontSize:'13px'
                    }}>
                        {item.time}
                    </li>
                    <ul 
                        className={styles.liFlex}
                        style={{
                            marginTop:'10px'
                            }}>
                        <li>
                            Area of Study: <span style={{marginLeft:'1px'}}>{item.studyField}</span>
                        </li>
                    </ul>
                    <ul className={styles.liFlex}>
                        <li>
                            Degree Received: <span style={{marginLeft:'1px'}}>{item.degree}</span>
                        </li>
                    </ul>
                </List> :
                false                       
        }
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
        items={Certifications}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
        style={{ backgroundColor:'#FFFBEF'}}
        />
        {CertificationsSlides}
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

export default CertificationsCarousel;
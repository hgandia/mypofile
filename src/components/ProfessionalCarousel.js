import { 
          Carousel, 
          CarouselControl, 
          CarouselIndicators, 
          CarouselItem,
          List 
        } from 'reactstrap';
import { Experience } from '../app/shared/Experience';
import styles from '../styles.module.css';
import { useState } from 'react';

const ProfessionalCarousel = (args) => {
    const [activeIndex, setActiveIndex] = useState(0); 
    const [animating, setAnimating] = useState(false); 

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === Experience.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);        
      };
    
      const previous = () => {
        if (animating) return;
            const nextIndex = activeIndex === 0 ? Experience.length - 1 : activeIndex - 1;
            setActiveIndex(nextIndex);
      };
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      };

      const professionalSlides = Experience.map((item, id) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                {          
                    id >= 0 ?
                        <List type='unstyled' style={{marginBottom: '90px'}}>
                            <li style={{ 
                                    font:'30px bold', 
                                    display: 'flex', 
                                    justifyContent:'flex-start',
                                    }}>
                                        <img 
                                            src={item.image} 
                                            alt='company icon'
                                            style={{ width:'10%', marginRight:'20px'}}
                                        />
                                        {item.employer}
                            </li>
                            <li style={{
                                    display:'flex', 
                                    justifyContent:'flex-start',
                                    marginLeft:'97px',
                                    marginTop:'-40px',
                                    fontSize:'13px'
                            }}>
                                {item.location}
                            </li>
                            <li style={{
                                    display:'flex', 
                                    justifyContent:'flex-start',
                                    marginLeft:'97px',
                                    fontSize:'13px'
                            }}>
                                {item.time}
                            </li>
                            <li style={{ 
                                    font:'20px bold', 
                                    display: 'flex', 
                                    justifyContent:'flex-start',
                                    margin: '15px 0px'
                            }}>
                                        <u>{item.jobTitle}</u>
                            </li>
                            {
                                item.bullets.map((bullet, idx) => {
                                     return(
                                        <ul style={{display: 'flex', justifyContent:'flex-start'}}>
                                            <li key={idx}>{bullet}</li>
                                        </ul>
                                     );
                                    })
                            }
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
          items={Experience}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          style={{ backgroundColor:'#FFFBEF'}}
        />
        {professionalSlides}
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

export default ProfessionalCarousel;
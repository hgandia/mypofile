import { 
    Accordion, 
    AccordionBody, 
    AccordionHeader, 
    AccordionItem,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    List 
} from 'reactstrap';
import { Education } from '../app/shared/Education';
import { Experience, Vexperience } from '../app/shared/Experience';
import styles from '../styles.module.css';
import { useState } from 'react';

const AboutMe = (args) => {
    const [open, setOpen] = useState('0'); //For the Accordion
    const [activeIndex, setActiveIndex] = useState(0); //For the Carousel within the Accordion
    const [animating, setAnimating] = useState(false); //For the Carousel within the Accrodion
    //For the Accordion
    const toggle = (id) => {
        if(open === id){
            setOpen();
        } else {
            setOpen(id);
        }
    };

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

  const slides = Experience.map((item, id,) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)} //Originally true
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
                            marginBottom: '15px'
                            }}>
                                <img 
                                    src={item.image} 
                                    alt='company icon'
                                    style={{height:'10%', width:'10%', marginRight:'10px'}}
                                />
                                {item.employer}{', '}
                            <p style={{
                                    marginLeft:'50px', 
                                    marginTop: '10px', 
                                    fontSize:'20px'}}>
                                {item.location}
                            </p>
                            <p style={{
                                    marginLeft:'30px', 
                                    marginTop: '10px', 
                                    fontSize:'20px'
                                }}>{item.time}</p>
                    </li>
                    <ul style={{display: 'flex', justifyContent:'flex-start'}}>
                        <li>{item.bullet_1}</li>
                    </ul>
                    <ul style={{display: 'flex', justifyContent:'flex-start'}}>
                        <li>{item.bullet_2}</li>
                    </ul>
                    <ul style={{display: 'flex', justifyContent:'flex-start'}}>
                        <li>{item.bullet_3}</li>
                    </ul>
                    <ul style={{ display:'flex', justifyContent:'flex-start'}}>
                        <li>{item.bullet_4}</li>
                    </ul>
                    <ul style={{ display:'flex', justifyContent:'flex-start'}}>
                        <li>{item.bullet_5}</li>
                    </ul>
                    <ul style={{ display:'flex', justifyContent:'flex-start'}}>
                        <li>{item.bullet_6}</li>
                    </ul>
                </List> :
                false                       
            }
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
      </CarouselItem>
    );
  });

    return(
        <Accordion open={open} toggle={toggle} className={styles.accordion} >
            <AccordionItem className={styles.accordionBody}>
                <AccordionHeader 
                    targetId='1'
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}
                    style={{fontSize:'36px'}}
                >Volunteer Experience</AccordionHeader>
                <AccordionBody accordionId='1' style={{color:'black'}}>
                    {   
                        Vexperience.map((item, id) => {
                            return(
                                id === 0 ?
                                <List type='unstyled'>
                                    <li style={{ 
                                            font:'30px bold', 
                                            display: 'flex', 
                                            justifyContent:'flex-start',
                                            marginBottom: '15px'
                                            }}><u>{item.employer}</u></li>
                                    <ul style={{display: 'flex', justifyContent:'flex-start'}}>
                                        <li>{item.bullet_1}</li>
                                    </ul>
                                    <ul style={{display: 'flex', justifyContent:'flex-start'}}>
                                        <li>{item.bullet_2}</li>
                                    </ul>
                                    <ul style={{display: 'flex', justifyContent:'flex-start'}}>
                                        <li>{item.bullet_3}</li>
                                    </ul>
                                    <ul style={{ display:'flex', justifyContent:'flex-start'}}>
                                        <li>{item.bullet_4}</li>
                                    </ul>
                                    <ul style={{ display:'flex', justifyContent:'flex-start'}}>
                                        <li>{item.bullet_5}</li>
                                    </ul>
                                    <ul style={{ display:'flex', justifyContent:'flex-start'}}>
                                        <li>{item.bullet_6}</li>
                                    </ul>
                                </List> :
                                false
                            );
                        })                        
                    }
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className={styles.accordionBody}>
                <AccordionHeader 
                    targetId='2' 
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}
                >Professional Experience</AccordionHeader>
                    <AccordionBody accordionId='2'>
                        {
                            <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                                {...args}
                                interval='10000'
                                pause='hover'
                                dark
                          >
                            <CarouselIndicators
                              items={Experience}
                              activeIndex={activeIndex}
                              onClickHandler={goToIndex}
                              style={{ backgroundColor:'#FFFBEF'}}
                            />
                            {slides}
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
                        }
                    </AccordionBody>
            </AccordionItem>
            <AccordionItem className={styles.accordionBody}>
                <AccordionHeader 
                    targetId='3'
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}>Education</AccordionHeader>
                <AccordionBody accordionId='3'>
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className={styles.accordionBody}>
                <AccordionHeader 
                    targetId='4'
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}>Certifications</AccordionHeader>
                <AccordionBody accordionId='4'>
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className={styles.accordionBody}>
                <AccordionHeader 
                    targetId='5'
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}>Skill Set</AccordionHeader>
                <AccordionBody accordionId='5'>
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
};

export default AboutMe;
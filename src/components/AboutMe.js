import { 
    Accordion, 
    AccordionBody, 
    AccordionHeader, 
    AccordionItem,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption 
} from 'reactstrap';
import { Education } from '../app/shared/Education';
import { Experience } from '../app/shared/Experience';
import styles from '../styles.module.css';
import { useState } from 'react';

const AboutMe = () => {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if(open === id){
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return(
        <Accordion open={open} toggle={toggle} className={styles.accordion} >
            <AccordionItem className={styles.accordionBody}>
                <AccordionHeader 
                    targetId='1'
                     cssModule={{ 'accordion-button': `${styles.accordionButton}`}}
                    style={{ fontSize: '30px'}}
                >Volunteer Experience</AccordionHeader>
                <AccordionBody accordionId='1' >
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className={styles.accordionBody}>
                <AccordionHeader 
                    targetId='2' 
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}
                >Professional Experience</AccordionHeader>
                    <AccordionBody accordionId='2'>
                        <p>This is a test body text.</p>
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
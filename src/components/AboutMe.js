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
        <Accordion open={open} toggle={toggle} className={styles.accordion} cssModule={styles.accordionButton}>
            <AccordionItem className={styles.accordionBody}>
                <AccordionHeader targetId='1'>Volunteer Experience</AccordionHeader>
                <AccordionBody accordionId='1' >
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem targetId='2'>
                <AccordionHeader targetId='2'>Professional Experience</AccordionHeader>
                <AccordionBody accordionId='2'>
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem targetId='3'>
                <AccordionHeader targetId='3'>Education</AccordionHeader>
                <AccordionBody accordionId='3'>
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem targetId='4'>
                <AccordionHeader targetId='4'>Certifications</AccordionHeader>
                <AccordionBody accordionId='4'>
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem targetId='5'>
                <AccordionHeader targetId='5'>Skill Set</AccordionHeader>
                <AccordionBody accordionId='5'>
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
};

export default AboutMe;
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, List } from 'reactstrap';
import CertificationsCarousel from './CertificationsCarousel';
import ProfessionalCarousel from './ProfessionalCarousel';
import { Vexperience } from '../app/shared/Experience';
import EducationCarousel from './EducationCarousel';
import styles from '../styles.module.css';
import BoxSpread from './BoxSpread';
import { useState } from 'react';

const AboutMe = () => {
    const [open, setOpen] = useState('0');
    
    const toggle = (accordionId) => {
        if(open === accordionId){
            setOpen();
        } else {
            setOpen(accordionId);
        }
    }; 

    return(
        <Accordion open={open} toggle={toggle} className={styles.accordion} >
            <AccordionItem className={styles.accordionItem}>
                <AccordionHeader 
                    targetId='1'
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}>
                    Volunteer Experience
                </AccordionHeader>
                <AccordionBody accordionId='1'>
                    {   
                        Vexperience.map((item, id) => {
                            return(
                                <List type='unstyled' key={id}>
                                    <li className={`${styles.liFlex} ${styles.liHeader}`}>
                                        <img 
                                            src={item.image}
                                            alt='company icon'
                                            className={styles.liIcon}   
                                        />{item.employer}
                                    </li>
                                    <li className={`${styles.liFlex} ${styles.liSubHeader1}`}>
                                        {item.location}
                                    </li>
                                    <li className={`${styles.liFlex} ${styles.liSubHeader2}`}>
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
                                                        key={idx} 
                                                        className={`${styles.liBullet} ${styles.victormono}`}
                                                    >
                                                        {bullet}
                                                    </li>
                                                </ul>
                                            );
                                         })
                                    }
                                </List> 
                            );
                        })                        
                    }
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
                <AccordionHeader 
                    targetId='2' 
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}>Professional Experience</AccordionHeader>
                    <AccordionBody accordionId='2'>
                        <ProfessionalCarousel />
                    </AccordionBody>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
                <AccordionHeader 
                    targetId='3'
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}>Education</AccordionHeader>
                <AccordionBody accordionId='3'>
                    <EducationCarousel />
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
                <AccordionHeader 
                    targetId='4'
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}>Certifications</AccordionHeader>
                <AccordionBody accordionId='4'>
                    <CertificationsCarousel />
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
                <AccordionHeader 
                    targetId='5'
                    cssModule={{ 'accordion-button': `${styles.accordionButton}`}}>Skill Set</AccordionHeader>
                <AccordionBody accordionId='5'>
                    <BoxSpread />
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
};

export default AboutMe;
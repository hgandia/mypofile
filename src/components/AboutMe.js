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
import { useState } from 'react';

const AboutMe = () => {
    const [open, setOpen] = useState(0);
    const toggle = (id) => {
        if(open === id){
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return(
        <Accordion open={open} toggle={toggle}>
            <AccordionItem>
                <AccordionHeader targetId='1'>Professional Experience</AccordionHeader>
                <AccordionBody accordionId='1'>
                    <p>This is a test body text.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                
            </AccordionItem>
            <AccordionItem>
                
            </AccordionItem>
            <AccordionItem>
                
            </AccordionItem>
            <AccordionItem>
                
            </AccordionItem>
        </Accordion>
    );
};

export default AboutMe;
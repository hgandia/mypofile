import agere from '../assets/agereSystems.png';
import GD from '../assets/generalDynamics.jpg';
import metroPCS from '../assets/metroPCS.jpg';
import sprint from '../assets/sprint.gif';
import sony from '../assets/sony.jpg';
import tMobile from '../assets/t-mobile.jpg'
import ChurchLogo from '../assets/churchlogo.png';

export const Experience = [
    {
        id:0,
        image: tMobile,
        employer: 'T-Mobile US',
        location: 'Parsippany, NJ',
        time: '9/2013 - Present',
        jobTitle: 'RF Engineer',
        bullets: [
                    'Maintain and optimize cellular network in NYC on multiple layers of 5G, 4G and 3G.',
                    'Improve on KPI\'s such as drops, blocks, throughput, SINR, etc.',
                    'Work with design team to finalize design of small cell, oDAS nodes & macro layout.',
                    'Analyze site alarms to clear them and, if necessary, dispatch field operations.',
                    'Lead a SiriusXM radio interference mitigation project and created a MOP for teams.',
                    'Investigate and address customer trouble tickets.'
            ]
    },
    {
        id:1,
        image: metroPCS,
        employer: 'metroPCS',
        location: 'Hawthorne, NY',
        time: '2/2012 - 9/2013',
        jobTitle: 'RF Engineer',
        bullets: [
                    'Create daily alarm summary reports for LTE and CDMA alarms.',
                    'Analyze site alarms to clear them and, if necessary, dispatch field operations.',
                    'Capture and analyze data by drive testing in order to better optimize networks.',
                    'Work with design team to hardened small cell layout and design.',
                    'Visit sites for audits, design and optimization work.',
                    'Investigate and address customer trouble tickets. ',
                    'Review and approve site designs.'
            ] 
    },
    {
        id:2,
        image: sprint,
        employer: 'Sprint Nextel',
        location: 'White Plains, NY',
        time: '6/2004 - 4/2008',
        jobTitle: 'RF Engineer',
        bullets: [
                    'Design iDEN cell sites to increase network capacity and/or quality.',
                    'Design fiber DAS for better quality of network.',
                    'Analyzed post processed data to address network needs.',
                    'Perform iDEN cellular site modifications for network optimization.',
                    'Read / alter lease exhibits and construction drawings.',
                    'Create daily alarm summary reports for LTE and CDMA alarms.',
                    'Audit iDEN cellular sites.'
            ] 
    },
    {
        id:3,
        image: agere,
        employer: 'Agere Systems',
        location: 'Berkley Heights, NJ',
        time: '1/2001 - 1/2003',
        jobTitle: 'IC Physical Designer',
        bullets: [
                    'Designed physical layout of blocks for a 10Gb Network Processor.',
                    'Created I/O macro blocks for top-level pad ring using 0.13-micron technology.',
                    'Managed suite of Avanti tools including Apollo, Saturn, Astro and Enterprise.',
                    'Performed floor planning, scan chain optimization, placement, GCTS, and routing,', 
                    'Addionally performed timing closure, parasitic extraction, and physical verification.',
                    'Performed timing analysis on sub-micro blocks.',
                    'Facilitated work within the physical design flow by designing custom PERL scripts.',
                    'Verified backend connectivity with Hercules LVS/DRC and in-house tools.' 
            ]
    },
    {
        id:4,
        image: GD,
        employer: 'General Dynamics Defense Systems',
        location: 'Pittsfield, MA',
        time: '5/2000 - 8/2000',
        jobTitle: 'Engineering Intern',
        bullets: [
                    'Created, edited, and updated Microsoft Access databases.',
                    'Updated SGML files for fire control system\'s electronic manual.',
                    'Edited documentation for the fire control system technical manual.'
            ]
    },
    {
        id:5,
        image: sony,
        employer: 'Sony Music Entertainment',
        location: 'New York, New York',
        time: '6/1998 - 8/1998',
        jobTitle: 'Engineering Intern',
        bullets: [
                    'Fabricated D adapter and BNC connector cables.',
                    'Soldered male and female XLR audio connectors.',
                    'Updated cable connectors for all rack units in the studio.',
                    'Replaced microchips in remote control for video console.'
            ]
    }   
];

export const Vexperience = [
    {
        id:0,
        image: ChurchLogo,
        employer: 'Iglesia Pentecostal Estrella de Jacob, Inc',
        location: 'Bronx, NY',
        time: '9/2010 - Present',
        jobTitle: 'Technical Lead',
        bullets: [
                    'Design, install, optimize, and maintain sound reinforcement system.',
                    'Design, install, optimize, and maintain video capturing system.',
                    'Design, install, optimize, and upgrade computer system.',
                    'Integrate video, sound to computer to stream good quality content.',
                    'Instruct the team on the system, how to utilize and troubleshoot it.',
                    'Create website using React.JS, CSS, & Node.JS for back-end.'
                ] 
    }
];
import agere from '../assets/agereSystems.png';
import GD from '../assets/generalDynamics.jpg';
import metroPCS from '../assets/metroPCS.jpg';
import sprint from '../assets/sprint.gif';
import sony from '../assets/sony.jpg';
import tMobile from '../assets/t-mobile.jpg'
import ChurchLogo from '../assets/churchlogo.png';
import ADMSLogo from '../assets/admsLogo.png';

export const Experience = [
    {
        id:0,
        image: tMobile,
        employer: 'T-Mobile US',
        location: 'Parsippany, NJ',
        time: '9/2013 - Present',
        jobTitle: 'RF Engineer',
        bullets: [
                    'Maintain and optimize cellular networks in NYC on LTE & WCDMA.',
                    'Maintain and optimize multiple layers of technology in 5G, 4G & 3G. ',
                    'Improve on KPI\'s such as drops, blocks, throughput, SINR, etc.',
                    'Work on the finalization of small cell, oDAS nodes & macro layout.',
                    'Analyze site alarms, clear them and, if needed, dispatch field tech.',
                    'Worked on a SiriusXM radio interference mitigation project.',
                    'Created a MOP for market teams to follow in that same project.',
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
                    'Analyze site alarms, clear them and, if needed, dispatch field tech.',
                    'Drive test for data capture in order to optimize cellular networks.',
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
                    'Created I/O macro blocks for top-level pad ring using 0.13µ tech.',
                    'Managed suite of Avanti tools including Apollo, Saturn and Astro.',
                    'Performed floor planning, scan chain optimization and placement.',
                    'Also performed GCTS, routing, timing closure & parasitic extraction.', 
                    'Performed timing analysis on sub-micro blocks.',
                    'Eased work within the design flow by coding custom PERL scripts.',
                    'Verified backend connectivity with Hercules LVS/DRC.' 
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
        employer: 'Iglesia Pentecostal Estrella de Jacob',
        location: 'Bronx, NY',
        time: '2022 - Present',
        jobTitle: 'Full Stack Web Developer',
        bullets: [
                    'Developed a full stack web application using the MERN stack',
                    'Developed underlying groundwork of user account logins using JWT',
                    'Provided a method of contact for site visitors to reach the ministry',
                    'Tech Used: React, HTML, CSS, JavaScript, Node, Bootstrap, MongoDB'
                ] 
    },
    {
        id:1,
        image: ADMSLogo,
        employer: 'ADMS del Concilio Latino Americano',
        location: 'Hackensack, NJ',
        time: '2023 - Present',
        jobTitle: 'Full Stack Web Developer',
        bullets: [
                    'Developing a full stack e-commerce web app using the PERN stack',
                    'Using PostgreSQL for database needs',
                    'Developing underlying groundwork for user accounts, user registration',
                    'Login authentication will be done using JWT to develop online security',
                    'Provided a method of contact for site visitors to reach the ministry',
                    'Tech Used: React, HTML, CSS, JavaScript, Node, Bootstrap & PostgreSQL'
                ]
    }
];
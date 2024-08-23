// types
import { JobDetail, BlogPost, Service } from './types';

// images

import coworking1 from 'assets/images/hero/coworking1.jpg';
import coworking2 from 'assets/images/hero/coworking2.jpg';
import coworking3 from 'assets/images/hero/coworking3.jpg';

const services: Service[] = [
    {
        icon: 'server',
        variant: 'primary',
        title: 'Fullstack Development',
        description:
            'Developing your apps with our best talent and delivering great and bugs free apps to enhance your business',
    },
    {
        icon: 'code',
        variant: 'orange',
        title: 'Microservice / Monolithic Development',
        description:
            'We serve our apps as microservices with Laravel as a Backend and we can choose various frontends like Vue JS or React JS',
    },
    {
        icon: 'figma',
        variant: 'primary',
        title: 'UI UX & Presentation Designs',
        description:
            "Making a great Interface matter for your apps, we can help you to make a beautiful and eyecatching app. If you want to make an MVP and need to make a presentation to your client, don't worry we are here for you",
    },
];

const blogPosts: BlogPost[] = [
    {
        heading: 'Design',
        img: coworking1,
        time: '11 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'Single page websites are taking over the world, and thats why I would like you to present the best ...',
    },
    {
        heading: 'Development',
        img: coworking2,
        time: '12 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'We have shortlisted the best WordPress themes for alcohol production, distribution, and selling to...',
    },
    {
        heading: 'Design',
        img: coworking3,
        time: '13 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description: 'The following Italian restaurant WordPress themes come with the powerful drag-n-drop...',
    },
];

const jobDetails: JobDetail[] = [
    {
        designation: 'Fullstack Developer',
        location: 'Semarang',
        jobType: 'On-site',
    },
    {
        designation: 'Frontend Developer',
        location: 'Semarang',
        jobType: 'On-site',
    },
    {
        designation: 'Backend Developer',
        location: 'Semarang',
        jobType: 'On-site',
    },
    {
        designation: 'UI/UX Designer',
        location: 'Semarang',
        jobType: 'On-site',
    },
    {
        designation: 'Bot / Scraper',
        location: 'Semarang',
        jobType: 'On-site',
    },
];

export { services, blogPosts, jobDetails };

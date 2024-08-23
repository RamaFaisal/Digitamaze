// types
import { Project, Service } from './types';

import ProjectImg1 from 'assets/images/features/1.jpg';
import ProjectImg2 from 'assets/images/features/3.jpg';
import ProjectImg3 from 'assets/images/features/2.jpg';
import ProjectImg4 from 'assets/images/features/4.jpg';

const services: Service[] = [
    {
        icon: 'figma',
        title: 'UI / UX Design',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    },
    {
        icon: 'copy',
        title: 'UI / UX Design',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    },
    {
        icon: 'image',
        title: 'UI / UX Design',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    },
];

const projects: Project[] = [
    {
        title: 'Project 1',
        description: 'Branding, Interaction, Web Design',
        image: ProjectImg1,
    },
    {
        title: 'Project 2',
        description: 'Branding, Web Design & Development',
        image: ProjectImg2,
    },
    {
        title: 'Project 3',
        description: 'Branding, Interaction, Web Design',
        image: ProjectImg3,
    },
    {
        title: 'Project 4',
        description: 'Branding, Web Design & Development',
        image: ProjectImg4,
    },
];

export { services, projects };

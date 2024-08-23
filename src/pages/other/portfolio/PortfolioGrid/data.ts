// types
import { GalleryItem } from '../types';

// images
import img1 from 'assets/images/photos/Hp.jpg';
import img3 from 'assets/images/photos/web4.jpg';
import img4 from 'assets/images/photos/web1.jpg';
import img5 from 'assets/images/photos/webHp2.jpg';
import img6 from 'assets/images/photos/Hp2.jpg';
import img7 from 'assets/images/photos/webHp.jpg';

const galleryItems: GalleryItem[] = [
    {
        image: {
            src: img1,
            caption: 'Maxiaga',
        },
        title: 'Maxiaga',
        description: '',
        category: ['mobile'],
    },
    {
        image: {
            src: img7,
            caption: 'Marketing Apps Indosat Ooredoo',
        },
        title: 'Marketing Apps Indosat Ooredoo',
        description: '',
        category: ['web', 'mobile'],
    },
    {
        image: {
            src: img3,
            caption: 'Organization Management Pharmacy Semarang',
        },
        title: 'Organization Management Pharmacy',
        description: '',
        category: ['web'],
    },
    {
        image: {
            src: img4,
            caption: 'Crane Monitoring Indonesia Port',
        },
        title: 'Crane Monitoring Indonesia Port',
        description: '',
        category: ['web'],
    },
    {
        image: {
            src: img5,
            caption: 'Gaweyo',
        },
        title: 'Gaweyo',
        description: '',
        category: ['web', 'mobile'],
    },
    {
        image: {
            src: img6,
            caption: 'E-book Apps Islamic State University',
        },
        title: 'E-book Apps Islamic State University',
        description: '',
        category: ['mobile'],
    },
];

export { galleryItems };

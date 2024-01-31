import { Project } from '@/shared/types';
import ProjectItem from './ProjectItem';

import image1 from '@/assets/projects/world-wise-preview.jpg';
import image2 from '@/assets/projects/wild-oasis-preview-dark.jpg';
import image3 from '@/assets/projects/memory-preview.jpg';
import image4 from '@/assets/projects/clinic-preview.jpg';
import image5 from '@/assets/projects/pro-marketplace-preview.jpg';
import image6 from '@/assets/projects/audit-preview.jpg';
import { motion } from 'framer-motion';

const projects: Project[] = [
    {
        name: 'World Wise',
        image: image1,
        appUrl: '',
        gitUrl: ''
    },
    {
        name: 'Wild Oasis',
        image: image2,
        appUrl: '',
        gitUrl: ''
    },
    {
        name: 'Memory Game',
        image: image3,
        appUrl: '',
        gitUrl: ''
    },
    {
        name: 'Clinics',
        image: image4,
        appUrl: '',
        gitUrl: ''
    },
    {
        name: 'Pro Marketplace',
        image: image5,
        appUrl: '',
        gitUrl: ''
    },
    { name: 'Audit', image: image6, appUrl: '', gitUrl: '' }
];

const animationContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

function ProjectsList() {
    return (
        <motion.ul
            className="grid gap-8 xs:grid-cols-2 sm:grid-cols-3"
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={animationContainer}
        >
            {projects.map((project, index) => {
                return <ProjectItem key={index} {...project} />;
            })}
        </motion.ul>
    );
}

export default ProjectsList;

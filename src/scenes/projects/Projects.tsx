import { SelectedPage } from '@/shared/types';
import Section from '@/ui/Section';

import { motion } from 'framer-motion';
import Heading from '@/ui/Heading';
import ProjectsList from './ProjectsList';

function Projects() {
    return (
        <Section
            id={SelectedPage.Projects}
            className=" max-md:auto !py-20 max-md:h-auto max-md:min-h-fit md:h-screen md:max-h-[1094px] md:min-h-[800px]"
        >
            <div className="mx-auto  w-11/12 max-w-[1200px] items-center md:top-[50%] relative md:translate-y-[-50%]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <Heading>My projects</Heading>
    
                </motion.div>

                <div className="mt-10">
                    <ProjectsList />
                </div>
            </div>
        </Section>
    );
}

export default Projects;

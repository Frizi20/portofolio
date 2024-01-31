import { Skill } from '@/shared/types';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

import SkillItem from './SkillItem';
import { motion } from 'framer-motion';

const skills: Array<Skill> = [
    {
        icon: <FaReact className="h-8 w-8" />,
        title: 'React',
        description: 'React is a front end library',
        color: 'group-hover:text-color-react'
    },
    {
        icon: <FaNodeJs className="h-8 w-8" />,
        title: 'Node JS',
        description: 'React is a front end library',
        color: 'group-hover:text-color-node'
    },
    {
        icon: <FaLaravel className="h-8 w-8" />,
        title: 'Laravel',
        description: 'React is a front end library',
        color: 'group-hover:text-color-laravel'
    },
    {
        icon: <GrMysql className="h-8 w-8" />,
        title: 'SQL',
        description: 'React is a front end library',
        color: 'group-hover:text-color-sql'
    },
    {
        icon: <SiExpress className="h-8 w-8" />,
        title: 'Express',
        description: 'React is a front end library',
        color: 'group-hover:text-color-express'
    },
    {
        icon: <SiMongodb className="h-8 w-8" />,
        title: 'MongoDB',
        description: 'React is a front end library',
        color: 'group-hover:text-color-mongo'
    }
];

const animationContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

function Skills() {
    return (
        <motion.div
            className=" relative  mt-10 box-border grid flex-1 grid-cols-2 gap-5  md:grid-cols-3 md:flex-row"
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.6 }}
            variants={animationContainer}
        >
            {skills.map((skill, index) => {
                return <SkillItem key={index} {...skill} />;
            })}
        </motion.div>
    );
}

export default Skills;

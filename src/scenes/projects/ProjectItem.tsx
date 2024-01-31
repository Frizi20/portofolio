import { Project } from '@/shared/types';
import { motion } from 'framer-motion';

interface Props extends Project {}

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

function ProjectItem({  image, name }: Props) {
    return (
        <motion.li
            className="relative aspect-[5/3] cursor-pointer overflow-hidden rounded-md   bg-indigo-500 shadow-lg shadow-[#1c214481] z-10" 
            variants={childVariant}
        >
            <div className="hover:opacity-1 absolute left-0 top-0 flex h-full w-full items-center justify-center gap-5 bg-transparent p-5 text-white opacity-0 hover:bg-[#5b5f636a] hover:opacity-100 transition duration-300">
                <h2 className="text-center font-montserrat text-2xl font-semibold sm:text-3xl md:text-3xl">
                    {name}
                </h2>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium quia dolorum optio ullam unde at, odio quis
                    cumque fugit maxime?{' '}
                </p> */}
            </div>
            <img src={image} alt="" className="h-full object-cover" />
        </motion.li>
    );
}

export default ProjectItem;

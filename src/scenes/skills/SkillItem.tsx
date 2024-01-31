import { Skill } from '@/shared/types';
import { motion } from 'framer-motion';

interface Props extends Skill {}

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

function SkillItem({ icon, title, color }: Props) {
    return (
        <motion.div
            className="bg-primary-200 group relative z-20 box-border flex basis-1/3  cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-[#6666668a] p-5 text-center"
            variants={childVariant}
        >
            <div
                className={`bg-primary-50  aspect-square rounded-full p-3 ${color}`}
            >
                <div className="flex items-center justify-center">{icon}</div>
            </div>
            <h3 className={`text-2xl font-semibold `}>{title}</h3>
        </motion.div>
    );
}

export default SkillItem;

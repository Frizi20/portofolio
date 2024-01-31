import Heading from '@/ui/Heading';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type Props = {};

const animationContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const childVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 }
};

function ContactInfo({}: Props) {
    return (
        <motion.div
            className="flex flex-1 flex-col gap-5 pr-10"
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={animationContainer}
        >
            <motion.div variants={childVariant}>
                <Heading clasName="md:mt-10">Contact me</Heading>
            </motion.div>

            <motion.div
                variants={childVariant}
                className="mt-5 flex items-center gap-5"
            >
                <div className="bg-primary-200 border-primary-50 flex items-center justify-center rounded-full border p-4">
                    <MapPinIcon className="h-6 w-6" />
                </div>
                <div className="flex w-full gap-4 text-xl max-sm:flex-col max-sm:text-sm">
                    <div className="">Address</div>
                    <div className="col-span-2 col-start-2 text-secondary-400 ">
                        Bucuresti, Nicolae titulescu 51-59
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={childVariant}
                className="flex items-center gap-5"
            >
                <div className="bg-primary-200 border-primary-50 flex items-center justify-center rounded-full border p-4">
                    <PhoneIcon className="h-6 w-6" />
                </div>
                <div className="flex w-full gap-4 text-xl max-sm:flex-col max-sm:text-sm">
                    <div className="">Phone</div>
                    <a
                        href="tel:+40720251005"
                        className="col-span-2 col-start-2 text-secondary-400"
                    >
                        +40720251005
                    </a>
                </div>
            </motion.div>
            <motion.div
                variants={childVariant}
                className="flex items-center gap-5"
            >
                <div className="bg-primary-200 border-primary-50 flex items-center justify-center rounded-full border p-4">
                    <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div className="flex w-full gap-4 text-xl max-sm:flex-col max-sm:text-sm">
                    <div className="">Email</div>
                    <div className="col-span-2 col-start-2 text-secondary-400 ">
                        matac.cristi200@gmail.com
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ContactInfo;

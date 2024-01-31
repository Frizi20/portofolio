import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';

import { motion } from 'framer-motion';
import Section from '@/ui/Section';

type Props = {
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Home({ setSelectedPage }: Props) {
    // const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
    return (
        <Section
            id={SelectedPage.Home}
            className="  relative  h-screen max-h-[1094px] min-h-[500px] gap-16 bg-gray-20 py-10 pb-0 "
        >
            {/* IMAGE AND MAIN HEADER */}
            <div className="absolute left-[50%] top-[50%] mx-auto w-11/12 max-w-[1200px] translate-x-[-50%] translate-y-[-50%] md:w-3/5">
                {/* MAIN HEADER */}
                <div className="z-10 ">
                    {/* HEADINGS */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: -200 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className="relative ">
                            <div className="before:absolute before:-left-16 before:-top-20  max-md:flex ">
                                {/* <img src={HomePageText} alt="homepage" /> */}
                                <div className="mx-auto">
                                    <h1 className="text-center font-montserrat  text-4xl font-extrabold uppercase sm:text-6xl md:text-7xl">
                                        Matac Cristi
                                    </h1>
                                    <h1 className="py-3 text-center font-montserrat text-xl font-extrabold uppercase md:text-2xl">
                                        WEB DEVELOPER
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-center text-lg">
                            I'm a web developer always striving to learn and
                            provide the best services I can offer.
                        </p>
                    </motion.div>
                    {/* ACTIONS */}
                    <motion.div
                        className="mt-8 flex items-center justify-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 200 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <ActionButton
                            href={SelectedPage.Contact}
                            setSelectedPage={setSelectedPage}
                        >
                            Contact me
                        </ActionButton>
                    </motion.div>
                </div>

                {/* IMAGE */}

                {/* <div className="z-10 flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end">
                    <div className="h-[500px]"></div>
                </div> */}
            </div>

            {/* TECHNOLOGIES */}
            {/* {isAboveMediumScreens && (
                <div className=" h-[150px]  w-full bg-primary-100 py-10">
                    <div className="mx-auto flex  w-11/12 max-w-[1200px] items-center justify-between gap-8">
                
                    </div>
                </div>
            )} */}
        </Section>
    );
}

export default Home;

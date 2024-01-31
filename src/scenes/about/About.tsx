import { SelectedPage } from '@/shared/types';
import Heading from '@/ui/Heading';
import Section from '@/ui/Section';
import { motion } from 'framer-motion';
import Skills from '../skills/Skills';

type Props = {
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function About({  }: Props) {
    return (
        <Section
            id={SelectedPage.About}
            className="min-h-[800px] overflow-visible bg-primary-100 max-md:flex max-md:h-auto max-md:!min-h-fit max-md:py-16 md:h-screen"
        >
            <div className="relative z-20 mx-auto min-h-fit w-11/12  max-w-[1200px] items-center md:top-[50%] md:flex md:translate-y-[-50%]">
                <div className="w-full">
                    {/* <motion.div
                        className="text-center md:my-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                    </motion.div> */}

                    <div className="items-center justify-between gap-10 md:flex">
                        {/* <img
                            src={BenefitsPageGraphic}
                            alt="benefits-page-graphic"
                            className="mx-auto"
                        /> */}

                        <div className="basis-1/2 ">
                            {/* TITLE  */}
                            <div className="relative">
                                <div className="">
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
                                        <Heading>About me</Heading>
                                    </motion.div>
                                </div>
                            </div>
                            {/* DESCRIPTION */}

                            <motion.div
                                className=""
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <p className="my-5 [&>u]:cursor-pointer [&>u]:font-semibold [&>u]:text-secondary-500">
                                    Ever since I embarked on my journey into web
                                    development, focusing primarily on the
                                    front-end, I have acquired a solid
                                    understanding of <u> HTML</u>, <u> CSS</u>,
                                    <u> JavaScript</u>.
                                </p>

                                <p className="my-5 [&>u]:cursor-pointer [&>u]:font-semibold [&>u]:text-secondary-500">
                                    And various libraries such as{' '}
                                    <u>React.js</u> and <u> Vue.js</u>. My
                                    hands-on experience extends to working with
                                    <u> Node.js</u> using the <u> express.js</u>{' '}
                                    framework and
                                    <u> PHP</u> with <u> Laravel</u> on the
                                    back-end.
                                </p>

                                <p className="mb-5 [&>u]:cursor-pointer [&>u]:font-semibold [&>u]:text-secondary-500">
                                    {/* Additionally, I've explored the serverless
                                    approach by employing the <u>Supabase</u>{' '}
                                    backend service provider. When it comes to
                                    handling data, I've adeptly employed both{' '}
                                    <u>SQL</u> and <u>NoSQL</u> databases. */}
                                </p>
                            </motion.div>
                        </div>

                        <Skills />
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default About;

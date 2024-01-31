import { SelectedPage } from '@/shared/types';
import Section from '@/ui/Section';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactInfo from './ContactInfo';

// import {} from 'heroicon'

function Contact() {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = await trigger();
        if (!isValid) {
            return;
        }
    };

    return (
        <Section
            id={SelectedPage.Contact}
            className="relative  bg-primary-100 !py-20 max-md:h-auto  max-md:py-16 md:h-screen md:max-h-[1094px] md:min-h-[800px]"
        >
            <div className="relative mx-auto w-11/12 max-w-[1200px] items-center md:top-[50%] md:translate-y-[-50%]">
                <div>
                    <div className="mx-auto ">
                        <div className="mt-10 flex flex-col  md:flex-row">
                            <ContactInfo />

                            <motion.div
                                className="md:mt:0 mt-16 rounded-md bg-white px-8 py-16 shadow-lg shadow-black md:mt-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, x: 200 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <form
                                    target="_blank"
                                    onSubmit={onSubmit}
                                    className=""
                                >
                                    <h2 className="mb-10 text-center font-montserrat text-3xl font-semibold text-gray-700">
                                        Get in touch
                                    </h2>

                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full rounded-lg px-5 py-3 text-gray-600 placeholder-gray-400 outline outline-1 outline-gray-400"
                                                placeholder="NAME"
                                                {...register('name', {
                                                    required:
                                                        'The field is required',
                                                    maxLength: 20
                                                })}
                                            />
                                            {errors.name && (
                                                <p className="mt-1 pl-1 text-primary-500 font-semibold">
                                                    {
                                                        errors.name
                                                            ?.message as string
                                                    }
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full rounded-lg px-5 py-3 text-gray-600 placeholder-gray-400 outline outline-1 outline-gray-400"
                                                placeholder="EMAIL"
                                                {...register('email', {
                                                    required:
                                                        'The field is required',
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,}$/i,
                                                        message:
                                                            'The email is invalid'
                                                    }
                                                })}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 pl-1 text-primary-500 font-semibold">
                                                    {
                                                        errors.email
                                                            ?.message as string
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <input
                                        type="text"
                                        id="subject"
                                        className="mt-5 w-full rounded-lg px-5 py-3 text-gray-600 placeholder-gray-400 outline outline-1 outline-gray-400"
                                        placeholder="SUBJECT"
                                        {...register('subject', {
                                            required: 'The field is required',
                                            minLength: {
                                                value: 3,
                                                message:
                                                    'This field requires at least 3 caracters'
                                            }
                                        })}
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 pl-1 text-primary-500 font-semibold">
                                            {errors.subject?.message as string}
                                        </p>
                                    )}

                                    <textarea
                                        id="name"
                                        className="mt-5 max-h-[200px] min-h-[100px] w-full rounded-lg px-5 py-3 text-gray-600 placeholder-gray-400 outline outline-1 outline-gray-400"
                                        placeholder="MESSAGE"
                                        {...register('message', {
                                            required: 'The field is required',
                                            minLength: {
                                                value: 10,
                                                message:
                                                    'This field requires at least 10 caracters'
                                            }
                                        })}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 pl-1 text-primary-500 font-semibold">
                                            {errors.message?.message as string}
                                        </p>
                                    )}

                                    <button className="mx-auto mt-10 block rounded-sm bg-secondary-500 px-[40px] py-[10px] font-semibold text-gray-700 transition duration-200 hover:bg-secondary-400 ">
                                        Send message
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Contact;

import Navbar from '@/scenes/navbar/NavBar';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Home from './scenes/home/Home';
import About from './scenes/about/About';
import Projects from './scenes/projects/Projects';
import Contact from './scenes/contact/Contact';
import BackroundAnimation from './ui/BackroundAnimation';

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );

    const [isTopOfPage, setIsTopOfPage] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTopOfPage(!(window.scrollY >= 50));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('section'));

        const intObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelectedPage(entry.target.id as SelectedPage);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => {
            intObserver.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                intObserver.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="app bg-gray-20 ">
            <BackroundAnimation />

            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage} />
            {/* <div className=" h-[150px]  w-full bg-primary-100 py-10">
                <div className="mx-auto flex  w-11/12 max-w-[1200px] items-center justify-between gap-8"></div>
            </div> */}
            <About setSelectedPage={setSelectedPage} />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;

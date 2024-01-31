import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';
import NavBarMobile from './NavBarMobile';
import AnchorLink from 'react-anchor-link-smooth-scroll';
type Props = {
    selectedPage: string;
    isTopOfPage: boolean;
    setSelectedPage: (value: SelectedPage) => void;
};

const pages = Object.keys(SelectedPage);

export default function NavBar({
    selectedPage,
    setSelectedPage,
    isTopOfPage
}: Props) {
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    console.log(isAboveMediumScreen);
    
    return (
        <nav
            className={`${flexBetween} fixed top-0 z-30 h-[90px] w-full   py-6  ${isTopOfPage ? '' : 'bg-primary-100 shadow-md'} ${isMenuToggled && !isAboveMediumScreen && 'bg-primary-250 border-b border-b-gray-800'}`}
        >
            <div className={`${flexBetween} mx-auto w-11/12 max-w-[1200px]`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <h1 className='after:content-["" ]  relative font-montserrat  text-xl text-gray-500 after:absolute after:right-[-12px] after:top-[50%] after:inline after:h-2 after:w-2 after:translate-y-[-50%] after:rounded-full after:bg-gray-500'>
                        <AnchorLink href="">Portofolio</AnchorLink>
                    </h1>

                    {isAboveMediumScreen ? (
                        <div className={`${flexBetween} w-full gap-16`}>
                            <div className={`${flexBetween} gap-8 text-lg`}>
                                {pages.map((page, index) => (
                                    <Link
                                        key={index}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    >
                                        {page}
                                    </Link>
                                ))}
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign in</p>
                                <ActionButton
                                    setSelectedPage={setSelectedPage}
                                    href={SelectedPage.Contact}
                                >
                                    Contact me
                                </ActionButton>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={() => {
                                setIsMenuToggled((prev) => !prev);
                            }}
                        >
                            {isMenuToggled && (
                                <XMarkIcon className="h-6 w-6 text-black" />
                            )}

                            {!isMenuToggled && (
                                <Bars3Icon className="h-6 w-6 text-black" />
                            )}
                        </button>
                    )}
                </div>
            </div>
            {/* MOBILE NAV  */}
            {!isAboveMediumScreen && isMenuToggled && (
                <NavBarMobile setIsMenuToggled={setIsMenuToggled}>
                    {pages.map((page, index) => (
                        <div
                            className="w-full border-b border-b-gray-800  text-center"
                            key={index}
                        >
                            <Link
                                className='w-full h-full py-3 inline-block'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}   
                            >
                                {page}
                            </Link>
                        </div>
                    ))}
                </NavBarMobile>
            )}
        </nav>
    );
}

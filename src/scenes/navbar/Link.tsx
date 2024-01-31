import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    children: string;
    selectedPage?: string;
    className?: string;
    setSelectedPage: (value: SelectedPage) => void;
    setIsMenuToggled?: React.Dispatch<React.SetStateAction<boolean>>;
};

function Link({
    children: page,
    setSelectedPage,
    selectedPage,
    className,
    setIsMenuToggled
}: Props) {
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
    const lowerCasePage = page.toLowerCase().replace(/ /g, '');

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage && 'text-secondary-500'} tranition hover:text-secondary-300 duration-500 ${className ?? ''}`}
            href={`#${lowerCasePage}`}
            offset={isAboveMediumScreen ? 0 : 90}
            onClick={() => {
                setSelectedPage(lowerCasePage as SelectedPage);
                setIsMenuToggled?.(false);
            }}
        >
            {page}
        </AnchorLink>
    );
}

export default Link;

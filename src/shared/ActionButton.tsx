import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    children: string;
    href: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

function ActionButton({ children, setSelectedPage, href }: Props) {
    return (
        <AnchorLink
            className="cursor-pointer rounded-md bg-secondary-500 px-5 py-2 hover:bg-secondary-400 text-gray-800 font-semibold"
            href={`#${href}`}
            onClick={() => {
                setSelectedPage(href);
            }}
        >
            {children}
        </AnchorLink>
    );
}

export default ActionButton;

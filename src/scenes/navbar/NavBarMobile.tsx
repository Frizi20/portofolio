type Props = {
    children: React.ReactNode;
    setIsMenuToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBarMobile({ children }: Props) {
    return (
        <div className="bg-primary-250 fixed right-0 top-[90px] z-50  flex w-full max-w-[calc(100%)] flex-col opacity-100 shadow-md transition">
            <div className="flex  flex-1 flex-col">
                <div className="flex flex-col items-center px-5 text-xl font-semibold text-gray-200 ">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default NavBarMobile;

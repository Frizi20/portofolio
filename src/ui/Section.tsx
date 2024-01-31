type Props = {
    children: React.ReactNode;
    id: string;
    className?: string;
};

function Section({ children, id, className }: Props) {
    return (
        <section
            id={id}
            className={` h-screen min-h-[500px] bg-gray-20 md:pb-0 ${className}`}
        >
            {children}
        </section>
    );
}

export default Section;

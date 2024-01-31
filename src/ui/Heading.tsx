import React from 'react';

type Props = {
    clasName?: string;
    children: React.ReactNode;
};

function Heading({ children, clasName }: Props) {
    return (
        <h1
            className={`basis 3/5 font-montserrat text-3xl font-bold ${clasName}`}
        >
            {children}
        </h1>
    );
}

export default Heading;

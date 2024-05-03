import React, { ReactNode, useState } from 'react';


interface AccordionProps {
    title: string;
    children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={toggleAccordion}>
                <h2>{title}</h2>
                <div className="arrow-icon">{isOpen ? '▲' : '▼'}</div>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};

export default Accordion;

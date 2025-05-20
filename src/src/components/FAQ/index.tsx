import React, { useState, ReactNode } from 'react';
import styles from './styles.module.css';

interface FAQProps {
    question: string;
    children: ReactNode;
}

export default function FAQ({ question, children }: FAQProps): React.ReactElement {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqContainer}>
            <button
                className={`${styles.faqQuestion} ${isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {question}
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className={styles.faqAnswer}>
                    {children}
                </div>
            )}
        </div>
    );
}
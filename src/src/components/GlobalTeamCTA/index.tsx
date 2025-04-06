import React from 'react';
import type { ReactElement } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface GlobalTeamCTAProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
}

export default function GlobalTeamCTA({
    title = "Transform Your Business with Global Tech Talent",
    subtitle = "Connect with top-tier remote professionals and leverage cutting-edge cloud solutions to scale your business efficiently and securely.",
    buttonText = "Get Started Today"
}: GlobalTeamCTAProps): ReactElement {
    return (
        <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>{title}</h2>
                <p className={styles.ctaDescription}>
                    {subtitle}
                </p>
                <Link to="/contact-us" className={styles.ctaButton}>
                    {buttonText}
                </Link>
            </div>
        </div>
    );
} 
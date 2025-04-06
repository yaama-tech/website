import React from 'react';
import type { ReactElement } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function GlobalTeamCTA(): ReactElement {
    return (
        <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Transform Your Business with Global Tech Talent</h2>
                <p className={styles.ctaDescription}>
                    Connect with top-tier remote professionals and leverage cutting-edge cloud solutions to scale your business efficiently and securely.
                </p>
                <Link to="/contact-us" className={styles.ctaButton}>
                    Get Started Today
                </Link>
            </div>
        </div>
    );
} 
import React from 'react';
import Layout from '@theme/Layout';
import ContactForm from '@site/src/components/ContactFrom';
import styles from './styles.module.css';
import clsx from 'clsx';

const ContactSvg = require('@site/static/img/yaama-contact-us.svg').default;

export default function ContactUs() {
    return (
        <Layout title="Contact Us">
            <div className={styles.contactContainer}>
                <h1 className={styles.title}>Contact Us</h1>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageWrapper}>
                        <ContactSvg className={styles.contactImage} role="img" />
                    </div>
                    <div className={styles.formWrapper}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

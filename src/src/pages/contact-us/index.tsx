import React from 'react';
import Layout from '@theme/Layout';
import ContactForm from '@site/src/components/ContactFrom';

export default function ContactUs() {
    return (
        <Layout title="Contact Us">
            <div
                style={{
                    padding: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h1>
                <ContactForm />
            </div>
        </Layout>
    );
}

import React, { useState } from 'react';
import styles from './styles.module.css';

interface ContactFormData {
    name: string;
    email: string;
    category: string;
    message: string;
}

interface ContactFormProps {
    onSubmissionSuccess?: () => void;
}

export default function ContactForm({ onSubmissionSuccess }: ContactFormProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        category: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setIsSubmitted(true);
            if (onSubmissionSuccess) {
                onSubmissionSuccess();
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={styles.successMessage}>
                <h2>Thank you for your submission!</h2>
                <p>We will contact you as soon as possible.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className={styles.input + " " + styles.select}
              >
                <option value="">Select a category</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="remote-staffing">Remote Staffing</option>
                <option value="job-applications">Job Applications</option>
                <option value="sales">Sales</option>
                <option value="technical-support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                />
            </div>

            {error && (
                <div className={styles.error}>
                    {error}
                </div>
            )}

            <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}

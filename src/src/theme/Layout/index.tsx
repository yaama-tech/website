import React, { type ReactNode, useEffect } from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
    PageMetadata,
    SkipToContentFallbackId,
    ThemeClassNames,
} from '@docusaurus/theme-common';
import { useKeyboardNavigation } from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import type { Props } from '@theme/Layout';
import styles from './styles.module.css';
import klaroConfig from '../../components/assets/config.klaro.js';

// TypeScript declarations for Klaro and tracking
declare global {
    interface Window {
        _paq: any[];
        enableTracking: boolean;
        klaro: any;
        klaroConfig: any;
    }
}

export default function Layout(props: Props): ReactNode {
    const {
        children,
        noFooter,
        wrapperClassName,
        // Not really layout-related, but kept for convenience/retro-compatibility
        title,
        description,
    } = props;

    useKeyboardNavigation();

    useEffect(() => {
        const _paq = window._paq = window._paq || [];
        if (window.enableTracking === true) {
            _paq.push(['setCustomUrl', location.pathname]);
            _paq.push(['setDocumentTitle', document.title]);
            _paq.push(['trackPageView']);
        }
        import('klaro').then(Klaro => {
            // we assign the Klaro module to the window, so that we can access it in JS
            window.klaro = Klaro;
            window.klaroConfig = klaroConfig;
            Klaro.setup(klaroConfig);
            // we set up Klaro with the config
            const klaroCookie = window.document.cookie.match(new RegExp('(^| )klaro=([^;]+)'));
            // if klaroCookie is set, take no further action
            if (!klaroCookie) {
                Klaro.show();
            }
        });
    }, []);

    return (
        <LayoutProvider>
            <PageMetadata title={title} description={description} />

            <SkipToContent />

            <AnnouncementBar />

            <Navbar />

            <div
                id={SkipToContentFallbackId}
                className={clsx(
                    ThemeClassNames.wrapper.main,
                    styles.mainWrapper,
                    wrapperClassName,
                )}>
                <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
                    {children}
                </ErrorBoundary>
            </div>

            {!noFooter && <Footer />}
        </LayoutProvider>
    );
}

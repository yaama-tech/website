const klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
        theme: ['dark', 'right'],
        green1: '#ff7300',
        blue1: '#ff7300'
    },
    noAutoLoad: false,
    htmlTexts: true,
    embedded: false,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: true,
    hideLearnMore: false,
    noticeAsModal: false,
    lang: 'en',
    translations: {
        en: {
            consentNotice: {
                description: 'We use cookies to analyze site usage and improve your experience.',
            },
            purposes: {
                analytics: 'Analytics'
            }
        }
    },
    services: [
        {
            name: 'google-analytics',
            default: false,
            title: 'Google Analytics',
            description: 'Helps us understand how visitors interact with our website',
            purposes: ['analytics'],
            cookies: [
                // Google Analytics cookies - using more specific patterns
                ['_ga', '/', '.yaama.tech'],
                [/^_ga_.*/, '/', '.yaama.tech'],
                ['_gid', '/', '.yaama.tech'],
                ['_gat', '/', '.yaama.tech'],
                ['_gat_gtag_G_MFGM898WXT', '/', '.yaama.tech'],
                ['__utma', '/', '.yaama.tech'],
                ['__utmb', '/', '.yaama.tech'],
                ['__utmc', '/', '.yaama.tech'],
                ['__utmz', '/', '.yaama.tech'],
            ],
            callback: function (consent, service) {
                if (consent === true) {
                    // When consent is given, Klaro will automatically activate the script
                    // We just need to initialize gtag after a small delay to ensure the script is loaded
                    setTimeout(function () {
                        if (typeof window.gtag === 'undefined') {
                            window.dataLayer = window.dataLayer || [];
                            function gtag() { window.dataLayer.push(arguments); }
                            window.gtag = gtag;
                            gtag('js', new Date());
                            gtag('config', 'G-MFGM898WXT', {
                                'anonymize_ip': false,
                                'send_page_view': true
                            });
                        }
                    }, 100);
                } else if (consent === false) {
                    // Disable tracking if gtag exists
                    if (typeof window.gtag === 'function') {
                        window.gtag('config', 'G-MFGM898WXT', {
                            'send_page_view': false
                        });
                    }

                    // Clear all GA cookies
                    const domains = ['yaama.tech', '.yaama.tech', window.location.hostname];
                    const gaCookies = document.cookie.match(/(_ga[^=]*|__utm[^=]*)/g) || [];

                    gaCookies.forEach(cookieName => {
                        domains.forEach(domain => {
                            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
                        });
                    });
                }
            },
            required: false,
            optOut: true,
            onlyOnce: false
        }
    ]
};

export default klaroConfig;
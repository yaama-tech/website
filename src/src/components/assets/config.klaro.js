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
    hideLearnMore: true,
    noticeAsModal: false,
    lang: 'en',
    translations: {
        en: {
            consentNotice: {
                description: 'We use cookies for {purposes} to enhance the user experience.',
            }
        }
    },
    services: [
        {
            name: 'google-analytics',
            default: false,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                // Google Analytics cookies
                [/^_ga.*$/, '/', 'yaama.tech'],
                [/^_gid.*$/, '/', 'yaama.tech'],
                ['_gat', '/', 'yaama.tech'],
                [/^__utm.*$/, '/', 'yaama.tech'],
            ],
            callback: function (consent, service) {
                // This callback is called when consent is given or revoked
                if (consent === true) {
                    // Google Analytics will be loaded by the script tag
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'G-MFGM898WXT');
                }
            },
            required: true,
            optOut: false,
            onlyOnce: true
        }
    ]
};

export default klaroConfig;
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
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    lang: 'en',
    services: [
        {
            name: 'Matomo',
            default: false,
            title: 'Matomo',
            purposes: ['analytics'],
            cookies: [
                [/^_pk_.*$/, '/', 'blog.bitexpert.de'],
            ],
            callback: function (consent, service) {
                // @TODO: Process consent here, e.g. load 3rd party JS
            },
            required: false,
            optOut: false,
            onlyOnce: true
        }
    ]
};

export default klaroConfig;
const buildPageHelmet = (pageTitle, canonical, description) => {
    return {
        pageTitle: pageTitle,
        canonical: canonical,
        description: description,
    }
}

const PageHelmets = {
    home: buildPageHelmet(
        'TEDxSFU 2022 is coming soon',
        'https://www.tedxsfu.com/',
        'TEDxSFU is an independently organized event organized by students and alumni volunteers at Simon Fraser University. Our goal is to bring people together to share a TED-like experience while promoting ideas worth spreading.'
    ),
    opportunity: buildPageHelmet(
        'Be a part of TEDxSFU',
        'https://www.tedxsfu.com/opportunity',
        'TEDxSFU is an independently organized event organized by students and alumni volunteers at Simon Fraser University. Join us and be a part of TEDxSFU Conference.'
    ),
    partner: buildPageHelmet(
        'Become partners for TEDxSFU 2022',
        'https://www.tedxsfu.com/partner',
        'Connect with your target audience through shared values and interests engagingly and thoughtfully. The TEDxSFU Conference is our signature event driven by ideas worth spreading. Every year over 300 people attend in support of our mission.'
    ),
};

export default PageHelmets;
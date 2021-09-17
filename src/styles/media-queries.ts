
const screens = {
    mobile: (styles) => (
        `/* Smartphones (portrait and landscape) ----------- */
        @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
            ${styles}
        }`
    ),
    tablet: (styles) => (
        `
        /* iPads (portrait and landscape) ----------- */
        @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
            ${styles}
        }
        `
    ),
    desktop: (styles) => (
        `
        /* Desktops and laptops ----------- */
        @media only screen  and (min-width : 1224px) {
            ${styles}
        }
        `
    ),
    large: (styles) => (
        `
        /* Large screens ----------- */
        @media only screen  and (min-width : 1824px) {
            ${styles}
        }
        `
    )
}

const mediaComponent = (screen, styles) => {
    return (
        screens[screen](styles)
    )
}

export default mediaComponent
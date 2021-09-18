const screens = {
  mobile: (styles: string) => (
        `/* Smartphones (portrait and landscape) ----------- */
        @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
            ${styles}
        }`
  ),
  tablet: (styles: string) => (
        `
        /* iPads (portrait and landscape) ----------- */
        @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
            ${styles}
        }
        `
  ),
  desktop: (styles: string) => (
        `
        /* Desktops and laptops ----------- */
        @media only screen  and (min-width : 1224px) {
            ${styles}
        }
        `
  ),
  large: (styles: string) => (
        `
        /* Large screens ----------- */
        @media only screen  and (min-width : 1824px) {
            ${styles}
        }
        `
  )
}

const mediaComponent = (screen: string, styles: string): string => {
  return (
    screens[screen](styles)
  )
}

export default mediaComponent

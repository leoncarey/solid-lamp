import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string

        colors: {
            primary: string
            secondary: string
            tertiary: string
    
            black: string
            white: string
            sub_white: string

            color_font_1: string
            color_font_2: string
            color_font_3: string

            hover_link_1: string
            hover_link_2: string

            border_opacity: string
            border_footer: string

            links_footer: string

            danger_color: string
        }

        fonts: {
            font_primary: string
            font_secondary: string
        }

        inputs: {
            border_primary: string,
            background_primary: string,
            color: string,
            placeholde_color: string
        }

        buttons: {
            box_color: string,
            background: string,
            background_hover: string
        }
    }
}
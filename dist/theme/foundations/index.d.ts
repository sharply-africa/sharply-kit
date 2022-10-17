declare const foundations: {
    breakpoints: string[];
    colors: {
        background: string;
        black: string;
        brown: string;
        current: string;
        cyan: string;
        green: string;
        heading: string;
        primary: string;
        primaryLight: string;
        text: string;
        transparent: string;
        white: string;
        yellow: string;
        red: {
            50: string;
            100: string;
            200: string;
            300: string;
        };
        whiteAlpha: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blackAlpha: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    };
    mq: {};
    radii: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    shadows: {
        default: string;
    };
    space: any;
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        normal: string;
        none: number;
        default: number;
        shorter: number;
        short: number;
        base: number;
        tall: number;
        taller: string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
    };
    fonts: {
        heading: string;
        body: string;
    };
    fontSizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    textAlign: {
        left: string;
        center: string;
        right: string;
    };
    fontWeights: {
        hairline: number;
        thin: number;
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
        black: number;
    };
};

export { foundations as default };

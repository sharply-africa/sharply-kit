declare const components: {
    buttons: {
        solid: {
            borderRadius: string;
            fontWeight: string;
            lineHeight: string;
            '&:disabled': {
                opacity: number;
                cursor: string;
            };
        };
        outline: {
            bg: string;
            border: string;
            borderColor: string;
            borderRadius: string;
            fontWeight: string;
            lineHeight: string;
            '&:disabled': {
                opacity: number;
                cursor: string;
            };
        };
        plain: {
            background: string;
            color: string;
            display: string;
            lineHeight: string;
            px: number;
            py: number;
        };
        iconSquare: {
            alignItems: string;
            background: string;
            borderRadius: string;
            height: number;
            justifyContent: string;
            px: number;
            py: number;
            width: number;
            ' > svg': {
                fill: string;
            };
        };
    };
    form: {
        inputAlternate: {
            backgroundColor: string;
        };
    };
    text: {
        heading: {
            color: string;
            fontFamily: string;
            fontSize: string[];
            fontWeight: string;
            lineHeight: string;
        };
        text: {
            color: string;
            fontFamily: string;
            fontSize: string[];
            fontWeight: string;
            lineHeight: string;
        };
        thickText: {
            color: string;
            fontWeight: string;
            fontFamily: string;
            fontSize: string[];
            lineHeight: string;
        };
        errorText: {
            color: string;
            fontFamily: string;
            fontSize: string[];
            fontWeight: string;
            lineHeight: string;
        };
    };
};

export { components as default };

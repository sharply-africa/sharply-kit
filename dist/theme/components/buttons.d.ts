declare const buttons: {
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

export { buttons };

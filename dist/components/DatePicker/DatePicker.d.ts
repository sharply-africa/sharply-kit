declare const DatePicker: ({ onChange, placeholder, dayPickerProps, ...props }: {
    [x: string]: any;
    onChange?: () => void;
    placeholder?: string;
    dayPickerProps?: {};
}) => JSX.Element;

export { DatePicker as default };

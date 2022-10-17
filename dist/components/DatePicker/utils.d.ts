declare const currentYear: number;
declare const fromMonth: Date;
declare const toMonth: Date;
declare const YearMonthForm: ({ date, localeUtils, onChange }: {
    date: any;
    localeUtils: any;
    onChange: any;
}) => JSX.Element;
declare const parseDate: (str: any, format: any, locale: any) => Date;
declare const formatDate: (date: any, format: any, locale: any) => string;

export { YearMonthForm, currentYear, formatDate, fromMonth, parseDate, toMonth };

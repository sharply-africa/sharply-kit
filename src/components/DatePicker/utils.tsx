import React from 'react';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

export const currentYear = new Date().getFullYear();
export const fromMonth = new Date();
export const toMonth = new Date(currentYear - 70, 11);

export const YearMonthForm = ({ date, localeUtils, onChange }) => {
  const months = localeUtils.getMonths();

  const years = [];
  for (let i = fromMonth.getFullYear(); i >= toMonth.getFullYear(); i -= 1) {
    years.push(i);
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => (
          <option key={month} value={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
};

export const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, null, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
};

export const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, format, { locale });
};

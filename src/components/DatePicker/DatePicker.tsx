import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Input } from '~src/components/Input';
import {
  YearMonthForm,
  formatDate,
  parseDate,
  fromMonth,
  toMonth,
} from './utils';

const DatePicker = ({
  onChange = () => {},
  placeholder = 'yyyy-mm-dd',
  ...props
}) => {
  const [month, setMonth] = useState(fromMonth);
  const FORMAT = 'yyyy-MM-dd';

  const handleYearMonthChange = (newMonth) => {
    setMonth(newMonth);
  };

  return (
    <DayPickerInput
      format={FORMAT}
      formatDate={formatDate}
      keepFocus={false}
      onDayChange={onChange}
      parseDate={parseDate}
      placeholder={placeholder}
      style={{ display: 'block' }}
      dayPickerProps={{
        month,
        fromMonth,
        toMonth,
        captionElement: ({ date, localeUtils }) => (
          <YearMonthForm
            date={date}
            localeUtils={localeUtils}
            onChange={handleYearMonthChange}
          />
        ),
        disabledDays: { after: new Date() },
        ...props,
      }}
      {...props}
      component={(inputProps) => <Input readOnly {...inputProps} />}
    />
  );
};

export default DatePicker;

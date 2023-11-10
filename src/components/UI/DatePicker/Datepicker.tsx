import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale';
// import CustomInput from './CustomInput/CustomInput';

interface IDatePickProps {
  value: Date | null;
  onChange: (value: Date | null) => void;
}

// interface IExampleCustomInputProps {
//   value: Date | null;
//   onClick?: () => void;
// }

// const ExampleCustomInput = forwardRef(({ value, onClick }: IExampleCustomInputProps, ref: Ref<HTMLButtonElement>) => (
//   <button className='example-custom-input' onClick={onClick} ref={ref}>
//     {value}
//   </button>
// ));

const Datepicker: React.FC<IDatePickProps> = ({ value, onChange }) => {
  const handleDateChange = (date: Date | null) => {
    onChange(date);
  };

  return (
    <DatePicker
      showIcon
      closeOnScroll={true}
      selected={value}
      onChange={handleDateChange}
      dateFormat='dd/MM/yyyy'
      placeholderText='Выберите дату'
      locale={ru}
      // customInput={<ExampleCustomInput />}
      // customInput={<CustomInput value={value} />}
    />
  );
};

export default Datepicker;

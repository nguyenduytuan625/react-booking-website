import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './Modal.module.css';

let num = 0;

const Modal = props => {
  const [dateRange, setDateRange] = useState({ startDate: new Date(), endDate: new Date() });

  const dateRangeHandler = (e) => {
    num++;
    // console.log(num, e.selection);
    if (num % 2) {
      setDateRange(prevDateRange => {
        props.onUpdateInputValue({ startDate: e.selection.startDate, endDate: e.selection.startDate });
        return { startDate: e.selection.startDate, endDate: e.selection.startDate };
      });
    }
    else {
      setDateRange(prevDateRange => {
        props.onUpdateInputValue({ ...prevDateRange, endDate: e.selection.endDate });
        return { ...prevDateRange, endDate: e.selection.endDate };
      });
    }
  };

  return (
    <DateRange
      className={styles.modal}
      ranges={[{ startDate: dateRange.startDate, endDate: dateRange.endDate, key: 'selection' }]}
      onChange={dateRangeHandler}
    />
  );
};

export default Modal;
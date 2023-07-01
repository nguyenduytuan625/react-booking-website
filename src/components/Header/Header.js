import React, { useState } from 'react';
import styles from './Header.module.css';
import Modal from './Modal';

const Header = props => {
  const [hasModal, setHasModal] = useState(false);
  const [dateRange, setDateRange] = useState({ startDate: new Date(), endDate: new Date() });

  const searchHandler = (e) => {
    e.preventDefault();
    window.location.replace('/search');
  };
  const modalHandler = () => {
    hasModal ? setHasModal(false) : setHasModal(true);
  };
  const changeDateHandler = (newDateRange) => {
    setDateRange(prevDateRange => {
      return newDateRange;
    });
  };

  return (
    <div className={styles.header}>
      <h2 className={styles['mb-1']}>A lifetime of discounts? It's Genius.</h2>
      <p className={styles['mb-1']}>Get rewarded for your travels - unlock instant savings of 10% or more with a free account</p>
      <button className={`${styles.btn} ${styles['mb-3']}`}>Sign in / Register</button>
      <form className={styles['form-control']}>
        <div>
          <i className='fa fa-bed' />
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className={styles.date}>
          <i className='fa fa-calendar' />
          <input type="text" placeholder={`${dateRange.startDate.toLocaleDateString()} to ${dateRange.endDate.toLocaleDateString()}`} onClick={modalHandler} />
          {hasModal ? <Modal onUpdateInputValue={changeDateHandler} /> : ''}
        </div>
        <div>
          <i className='fa fa-male'></i>
          <input type="text" placeholder="1 adult . 0 children . 0 room" />
        </div>
        <input type='submit' className={styles.btn} onClick={searchHandler} value='Search' />
      </form>
    </div>
  );
};

export default Header;
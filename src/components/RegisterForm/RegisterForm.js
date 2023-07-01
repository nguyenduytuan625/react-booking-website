import styles from './RegisterForm.module.css';

const RegisterForm = props => {
  const subscribeHandler = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.registerform}>
      <h2 className={styles['mb-1']}>Save time, save money!</h2>
      <p className={styles['mb-1']}>Sign up and we'll send the best deal to you</p>
      <form className={styles['form-control']}>
        <input type='text' size='40' placeholder='Your Email' />
        <input type='submit' value='Subscribe' className={styles.btn} onClick={subscribeHandler} />
      </form>
    </div>
  );
};

export default RegisterForm;
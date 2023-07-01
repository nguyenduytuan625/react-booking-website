import styles from './HotelItem.module.css';

const HotelItem = props => {
  return (
    <div className={styles.hotelitem}>
      <img src={props.image_url} />
      <a className={styles['mb-1']} href='/detail' >{props.name}</a>
      <p className={styles['mb-1']}>{props.city}</p>
      <p className={styles['mb-1']}><b>Starting from ${props.price}</b></p>
      <p className={styles['mb-1']}><span>{props.rate}</span> {props.type}</p>
    </div>
  );
};

export default HotelItem;
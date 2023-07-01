import styles from './HotelByTypeItem.module.css';

const HotelByTypeItem = props => {
  return (
    <div className={styles.hotelbytypeitem}>
      <img src={props.image} />
      <h3><b>{props.name}</b></h3>
      <p>{`${props.count} hotels`}</p>
    </div>
  );
};

export default HotelByTypeItem;
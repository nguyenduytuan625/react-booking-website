import styles from './CityItem.module.css';

const CityItem = props => {
  return (
    <div className={styles.cityitem}>
      <img src={props.image} />
      <div className={styles.textbox}>
        <h2>{props.name}</h2>
        <h3>{props.subText}</h3>
      </div>
    </div>
  );
};

export default CityItem;
import styles from './SearchListItem.module.css';

const SearchListItem = props => {
  return (
    <div className={styles.searchlistitem}>
      <img src={props['image_url']} />
      <div className={styles.content}>
        <a href='#'>{props.name}</a>
        <p>{props.distance}</p>
        <p className={styles['bg-green']}>{props.tag}</p>
        <p><b>{props.description}</b></p>
        <p>{props.type}</p>
        <p className={`${styles['text-green']} ${props['free_cancel'] ? '' : styles.hidden}`}>Free Cancelation</p>
        <p className={`${styles.message} ${props['free_cancel'] ? '' : styles.hidden}`}>You cancel later, so lock in this great price today!</p>
      </div>
      <div className={styles.rating}>
        <div>
          <b>{props['rate_text']}</b>
          <span>{props.rate}</span>
        </div>
        <p className={styles.price}>${props.price}</p>
        <p className={styles.text}>Includes taxes and fees</p>
        <button>See availability</button>
      </div>
    </div>
  );
};

export default SearchListItem;
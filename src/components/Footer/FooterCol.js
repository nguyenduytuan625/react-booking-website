import styles from './FooterCol.module.css';

const FooterCol = props => {
  const itemsList = props['col_values'].map((text, i) =>
    <div key={i}>{text}</div>);

  return (
    <div className={styles.footercol}>
      {itemsList}
    </div>
  );
};

export default FooterCol;
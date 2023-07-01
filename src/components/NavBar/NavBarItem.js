import styles from './NavBarItem.module.css';

const NavBarItem = props => {
  return (
    <div className={`${styles.navbaritem} ${props.active ? styles.active : ''}`}>
      <i className={`fa ${props.icon}`} />
      <span>{props.type}</span>
    </div>
  );
};

export default NavBarItem;
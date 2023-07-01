import NavBarItem from "./NavBarItem";
import styles from './NavBar.module.css';

const DUMMY_NAVBAR_DATA = [
  {
    "type": "Stays",
    "icon": "fa-bed",
    "active": true
  },
  {
    "type": "Flights",
    "icon": "fa-plane",
    "active": false
  },
  {
    "type": "Car rentals",
    "icon": "fa-car",
    "active": false
  },
  {
    "type": "Attractions",
    "icon": "fa-camera",
    "active": false
  },
  {
    "type": "Airport taxis",
    "icon": "fa-taxi",
    "active": false
  }
];

const NavBar = props => {
  const navBarList = DUMMY_NAVBAR_DATA.map((item, i) =>
    <NavBarItem type={item.type} icon={item.icon} active={item.active} key={i} />);
  return (
    <div className={styles.navbar}>
      <div className={styles.heading}>
        <p>Booking Website</p>
        <button className={styles.btn}>Register</button>
        <button className={styles.btn}>Login</button>
      </div>
      <ul className={styles.content}>
        {navBarList}
      </ul>
    </div>
  );
};

export default NavBar;
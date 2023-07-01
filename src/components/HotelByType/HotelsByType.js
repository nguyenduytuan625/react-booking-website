import HotelByTypeItem from "./HotelByTypeItem";
import styles from './HotelsByType.module.css';

const DUMMY_TYPE_DATA = [
  {
    "name": "Hotels",
    "count": 233,
    "image": "./images/type_1.webp"
  },
  {
    "name": "Apartments",
    "count": 2331,
    "image": "./images/type_2.jpg"
  },
  {
    "name": "Resorts",
    "count": 2331,
    "image": "./images/type_3.jpg"
  },
  {
    "name": "Villas",
    "count": 2331,
    "image": "./images/type_4.jpg"
  },
  {
    "name": "Cabins",
    "count": 2331,
    "image": "./images/type_5.jpg"
  }
];

const HotelsByType = props => {
  const hotelsList = DUMMY_TYPE_DATA.map((item, i) =>
    <HotelByTypeItem name={item.name} count={item.count} image={item.image} key={i} />);

  return (
    <div className={styles.hotels}>
      <h2><b>Browse by property type</b></h2>
      <ul>
        {hotelsList}
      </ul>
    </div>
  );
};

export default HotelsByType;
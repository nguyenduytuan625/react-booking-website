import HotelItem from "./HotelItem";
import styles from './Hotels.module.css';

const DUMMY_HOTELS_DATA = [
  {
    "name": "Aparthotel Stare Miasto",
    "city": "Madrid",
    "price": 120,
    "rate": 8.9,
    "type": "Excellent",
    "image_url": "./images/hotel_1.webp"
  },
  {
    "name": "Comfort Suites Airport",
    "city": "Austin",
    "price": 140,
    "rate": 9.3,
    "type": "Exceptional",
    "image_url": "./images/hotel_2.jpg"
  },
  {
    "name": "Four Seasons Hotel",
    "city": "Lisbon",
    "price": 99,
    "rate": 8.8,
    "type": "Excellent",
    "image_url": "./images/hotel_3.jpg"
  },
  {
    "name": "Hilton Garden Inn",
    "city": "Berlin",
    "price": 105,
    "rate": 8.9,
    "type": "Excellent",
    "image_url": "./images/hotel_4.jpg"
  }
];

const Hotels = props => {
  const hotelsList = DUMMY_HOTELS_DATA.map((item, i) =>
    <HotelItem name={item.name} city={item.city} price={item.price} rate={item.rate} type={item.type} image_url={item.image_url} key={i} />);

  return (
    <div className={styles.hotels}>
      <h2>Homes guests love</h2>
      <ul>
        {hotelsList}
      </ul>
    </div>
  );
};

export default Hotels;
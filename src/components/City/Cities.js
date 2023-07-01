import CityItem from "./CityItem";
import styles from './Cities.module.css';

const DUMMY_CITY_DATA = [
  {
    "name": "Dublin",
    "subText": "123 properties",
    "image": "./images/city_1.webp"
  },
  {
    "name": "Reno",
    "subText": "533 properties",
    "image": "./images/city_2.webp"
  },
  {
    "name": "Austin",
    "subText": "532 properties",
    "image": "./images/city_3.webp"
  }
];

const Cities = props => {
  const citiesList = DUMMY_CITY_DATA.map((item, i) =>
    <CityItem name={item.name} subText={item.subText} image={item.image} key={i} />);

  return (
    <ul className={styles.cities}>
      {citiesList}
    </ul>
  );
};

export default Cities;
import styles from './Details.module.css';

const DUMMY_DETAIL_DATA = {
  "name": "Tower Street Apartments",
  "address": "Elton St 125 New york",
  "distance": "Excellent location - 500m from center",
  "price": "Book a stay over $114 at this property and get a free airport taxi",
  "photos": [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg"
  ],
  "title": "Stay in the heart of City",
  "description": "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  "nine_night_price": 955
};

const Details = props => {
  const imgItemsList = DUMMY_DETAIL_DATA.photos.map((item, i) =>
    <img src={item} key={i} />);

  return (
    <div className={styles.details}>
      <div className={styles.heading}>
        <h3>{DUMMY_DETAIL_DATA.name}</h3>
        <button>Reserve or Book Now!</button>
      </div>
      <p className={styles.address}><i className='fa fa-map-marker'></i> {DUMMY_DETAIL_DATA.address}</p>
      <p className={styles.distance}>{DUMMY_DETAIL_DATA.distance}</p>
      <p className={styles.price}>{DUMMY_DETAIL_DATA.price}</p>
      <div className={styles['img-container']}>
        {imgItemsList}
      </div>
      <div className={styles['content-container']}>
        <div>
          <h3>{DUMMY_DETAIL_DATA.title}</h3>
          <p className={styles.description}>{DUMMY_DETAIL_DATA.description}</p>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>Perfect for a 9-night stay!</p>
          <p className={styles.location}>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
          <p className={styles.price}><b>$945</b> (9 nights)</p>
          <button>Reserve or Book Now!</button>
        </div>
      </div>

    </div>
  );
};

export default Details;
import styles from './SearchPopup.module.css';

const SearchPopup = props => {
  return (
    <div className={styles.searchpopup}>
      <h3>Search</h3>
      <form>
        <div>
          <label id='destination'>Destination</label> <br />
          <input type='text' id='destination' />
        </div>
        <div>
          <label id='check-in'>Check-in Date</label> <br />
          <input type='text' placeholder='06/24/2023 to 06/24/2023' id='check-in' />
        </div>
        <p>Options</p>
        <ul>
          <li>
            <label>Min price per night</label>
            <input type='text' />
          </li>
          <li>
            <label>Max price per night</label>
            <input type='text' />
          </li>
          <li>
            <label>Adult</label>
            <input type='number' placeholder='1' />
          </li>
          <li>
            <label>Children</label>
            <input type='number' placeholder='0' />
          </li>
          <li>
            <label>Room</label>
            <input type='number' placeholder='1' />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SearchPopup;
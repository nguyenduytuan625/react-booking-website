import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SearchList from "../../components/SearchList/SearchList";
import SearchPopup from "../../components/SearchPopup/SearchPopup";
import styles from './Search.module.css';

const Search = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <SearchPopup />
        <SearchList />
      </div>
      <Footer />
    </div>
  );
};

export default Search;

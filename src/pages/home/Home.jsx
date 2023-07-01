import './home.css';
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Cities from "../../components/City/Cities";
import HotelsByType from "../../components/HotelByType/HotelsByType";
import Hotels from "../../components/Hotel/Hotels";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<Cities />
			<HotelsByType />
			<Hotels />
			<RegisterForm />
			<Footer />
		</div>
	);
};

export default Home;

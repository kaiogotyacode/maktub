import Carousel from "../../components/Carousel/Carousel";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import WhatsApp from "../../components/WhatsApp/WhatsApp";

function Home() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Carousel />
      <WhatsApp />
    </>
  );
}

export default Home;

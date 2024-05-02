import About from "../About/About";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-16">
        <About />
      </div>
      <Services />
      <div className="my-16">
        <Info />
      </div>
      <div className="my-16">
        <PopularProducts />
      </div>
      <div className="my-16">
        <Team />
      </div>
    </div>
  );
};

export default Home;

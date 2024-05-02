import { FaStar } from "react-icons/fa6";
import cardImg1 from "../../../assets/images/products/1.png";
import cardImg2 from "../../../assets/images/products/2.png";
import cardImg3 from "../../../assets/images/products/3.png";
import cardImg4 from "../../../assets/images/products/4.png";
import cardImg5 from "../../../assets/images/products/5.png";
import cardImg6 from "../../../assets/images/products/6.png";

const PopularProducts = () => {
  return (
    <div>
      <section className="text-center my-16 mt-24 space-y-4">
        <h3 className="text-orange-500 font-bold">Popular Products</h3>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 border">
          <figure className="rounded-lg bg-gray-50 p-12">
            <img src={cardImg1} />
          </figure>
          <div className="card-body items-center text-center">
            <span className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <h2 className="card-title text-2xl">Cools Led Light</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 border">
          <figure className="rounded-lg bg-gray-50 p-12">
            <img src={cardImg2} />
          </figure>
          <div className="card-body items-center text-center">
            <span className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <h2 className="card-title text-2xl">Cools Led Light</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 border">
          <figure className="rounded-lg bg-gray-50 p-12">
            <img src={cardImg3} />
          </figure>
          <div className="card-body items-center text-center">
            <span className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <h2 className="card-title text-2xl">Cools Led Light</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 border">
          <figure className="rounded-lg bg-gray-50 p-12">
            <img src={cardImg4} />
          </figure>
          <div className="card-body items-center text-center">
            <span className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <h2 className="card-title text-2xl">Cools Led Light</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 border">
          <figure className="rounded-lg bg-gray-50 p-12">
            <img src={cardImg5} />
          </figure>
          <div className="card-body items-center text-center">
            <span className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <h2 className="card-title text-2xl">Cools Led Light</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card bg-base-100 border">
          <figure className="rounded-lg bg-gray-50 p-12">
            <img src={cardImg6} />
          </figure>
          <div className="card-body items-center text-center">
            <span className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <h2 className="card-title text-2xl">Cools Led Light</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
      </div>
      <div className="text-center my-12">
        <button className="btn btn-outline bg-orange-500 hover:bg-orange-600 text-white">
          More Services
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;

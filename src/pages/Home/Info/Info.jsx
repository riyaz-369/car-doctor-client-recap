import { FaMapLocationDot } from "react-icons/fa6";
import { FcCalendar, FcCallback } from "react-icons/fc";

const Info = () => {
  return (
    <div className="bg-black py-20 rounded-lg flex justify-around">
      <div className="text-white flex items-center gap-2">
        <div className="text-5xl">
          <FcCalendar />
        </div>
        <div>
          <p className="font-bold">We are open monday-friday</p>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="text-white flex items-center gap-2">
        <div className="text-5xl">
          <FcCallback />
        </div>
        <div>
          <p className="font-bold">Have a question?</p>
          <h3 className="text-2xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="text-white flex items-center gap-2">
        <div className="text-5xl text-orange-500">
          <FaMapLocationDot />
        </div>
        <div>
          <p className="font-bold">Need a repair? our address</p>
          <h3 className="text-2xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Info;

import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";

import facebook from "../../../assets/socialIcon/Facebook.png";
import x from "../../../assets/socialIcon/X.png";
import linkedIn from "../../../assets/socialIcon/LinkedIn.png";
import insta from "../../../assets/socialIcon/Instagram.png";

const Team = () => {
  return (
    <div>
      <section className="text-center my-16 mt-24 space-y-4">
        <h3 className="text-orange-500 font-bold">Team</h3>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 rounded-lg border">
          <figure className="px-6 pt-6">
            <img className="rounded-lg" src={team1} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="flex">
              <img className="w-9" src={facebook} />
              <img className="w-9" src={x} />
              <img className="w-9" src={linkedIn} />
              <img className="w-9" src={insta} />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 rounded-lg border">
          <figure className="px-6 pt-6">
            <img className="rounded-lg" src={team2} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="flex">
              <img className="w-9" src={facebook} />
              <img className="w-9" src={x} />
              <img className="w-9" src={linkedIn} />
              <img className="w-9" src={insta} />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 rounded-lg border">
          <figure className="px-6 pt-6">
            <img className="rounded-lg" src={team3} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="flex">
              <img className="w-9" src={facebook} />
              <img className="w-9" src={x} />
              <img className="w-9" src={linkedIn} />
              <img className="w-9" src={insta} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

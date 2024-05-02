import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg" />
          <img
            src={parts}
            className="absolute w-1/2 rounded-lg right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-xl text-orange-600 font-bold mb-6">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don not look even slightly
            believable.
          </p>
          <p className="mb-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don not look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;

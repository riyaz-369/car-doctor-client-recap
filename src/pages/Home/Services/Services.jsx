import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const services = useServices();
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl text-orange-600">Services</h3>
        <h3 className="text-5xl font-bold">Our Services Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words <br /> which don not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center my-12">
        <button className="btn btn-outline bg-orange-500 hover:bg-orange-600 text-white">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;

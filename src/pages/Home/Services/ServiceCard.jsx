// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
  // eslint-disable-next-line react/prop-types
  const { title, img, price } = service;

  return (
    <div className="card bg-base-100 border">
      <figure className="p-6">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-orange-600 font-bold">Price: ${price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

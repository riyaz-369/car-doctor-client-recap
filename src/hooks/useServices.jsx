import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/services").then((data) => {
      setServices(data.data);
    });
  }, []);

  return services;
};

export default useServices;

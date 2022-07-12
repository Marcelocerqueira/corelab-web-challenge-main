import { useEffect, useState } from "react";
import { getmoments } from "../../lib/api";
import { Link } from "react-router-dom";

import { Button, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getmoments();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);

  console.log({ vehicles });

  return (
    <div className={styles.Vehicles}>
      <div>
        <main className={styles.main}>
          <h2>Registro de  Veiculos</h2>
          
          <label htmlFor="">
            Nome:
            <input type="text" />
          </label>
          <label htmlFor="">
            Marca:
          <input type="text" />
          </label>
          <label htmlFor="">
            Cor:
            <input type="text" />
          </label>
          <label htmlFor="">
            Ano:
            <input type="text" />
          </label>
          <label htmlFor="">
            Placa:
          <input type="text" />
          </label>

          <Link to="/">
          <Button text="Salvar" onClick={() => {}} />
          </Link>
        
        </main>
        </div>
       
    </div>
  );
};

export default VehiclesPage;

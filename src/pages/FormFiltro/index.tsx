import { useEffect, useState } from "react";
import { getmoments } from "../../lib/api";
import { Button, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";

const FormFiltro = () => {
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
      <main className={styles.main}>
        <h2>Pesquisar Veículo</h2>

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

        <div className={styles.valor}>
          <label htmlFor="">
            Preço mín.
            <input type="text" />
          </label>
          <label htmlFor="">
            Preço mn.
            <input type="text" />
          </label>
        </div>

        <Button text="Salvar" onClick={() => {}} />
      </main>
    </div>
  );
};

export default FormFiltro;

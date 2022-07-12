import { useEffect, useState } from "react";
import { getmoments } from "../../lib/api";
import { Link } from "react-router-dom";

import { BsSearch, BsSliders } from "react-icons/bs";

import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getmoments();
      setVehicles(payload);
    };

    fetchVehicles();
    async function handleGetDados() {
      const response = await api.get<any>(`moments/1`);
      console.log("teste", response);
    }
    handleGetDados();
  }, []);

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div className={styles.wrap}>
            <BsSearch />
            <Search
              placeholder="Buscar"
              value={search}
              onChange={(e: any) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          <Link to="/FormFiltro">
            <div className={styles.icon}>
              <BsSliders />
            </div>
          </Link>
        </div>

        <Link to="/RegisterVehicles">
          <Button text="Adicionar" onClick={() => {}} />
        </Link>

        <div className={styles.container}>
          {[...Array(4)].map(() => (
            <Card title="Sandero Stepway">
              <p>Price: 22000</p>
              <p>Description: Carro usado por 2 anos...</p>
              <p>Year: 2018</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VehiclesPage;

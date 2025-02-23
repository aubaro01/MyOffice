import { useEffect, useState } from "react";
import axios from "../configure/axiosConfig";

function TotalClientes() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get("http://localhost/api/total-clientes")
      .then((response) => setTotal(response.data.total))
      .catch((error) => console.error("Erro ao buscar clientes:", error));
  }, []);

  return (
    <div>
      <h2>Total de Clientes: {total}</h2>
    </div>
  );
}

export default TotalClientes;

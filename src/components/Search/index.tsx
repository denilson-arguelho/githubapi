import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { PerfilDTO } from "../../models/perfilDTO";
import ResultPerfil from "../ResultPerfil";
import Loader from "../Loader";

export type FormData = {
  name: string;
};

const Search = () => {
/*   const [inputName, setInputName] = useState(""); */
  const [formData, setFormData] = useState<FormData>({ name: "" });
  const [perfil, setPerfil] = useState<PerfilDTO | undefined>();
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [erro, setErro] = useState<string | undefined>();

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();

    setLoading(true);

    axios
      .get(`https://api.github.com/users/${formData.name}`)
      .then((resp) => {
        setPerfil(resp.data);
        setShowResult(true);
        setErro(undefined); // Resetar o estado de erro
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            setErro("Usuário não encontrado");
          } else {
            setErro("Erro ao buscar usuário");
          }
        } else {
          setErro("Erro de conexão");
        }
        setShowResult(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div className="container-search-perfil">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            name="name"
            value={formData.name}
            type="text"
            placeholder="Usuário Github"
            onChange={handleInputChange}
          />
          <button className="bt-generic" type="submit">
            Encontrar
          </button>
        </form>
      </div>
      <div className="result-perfil">
        {loading && <Loader />}

        {showResult && perfil && <ResultPerfil perfil={perfil} />}
        {erro && <h2>{erro}</h2>}
      </div>
    </>
  );
};

export default Search;

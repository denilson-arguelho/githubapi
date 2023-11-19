import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { PerfilDTO } from "../../models/perfilDTO";
import ResultPerfil from "../ResultPerfil";
import Loader from "../Loader";

export type FormData = {
  name: string;
};

const Search = () => {
  const [inputName, setInputName] = useState("");
  const [formData, setFormData] = useState<FormData>({ name: "" });
  const [perfil, setPerfil] = useState<PerfilDTO>();
  const [loading, setLoading] = useState(false);



  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }


  function handleFormSubmit(event: any) {
    event.preventDefault();

    setLoading(true);
    setTimeout(() => {
      // Quando a operação assíncrona estiver concluída, pare o carregamento
      setLoading(false);
    }, 2000);

    setInputName(formData.name);
  }
  console.log(inputName);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${inputName}`).then((resp) => {
      setPerfil(resp.data);
    }).catch((error)=>{
      if(error.response && error.response.status === 404){
        setPerfil(undefined)
      }
      
    })
  }, [inputName]);
  console.log(perfil);
  
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
          <div></div>
        </form>
      </div>
      <div className="result-perfil">
        {loading && <Loader />}
    
        {!loading && perfil !== undefined ? (
           <ResultPerfil perfil={perfil} />
        ) : (<h1>Erro ao buscar usuário</h1>)}
        
      </div>
    </>
  );
};

export default Search;

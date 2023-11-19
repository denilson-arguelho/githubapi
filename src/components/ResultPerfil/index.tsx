import './styles.css'

import { PerfilDTO } from '../../models/perfilDTO'


type Props = {
  perfil: PerfilDTO
}

const ResultPerfil = ({perfil}: Props) => {
  return (
    <div className='container-result-perfil'>
        <div className="container-img-perfil">
          <img src={perfil.avatar_url} alt="imagem de perfil" />
        </div>

        <div className="container-information-perfil">
          <h4>Informações</h4>
          
          <div className="container-data-information-perfil">
          <div className="itens">
            <p>Perfil: <span>{perfil.url}</span></p>
          </div>
          <div className="itens">
            <p>Seguidores: <span>{perfil.followers}</span></p>
          </div>
          <div className="itens">
            <p>Localidade: <span>{perfil.location}</span></p>
          </div>
          <div className="itens">
            <p>Nome: <span>{perfil.name}</span></p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default ResultPerfil
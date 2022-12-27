import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai' // aqui se faz o importe da bibioteca de icones
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
    <div className="colaborador">
        <AiFillCloseCircle 
            size={25} 
            className="deletar" 
            onClick={() => aoDeletar(colaborador.id)} // foi preciso utilizar a função anônima
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito
                    ? <AiFillHeart {...propsFavorito} color="#ff0000"/> // o spreed copia o objeto para dentro das chaves
                    : <AiOutlineHeart {...propsFavorito}/>
                }
            </div>
        </div>
    </div>)
}


//um módulo pode ter vários export e apenas um expot padrão

export{}
export{}
export{}
export{}
export{}

export default Colaborador
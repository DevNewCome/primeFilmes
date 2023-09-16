import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './fav.css'
import { toast } from 'react-toastify'


function Favoritos(){
        const [ filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@primeflix") 
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id) // retorna todos os outros filmes que não seja oque eu cliquei, ou seja o filme que eu cliquei foi escolhido para ser excluido enquanto os outros vao ser retornados

        })

        setFilmes(filtroFilmes)
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
        toast.success('Excluido com sucesso')
    }

    return(
        <div className="meus-filmes">
            <h1>Meus filmes salvos</h1>
            {filmes.length === 0 && <span>Você não possui filmes</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>    
                            <div>
                               <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                               <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;
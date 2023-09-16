import './header.css';
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <ul>
                <li><Link className='logo' to="/">Prime Flix</Link></li>
                <li><Link className='favoritos' to="/favoritos">Meus filmes</Link></li>
            </ul>


        </header>
    )
}

export default Header;
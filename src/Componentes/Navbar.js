import { Link } from 'react-router-dom';
import '../css/header.css';

function Navbar() {
    return (
        <div className='header'>
            <h1 className='title'>Unidad#3 Trabajo optativo (Navegacion)</h1>
            <div className='navbar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/imagenes'>Imagenes</Link></li>
                    <li><Link to='/Proyectos'>Proyectos</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;

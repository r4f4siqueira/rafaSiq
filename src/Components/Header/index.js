import {Link} from 'react-router-dom'
import './style.css'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>HOME</Link>
            <Link to='/projetos'>projetos</Link>
        </div>
    );
}
export default Header;
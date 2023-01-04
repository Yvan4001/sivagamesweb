import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import "../Styles/Navigation.css";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'><img src={logo} className="menu-image" alt="logo" /></NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;
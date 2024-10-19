import './Navigation.css';
import  { NavLink } from 'react-router-dom';
import App  from '../App.js';



export default function Navigation() {

    return (
        <div>
            <nav>
                <div className="left">
                    <h1>My Page</h1>
                </div>
                <div className="right">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </nav>
        </div>
    );

}
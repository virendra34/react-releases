import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import Rainbow from '../hoc/Rainbow';

const Navbar = (props) => {
    // console.log(props);
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 5000);
    return (
        
            <div className="container">
                <Link to="/" className="brand-logo" style={{marginLeft:"-120px", fontSize:"20px"}}>Releases</Link>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        
    )
}
export default withRouter(Rainbow(Navbar));
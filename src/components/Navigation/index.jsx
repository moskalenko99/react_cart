import React from 'react';
import {
    Link
} from "react-router-dom";

import './styles.sass';

class Navigation extends React.Component{
    render() {
        return (
            <nav className="Navigation">
                <Link className="Navigation__link" to="/">Home</Link>
                <Link className="Navigation__link" to="/cart">Cart</Link>
            </nav>
        )
    }
}

export default Navigation;
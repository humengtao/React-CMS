import React from  'react';
import {Link} from 'react-router';


class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/" className="logo">Jyl blog</Link>
                <ul className="ul">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/portfolio">portfolio</Link></li>
                    <li><Link to="/tags">tags</Link></li>
                </ul>
                <div className="set">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}
import '../stylesheets/nav.scss';

export default Nav;

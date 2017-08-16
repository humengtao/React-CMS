/**
 * Created by humengtao on 2017/7/27.
 */
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <ul>
                    <li><Link to="/header">header</Link>
                    </li>
                    <li><Link to="/footer">footer</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default App;
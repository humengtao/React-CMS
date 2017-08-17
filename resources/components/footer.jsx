import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <p>Copyright © Jyl Blog 2017 </p>
                <p>Theme by  <Link to="/">Jyl</Link></p>
            </div>
        )
    }
}

import '../stylesheets/footer.scss'
export  default Footer;
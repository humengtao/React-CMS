import React from  'react';
import {Link} from 'react-router';
import {Col, Row} from 'react-bootstrap';
import  Nav from './nav.jsx';
import Contents from './contents.jsx';
import Footer from './footer.jsx';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home_bg">
                    <Nav></Nav>
                </div>
                <Row className="row">
                    <Col xs={12} lg={8} sm={12} md={8} className="col">
                        <div className="con">
                            <Contents></Contents>
                            <Contents></Contents>
                            <Contents></Contents>
                            <Contents></Contents>
                        </div>
                        <div className="next">
                            <Link to="/page" className="page">下一页</Link>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} sm={12} md={4} className="col">
                        <div className="right">
                            <div className="tag">
                                <Link to="/tags">Tags</Link><br/>
                                <span className="tags">前端</span>
                                <span className="tags">前端</span>
                                <span className="tags">前端</span>
                                <span className="tags">前端</span>
                                <span className="tags">前端</span>
                                <span className="tags">前端</span>
                                <span className="tags">前端</span>
                                <span className="tags">前端</span>
                                <span className="tags">前端</span>
                            </div>
                            <div className="me">
                                <Link to="/about">About me</Link><br/>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Footer></Footer>
            </div>
        )
    }
}

import '../stylesheets/home.scss';

export default Home;
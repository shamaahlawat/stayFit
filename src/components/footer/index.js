import React, { Component } from 'react';
import { Row, Col } from 'antd';
// import { icons } from '../../data/assets/assetsurl';
// import { icons } from '../../data/assets/url_assets';
import logo from '../../data/assets/img/pole_logo_red.png';

import './index.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="appFooterContainer color-white">
                <div className="footerBodyContainer tb-pad-5 flex-row b-mrgn-20 t-pad-10 flex-ac flex-wrap">
                    <Col xs={24} md={6} className="tb-pad-15 flex-center flex-column">
                        <div className="b-pad-10">
                            <img src={logo} />

                        </div>
                    </Col>
                    <Col xs={24} md={18}>
                        <Col xs={24} md={10} className="tb-pad-15 flex-center flex-column">
                            <ul className="footerElements is-cursor-ptr">
                                <div className="elementHeading color-white  tb-pad-20">CONTACT US
                                    {/* <div className="b-border width-40 t-pad-10" /> */}
                                    <div>
                                        American Council on Exercise<br />
                                        4851 Paramount Drive<br />
                                        San Diego, California 92123<br />
                                        1 (888) 825-3636
                                    </div>
                                </div>
                            </ul>
                        </Col>
                    </Col>
                </div>
                <Col xs={24} className="lr-pad-15 t-pad-20 copyright is-text-center font-12 rights">{new Date().getFullYear()} All Rights Reserved, StayFit</Col>
            </div>
        );
    }
}



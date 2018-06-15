import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Col } from 'antd';

import * as pageActions from '../../data/redux/page_details/actions';
// import * as userActions from '../../data/redux/user_details/actions';
import * as CONSTANTS from '../../data/config/constants';
// import { icons } from '../../data/assets/assetsurl';
import logo from '../../data/assets/img/pole_logo_red.png';

import './index.scss';
// import SideNavbar from './sidenavbar';

function mapStateToProps(state) {
    return {
        page_details: state.page_details,
        user_details: state.user_details
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, pageActions), dispatch)
    };
}

class AppHeader extends Component {
    loadPath = (path) => {
        this.props.history.push(path);
    }

    render() {
        let { page_details } = this.props;

        let navItems = [
            { key: 1, title: 'CERTIFICATION', page: CONSTANTS.appPages.HOME, path: '/' },
            { key: 2, title: 'EDUCATION AND RESOURCES', page: CONSTANTS.appPages.ABOUT_US, path: '/about_us' },
            { key: 3, title: 'ABOUT US', page: CONSTANTS.appPages.OUR_COMPANIES, path: '/our_companies' },
        ];

        return (
            <Col xs={{ span: 24 }} className="appHeaderContainer lr-pad-15 tb-pad-20 flex-row flex-jsb bg-white">
                <Col className="flex-row flex-jsb flex-ac is-cursor-ptr animated zoomIn">
                    <img className="animated zoomIn logo l-pad-30 r-pad-30" src={logo} alt="" onClick={() => { this.loadPath('/'); }} />
                    {page_details.device_data.screen_width > 768 &&
                        <Col className="flex-row flex-jfe flex-ac flex-wrap linkContainer is-cursor-ptr">
                            {navItems.map(navItem => {
                                return (
                                    <div key={navItem.key} className={classNames("flex-row flex-center link color-secondary lr-pad-10 font-black", { "active": page_details.current_page === navItem.page })} onClick={() => this.loadPath(navItem.path)}>{navItem.title}
                                    </div>
                                );
                            })}
                        </Col>
                    }
                </Col>

                {page_details.device_data.screen_width <= 768 &&
                    <div className="sidenavbar">
                        {/* <SideNavbar page_details={page_details} nav_items={navItems} /> */}

                    </div>
                }

                {/* {
                    page_details.device_data.screen_width > 768 &&
                    <Col className="flex-row flex-jfe flex-ac flex-wrap linkContainer is-cursor-ptr">
                        {navItems.map(navItem => {
                            return (
                                <div key={navItem.key} className={classNames("flex-row flex-center link color-secondary lr-pad-10 font-black", { "active": page_details.current_page === navItem.page })} onClick={() => this.loadPath(navItem.path)}>{navItem.title}
                                </div>
                            );
                        })}
                    </Col>
                } */}

            </Col>
        );
    }
}

AppHeader.propTypes = {
    history: PropTypes.object,
    page_details: PropTypes.object,
    user_details: PropTypes.object,
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(AppHeader);

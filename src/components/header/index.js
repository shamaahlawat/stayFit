import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import HomeHeader from './homeheader';

import './index.scss';

export default class Header extends Component {
	render() {
		return (
			<Row className="mobile appNavbarContainer">
				<Col xs={{ span: 24 }}>
					<HomeHeader />
				</Col>
			</Row>
		);
	}
}

Header.propTypes = {
	page_details: PropTypes.object,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Col, Dropdown, Menu, Row } from 'antd';

import './index.scss';
import logo from '../../../data/assets/img/pole_logo_red.png';

export default class HomeHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const menu = (
			<Menu>
				<Menu.Item key="0">
					<a href="#">Logout</a>
				</Menu.Item>
				<Menu.Item key="1">
					<a href="#">Notifications</a>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="3">Settings</Menu.Item>
			</Menu>
		);

		return (
			<Row className="HeaderContainer" type="flex" justify="space-between" align="center">
				<Row type="flex" justify="center" align="center" className="LogoContainer">
					<img src={logo} alt="pole-logo" />
					<Col className="LogoText">Poletalks</Col>
				</Row>
				<Row type="flex" justify="end" align="center" className="ActionsContainer">
					<Dropdown overlay={menu} trigger={['click']}>
						<a className="ant-dropdown-link" href="#">
							<Avatar icon="user" className="AvatarIcon" />
						</a>
					</Dropdown>
				</Row>
			</Row>
		);
	}
}

HomeHeader.propTypes = {
	current_page: PropTypes.string,
	title: PropTypes.string
};


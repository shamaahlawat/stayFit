import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

import './index.scss';

export default class HomeLeftSider extends Component {
	onItemClicked = (event) => {
		switch (event.key) {
			case "1":
				break;
			case "2":
				break;
			case "3":
				break;
			case "4":
				break;
			case "5":
				break;
		}
	}

	render() {
		return (
			<Menu className="SidebarMenuContainer" theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={(e) => this.onItemClicked(e)}>
				<SubMenu key="a" title={<span><Icon type="user" /><span>User</span></span>}>
					<Menu.Item key="1">User 1</Menu.Item>
					<Menu.Item key="2">User 2</Menu.Item>
					<Menu.Item key="3">User 3</Menu.Item>
				</SubMenu>
				<SubMenu key="b" title={<span><Icon type="team" /><span>Team</span></span>}>
					<Menu.Item key="4">Team 1</Menu.Item>
					<Menu.Item key="5">Team 2</Menu.Item>
				</SubMenu>
				<Menu.Item key="3">
					<Icon type="file" />
					<span>File</span>
				</Menu.Item>
			</Menu>
		);
	}
}


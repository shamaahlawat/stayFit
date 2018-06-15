import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

import './index.scss';

export default class Home extends Component {
    render() {
        return (
            <Layout className="HomeContainer" style={{ minHeight: '100vh' }}>
                <Layout className="HomeContentLayoutContainer">
                    <Layout className="HomeContentContainer">
                        <Content className="HomeContent">
                            <div style={{ padding: 24, background: '#fff' }}>Bill is a cat.</div>
                        </Content>
                        <Footer className="HomeFooter">Poletalks ©2018 Created by pole Tech labs Pvt Ltd</Footer>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

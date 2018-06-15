import React, { Component } from 'react';

import './index.scss';

export default class MainPage extends Component {
    render() {
        return (
            <div className="mainContainer bg-white">
                <div className="firstSection flex-column flex-center font-30">
                    <div>75,000 certified health and fitness professionals. 35 million lives moved.</div>
                    <div className="button t-pad-20">Button</div>
                </div>
                <div className="bg-red flex-row flex-center font-30 redArea">
                    75,000 certified health and fitness professionals. 35 million lives moved.
                </div>
            </div>
        );
    }
}

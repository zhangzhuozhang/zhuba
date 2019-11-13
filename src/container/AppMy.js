import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#ffffff',letterSpacing:'10px',fontSize:'20px'}}
                    >我的
                </NavBar>
            </div>
        )
    }
}

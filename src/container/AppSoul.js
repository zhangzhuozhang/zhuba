import React, { Component } from 'react'
import { NavBar, Icon, Tabs, WhiteSpace } from 'antd-mobile';
import One from './One'
export default class AppSoul extends Component {
    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
           <One/>
        </div>
        );
    render() {
        const tabs = [
            { title: '推荐'},
            { title: '冬季' },
            { title: '宜家' },
            { title: '小清新' },
            { title: '小户型' },
            { title: '个性色彩' },
            { title: '彪' },
        ];
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#ffffff', letterSpacing:'10px',fontSize:'20px'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                    ]}
                >灵感
                </NavBar>
                <WhiteSpace />
                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}>
                    {this.renderContent}
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
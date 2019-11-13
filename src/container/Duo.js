import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';
import './duo.css';
import Img1 from '../images/zhuozi.png';
import Img2 from '../images/chuang.png';
import Img3 from '../images/yizi.png';
import Img4 from '../images/chaji.png';
import Img5 from '../images/guizi.png';
import Img6 from '../images/shujia.png';
import Img7 from '../images/tubiaoCSban-.png';
import Img8 from '../images/shanzi.png';
import Img9 from '../images/BeachUmbrella.png';
import Img10 from '../images/quanbufenleiallclassifyfull.png';
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const FlexExample = () => (
  <div className="flex-container">
    <Flex style={{marginTop:'15px'}}>
      <Flex.Item><div className='num1'><img src={Img1}/></div></Flex.Item>
      <Flex.Item><div className='num2'><img src={Img2}/></div></Flex.Item>
      <Flex.Item><div className='num3'><img src={Img3}/></div></Flex.Item>
      <Flex.Item><div className='num4'><img src={Img4}/></div></Flex.Item>
      <Flex.Item><div className='num5'><img src={Img5}/></div></Flex.Item>
    </Flex>
    <Flex style={{margin:'15px 0px 15px 22px'}}>
      <Flex.Item>桌</Flex.Item>
      <Flex.Item>床</Flex.Item>
      <Flex.Item>椅</Flex.Item>
      <Flex.Item>几</Flex.Item>
      <Flex.Item>柜</Flex.Item>
    </Flex>
    <Flex>
      <Flex.Item><div className='num6'><img src={Img6}/></div></Flex.Item>
      <Flex.Item><div className='num7'><img src={Img7}/></div></Flex.Item>
      <Flex.Item><div className='num8'><img src={Img8}/></div></Flex.Item>
      <Flex.Item><div className='num9'><img src={Img9}/></div></Flex.Item>
      <Flex.Item><div className='num10'><img src={Img10}/></div></Flex.Item>
    </Flex>
    <Flex style={{margin:'15px 0px 10px 5px'}}>
      <Flex.Item>书桌</Flex.Item>
      <Flex.Item>沙发</Flex.Item>
      <Flex.Item>家居饰品</Flex.Item>
      <Flex.Item>户外家具</Flex.Item>
      <Flex.Item>全部分类</Flex.Item>
    </Flex>
  </div>
);
export default class Duo extends Component {
    render() {
        return (
            <div style={{backgroundColor:'white'}}>
                <FlexExample/>
            </div>
        )
    }
}

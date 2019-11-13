import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';
import Img1 from '../images/soul1_03.jpg';
import Img2 from '../images/soul2_03.jpg';
import Img3 from '../images/soul3_03.jpg';
import Img4 from '../images/soul4_03.jpg';
import Img5 from '../images/soul5_03.jpg';
import Img6 from '../images/soul6_03.jpg';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const FlexExample = () => (
  <div className="flex-container" style={{width:'100%'}}>
    <Flex>
      <Flex.Item><img src={Img1} style={{width:"180px",height:"220px",padding:'4px'}}/></Flex.Item>
      <Flex.Item><img src={Img2} style={{width:"180px",height:"220px",padding:'4px'}}/></Flex.Item>
      
    </Flex>
    <Flex>
      <Flex.Item><img src={Img3} style={{width:"180px",height:"220px",padding:'4px'}}/></Flex.Item>
      <Flex.Item><img src={Img4} style={{width:"180px",height:"220px",padding:'4px'}}/></Flex.Item>
    </Flex>
    <Flex>
      <Flex.Item><img src={Img5} style={{width:"180px",height:"120px",padding:'4px'}}/></Flex.Item>
      <Flex.Item><img src={Img6} style={{width:"180px",height:"120px",padding:'4px'}}/></Flex.Item>
    </Flex>
     
  </div>
);
export default class one extends Component {
    render() {
        return (
            <div>
                <FlexExample/>
            </div>
        )
    }
}

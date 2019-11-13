import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel, WingBlank,Flex} from 'antd-mobile';
import Search from './Search';
import Img1 from '../images/gouwuche.png';
import Img2 from '../images/buy1_02.jpg';
import Duo from './Duo';
import Img3 from '../images/buy2_03.jpg';
import Img4 from '../images/buy3_05.jpg';
import Img5 from '../images/buy4_09.jpg';
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const FlexExample = () => (
  <div className="flex-container">
    <Flex>
      <Flex.Item><img src={Img3} style={{width:"180px",height:'150px'}}/></Flex.Item>
      <Flex.Item><img src={Img4} style={{width:"180px",height:'150px'}}/></Flex.Item>
    </Flex>
    <Flex style={{fontSize:'12px',marginTop:'10px'}}>
      <Flex.Item>Top Art Studio 欧式风格精细<br/>￥ 39.95</Flex.Item>
      <Flex.Item>顺顺工艺欧式风格塑料外框黑..<br/>￥ 83.99</Flex.Item>
    </Flex>
    <Flex style={{marginTop:'30px'}}>
       <Flex.Item><img src={Img5} style={{width:'100%',height:'80px'}}/></Flex.Item>
    </Flex>
    </div>
);
export default class AppBuy extends Component {
    state = {
    data: ['1', '2', '3','4'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI','ISORG'],
      });
    }, 100);
  }
    render() {
        return (
            <div style={{width:'100%'}}>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#ffffff',letterSpacing:'10px',fontSize:'20px'}}
                    rightContent={[
                        <img src={Img1} style={{width:"25px",height:'25px'}}/>
                    ]}
                    >商城
                </NavBar>
                <WingBlank style={{margin:'0'}}>
        <Carousel
          autoplay={Boolean}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={Img2}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      {/* <Search/> */}
      <Duo/> 
      <FlexExample/>         
        
    </div>
        )
    }
}

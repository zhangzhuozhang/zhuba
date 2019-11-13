import React, { Component } from 'react'
import Img1 from '../images/one_02.jpg';
import Img2 from '../images/three_03.jpg';
import Img3 from '../images/two_07.jpg';
import Img4 from '../images/four_03.jpg';
import Img5 from '../images/last_02.jpg';
import Img6 from '../images/home2_02.jpg';
import { NavBar,Flex, WhiteSpace,Carousel, WingBlank } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
  );
  const FlexExample = () => (
    <div className="flex-container" style={{width:'100%'}}>
      <WhiteSpace size="lg" />
      <Flex>
        <Flex.Item><img src={Img2} style={{width:"122px",height:"130px",padding:'4px'}}/></Flex.Item>
        <Flex.Item><img src={Img3} style={{width:"122px",height:"130px",padding:'4px'}}/></Flex.Item>
        <Flex.Item><img src={Img4} style={{width:"122px",height:"130px",padding:'4px'}}/></Flex.Item>
      </Flex>
    </div>
  );

  const FlexExample2 = () => (
    <div className="flex-container" style={{height:'30px',margin:'10px 0'}}>
      <div className="sub-title"><span style={{width:'5px',height:'20px',backgroundColor:'#3fcccb',display:'inline-block',marginRight:'5px'}}></span>热门推荐</div>
      <Flex style={{marginTop:'10px'}}>
        <Flex.Item><img src={Img5} style={{width:"100%",height:"220px"}}/></Flex.Item>
      </Flex>
      </div>
      );
export default class AppHome extends Component {
  state = {
    data: ['1', '2'],
    imgHeight: 176,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [Img1, Img6],
      });
    }, 100);
  }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#ffffff',letterSpacing:'10px',fontSize:'20px'}}
                    >住吧家居
                </NavBar>
                <WingBlank style={{margin:'0'}}>
        <Carousel
          autoplay={Boolean}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
          ))}
        </Carousel>
      </WingBlank>
                <FlexExample/>
                <FlexExample2/>
            </div>

        )

    }

}
import React from 'react'
import { Carousel, Card, l } from 'antd'
import './ui.less'
export default class Gallery extends React.Component {

    render() {
        return (
            <div>
                <Card title="文字背景轮播图" className='card-wrap'>
                    <Carousel autoplay={true} fade={true}>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card>


                <Card title="图片背景轮播图" className='slider-wrap'>
                    <Carousel autoplay={true} fade={true} >
                        <div><img src='/carousel-img/carousel-1.jpg' /></div>
                        <div><img src='/carousel-img/carousel-2.jpg' /></div>
                        <div><img src='/carousel-img/carousel-3.jpg' /></div>
      
                    </Carousel>
                </Card>
            </div>

        );
    }
}
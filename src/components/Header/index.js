import React from 'react'
import {Row,Col} from 'antd'
import "./index.less"
import Util from '../../utils/utils'
import axios from '../../axios'

export default class Header extends React.Component{
    state={}

    componentWillMount(){
        // 1.获取百度天气
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        let city = '佛山'
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',
        }).then((res)=>{

            // debugger;
            if (res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather,

                })
            }
        });
    }

    render(){
        return (
            <div className='header'>
                <Row className='header-top'>
                    <span>欢迎，Zzz</span>
                    <a>>退出</a>
                </Row>
                <Row className='breadcrumb'>
                    <Col span='4' className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-img'>
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span className='weather-detail'>
                            {this.state.weather}
                        </span>

                    </Col>
                </Row>
            </div>
        );
    }
}
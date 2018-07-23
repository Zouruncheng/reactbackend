import React from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.less'
export default class Loading extends React.Component {


    render() {
        const icon = <Icon type='loading' style={{ fontSize: "24px" }}></Icon>


        return (
            <div>
                <Card title="Spin用法" className='card-wrap'>
                    <Spin></Spin>
                    <Spin size='small'>
                    
                    </Spin>
                    <Spin size='large'>

                    </Spin>

                    <Spin indicator={icon} style={{ marginLeft: 10 }}></Spin>
                </Card>

                <Card title="内容遮罩" className='card-wrap'>
                    <Alert
                        message="react"
                        description="欢迎来到深发展"
                        type="warning"
                    ></Alert>
                    <Spin tip="加载中...">
                        <Alert
                            message="react"
                            description="欢迎来到深发展"
                            type="warning"
                        ></Alert>

                    </Spin>
                </Card>
            </div>
        );

    }
}
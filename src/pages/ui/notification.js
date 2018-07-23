import React from 'react'
import { notification, Card, Button } from 'antd'
import './ui.less'


export default class Notification extends React.Component {

    openNotification = (type,direction) => {
        if(direction){
            notification.config({
                placement:direction,
            })
        }
        notification[type]({
            message: "余额不足",
            description: "有卡余额不足，请提醒他重置",
        });
    }


    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type='priary' onClick={() => this.openNotification("success")}>success</Button>
                    <Button type='priary' onClick={() => this.openNotification("info")}>info</Button>
                    <Button type='priary' onClick={() => this.openNotification("warning")}>warning</Button>
                    <Button type='priary' onClick={() => this.openNotification("error")}>error</Button>

                </Card>

                <Card title='通知提醒框下方' className='card-wrap'>
                    <Button type='priary' onClick={() => this.openNotification("success",'topLeft')}>success</Button>
                    <Button type='priary' onClick={() => this.openNotification("info","bottomRight")}>info</Button>
                    <Button type='priary' onClick={() => this.openNotification("warning","bottomLeft")}>warning</Button>
                    <Button type='priary' onClick={() => this.openNotification("error","topRight")}>error</Button>

                </Card>
            </div>
        );
    }
}
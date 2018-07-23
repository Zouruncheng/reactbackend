import React from 'react'
import { message, Card, Button } from 'antd'
import './ui.less'


export default class Message extends React.Component {

    showMessage = (type)=>{
        message[type]("修改成功");
    }


    render(){
        return(
            <div>
                <Card className='card-wrap' title='MEssage组件'>
                <Button type="primary" onClick={()=>this.showMessage("success")}>Success</Button>
                <Button type="primary" onClick={()=>this.showMessage("info")}>info</Button>
                <Button type="primary" onClick={()=>this.showMessage("warning")}>warning</Button>
                <Button type="primary" onClick={()=>this.showMessage("loading")}>loading</Button>
                <Button type="primary" onClick={()=>this.showMessage("error")}>error</Button>
                </Card>

            </div>
        );
    }
}
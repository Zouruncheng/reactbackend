import React from 'react'
import {Card, Button, Modal} from 'antd'
import './ui.less'
export default class Buttons extends React.Component {

    state={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    }

    handleOpen(type){
        this.setState({
            [type]:true,


        });
    }

    handleConfirm(type){
        Modal[type]({
            title:"确认",
            content:"你确定你学会react了吗",
            onOk(){
                console.log("okay");
            },
            onCancel(){
                console.log("cancel");

            }
        })
    }


    render(){
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type='primary' onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal4')}>水平垂直居中弹框</Button>
                </Card>

                <Card title="信息确认框" className="card-wrap">
                    <Button type='primary' onClick={()=>this.handleConfirm('confirm')}>confirm</Button>
                    <Button type='primary' onClick={()=>this.handleConfirm('info')}>info</Button>
                    <Button type='primary' onClick={()=>this.handleConfirm('success')}>success</Button>
                    <Button type='primary' onClick={()=>this.handleConfirm('warning')}>warning</Button>
                </Card>

                {/*1. 基本模态框 */}
                <Modal
                    title='模态对话框'
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1:false,
                        })
                    }}

                >
                    <p>welcome to react</p>
                </Modal>
                
                {/*2. 自定义页脚 */}
                <Modal
                    title='模态对话框'
                    visible={this.state.showModal2}
                    okText="Next"
                    cancelText="close"
                    onCancel={()=>{
                        this.setState({
                            showModal2:false,
                        })
                    }}

                >
                    <p>welcome to react</p>
                </Modal>

                {/* 3. 顶部20px弹框*/}
                <Modal
                    title='模态对话框'
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={()=>{
                        this.setState({
                            showModal3:false,
                        })
                    }}

                >
                    <p>welcome to react</p>
                </Modal>

                {/* 4. 水平垂直居中弹框*/}
                <Modal
                    title='模态对话框'
                    wrapClassName='vertical-center-modal'
                    visible={this.state.showModal4}
                    onCancel={()=>{
                        this.setState({
                            showModal4:false,
                        })
                    }}

                >
                    <p>welcome to react</p>
                </Modal>
            </div>
        );
    }
}
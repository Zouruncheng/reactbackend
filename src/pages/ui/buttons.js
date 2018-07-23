import React from 'react'
import {Card, Button} from 'antd'

export default class Buttons extends React.Component {


    render() {
        return (
                <div>
                    <Card title='基础按钮'>
                        <Button type='primary'>Imooc</Button>
                        <Button type='dashed'>Imooc</Button>
                        <Button >Imooc</Button>
                        <Button disable>Imooc</Button>
                        <Button type='danger'>Imooc</Button>
                    </Card>

                    <Card title='图形按钮'>
                        <Button icon="plus">创建</Button>
                        <Button icon='edit'>编辑</Button>
                        <Button icon='delete'>删除</Button>
                        <Button shape='circle' icon="search"></Button>
                        <Button type='primary' icon='search'>搜索</Button>
                        <Button type='primary' icon='download'>下载</Button>
                    </Card>

                    <Card title='loading按钮'>
                        <Button type="primary" loading>确定</Button>
                        <Button type="primary" shape='circle' loading></Button>
                        <Button loading>点击加载</Button>
                        <Button shape='circle' icon="search"></Button>
                        <Button type='primary' icon='search'>搜索</Button>
                        <Button type='primary' icon='download'>下载</Button>
                    </Card>
                </div>

        );
    }
}
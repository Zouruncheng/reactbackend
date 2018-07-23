
import React from 'react'
import {Card,Button} from 'antd'

export default class PermissonUser extends React.Component {


    render() {
        return (
                <div>        return (
                        <Card title='授权'>
                            <Button type='primary'>创建角色</Button>
                            <Button type='primary'>设置权限</Button>
                            <Button type='primary'>用户授权</Button>

                        </Card></div>

        );
    }
}
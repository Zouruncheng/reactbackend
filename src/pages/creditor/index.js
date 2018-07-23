import React from 'react'
import {Card,Table} from 'antd'


export default class Creditor extends React.Component{


    state={

    };



    render(){
        //1.报纸公告表头
        const columns1 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '报纸来源',
                dataIndex: 'paper'
            },
            {
                title: '内容',
                dataIndex: 'date'
            },
            {
                title: '所在城市',
                dataIndex: 'CITY_CN'
            },
        ];
        //2.广东fae表头
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '债务人',
                dataIndex: 'debotor'
            },
            {
                title: '描述',
                dataIndex: 'describe'
            },
        ];
        //3.粤财表头
        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '债务人',
                dataIndex: 'debotor'
            },
            {
                title: '描述',
                dataIndex: 'describe'
            },
            
        ]
        //4.淘宝司法拍卖表头
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '债务人',
                dataIndex: 'debotor'
            },
            {
                title: '描述',
                dataIndex: 'describe'
            },

        ]
        const selectedRowKeys = this.state.selectedRowKeys;

        const rowCheckSelection = {
            type: 'radio',
            selectedRowKeys
        };

        return(
            <div>
                <Card title='1.报纸公告信息数据' style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns1}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                        rowSelection={rowCheckSelection}
  
                    ></Table>
                </Card>
                <Card title='2.广东金融资产交易中心' style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                        rowSelection={rowCheckSelection}
                    ></Table>
                </Card>
                <Card title='3.粤财资产推介' style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                        rowSelection={rowCheckSelection}
                    ></Table>
                </Card>
                <Card title='4.淘宝司法拍卖' style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                        rowSelection={rowCheckSelection}
                    ></Table>
                </Card>
            </div>
        );
    }
}

import React from 'react'
import { Card, Table, Modal, Button, message,Badge } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils';

export default class HighTable extends React.Component {

    state = {
        dataSource2: []
    };


    params = {
        page:1,
    };



    componentDidMount(){

        this.request();
    }

    request = () => {
        let _this = this;
        console.log("request调用了");
        axios.ajax({
            url: '/table/list/high',
            data: {
                params: {
                    page: this.params.page,
                },
                isShowLoading: false,
            },
        }).then((res) => {
            res.result.list.map((item, index) => {
                item.key = index
            })
            if (res.code == '0') {

                this.setState({
                    dataSource: res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current)=>{
                        // todo
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }

    handleChange = (pagination, filters, sorter)=>{
        // 表格排序触发，重新渲染
        console.log('sorter:'+sorter);
        this.setState({
            sortOrder:sorter.order,
        })

    }

    handleDelete = (item) =>{
        // 5.删除触发函数
        let id = item.id;
        Modal.confirm({
            title:'title',
            content:`确认删除:${id}`,
            onOk:()=>{
                message.success(`删除${id}成功`);
                this.request();
            }
        })
    }


    render() {
        // 1.行固定
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width:80,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width:80,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width:80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width:80,
                render(state) {
                    let config = {
                        "1": "恒大冰泉",
                        "2": "农夫山泉",
                        "3": "法国依云",
                        "4": "乐百氏",
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby',
                width:80,
                render(state) {
                    let config = {
                        "1": "篮球",
                        "2": "足球",
                        "3": "羽毛球",
                        "4": "跑步",
                    }
                    return config[state];
                }

            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '地址',
                dataIndex: 'address',
                width:80,
            },
        ]

        // 2.列固定
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width:80,
                fixed:'left',
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width:80,
                fixed:'left',

            },
            {
                title: '性别',
                dataIndex: 'sex',
                width:80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width:80,
                render(state) {
                    let config = {
                        "1": "恒大冰泉",
                        "2": "农夫山泉",
                        "3": "法国依云",
                        "4": "乐百氏",
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby',
                width:80,
                render(state) {
                    let config = {
                        "1": "篮球",
                        "2": "足球",
                        "3": "羽毛球",
                        "4": "跑步",
                    }
                    return config[state];
                }

            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '地址',
                dataIndex: 'address',
                width:80,
                fixed:'right',

            },
        ]


        // 3.前端排序
        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id',
                width:80,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width:80,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width:80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width:80,
                sorter:(a,b)=>{
                    return a.age - b.age;
                },
                sortOrder:this.state.sortOrder,
            },
            {
                title: '状态',
                dataIndex: 'state',
                width:80,
                render(state) {
                    let config = {
                        "1": "恒大冰泉",
                        "2": "农夫山泉",
                        "3": "法国依云",
                        "4": "乐百氏",
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby',
                width:80,
                render(state) {
                    let config = {
                        "1": <Badge status='success' text='篮球' />,
                        "2":<Badge status='success' text='足球' />,
                        "3": <Badge status='success' text='羽毛球' />,
                        "4": <Badge status='success' text='跑步' />,
                    }
                    return config[state];
                }

            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '地址',
                dataIndex: 'address',
                width:80,
            },
        ]
       
        // 4.徽标渲染
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id',
                width:80,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width:80,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width:80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width:80,
            },
            {
                title: '状态',
                dataIndex: 'state',
                width:80,
                render(state) {
                    let config = {
                        "1": "恒大冰泉",
                        "2": "农夫山泉",
                        "3": "法国依云",
                        "4": "乐百氏",
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby',
                width:80,
                render(state) {
                    let config = {
                        "1": <Badge status='success' text='成功' />,
                        "2":<Badge status='error' text='报错' />,
                        "3": <Badge status='default' text='正常' />,
                        "4": <Badge status='processing' text='进行中' />,
                        "5": <Badge status='warning' text='警告' />,
                    }
                    return config[state];
                }

            },
            {
                title: '生日',
                dataIndex: 'date',
                width:80,
            },
            {
                title: '地址',
                dataIndex: 'address',
                width:80,
            },
        ]

        //5.表格中添加操作按钮
        const columns5 = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        "1": "恒大冰泉",
                        "2": "农夫山泉",
                        "3": "法国依云",
                        "4": "乐百氏",
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby',
                render(state) {
                    let config = {
                        "1": <Badge status='success' text='成功' />,
                        "2":<Badge status='error' text='报错' />,
                        "3": <Badge status='default' text='正常' />,
                        "4": <Badge status='processing' text='进行中' />,
                        "5": <Badge status='warning' text='警告' />,
                    }
                    return config[state];
                }

            },
            {
                title: '生日',
                dataIndex: 'date',
            },
            {
                title: '地址',
                dataIndex: 'address',
            },
            {
                title: '操作',
                render:(text,item)=>{
                    return <Button onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                }
            },
        ]
        return (
            <div>
                <Card title='1.头部固定'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:240}}
                    ></Table>
                </Card>
                <Card title='2.左侧固定'>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x:1200}}

                    ></Table>
                </Card>
                <Card title='3.前端表格排序'>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}

                    ></Table>
                </Card>
                <Card title='4.表格嵌套图标'>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}

                    ></Table>
                </Card>
                <Card title='5.表格中删除按钮'>
                    <Table
                        bordered
                        columns={columns5}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}

                    ></Table>
                </Card>
            </div>
        );
    }
}
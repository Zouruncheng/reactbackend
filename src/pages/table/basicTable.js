import React from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import axios from './../../axios/index'
import Utils  from './../../utils/utils';

export default class BasicTable extends React.Component {

    state = {
        dataSource2: []
    };


    params = {
        page:1,
    };



    componentDidMount() {
        const dataSource = [
            {
                id: '0',
                userName: 'zougege',
                sex: '1',
                state: '1',
                hobby: '2',
                date: "1994-10-08",
                address: '12:30:30',
            },
            {
                id: '1',
                userName: 'Jack',
                sex: '1',
                state: '1',
                hobby: '3',
                date: "1994-10-08",
                address: '12:30:30',
            },
            {
                id: '2',
                userName: 'Fantasy',
                sex: '1',
                state: '2',
                hobby: '4',
                date: "1994-10-08",
                address: '12:30:30',
            },
            {
                id: '3',
                userName: 'JJ',
                sex: '2',
                state: '3',
                hobby: '3',
                date: "1994-10-08",
                time: '12:30:30',
            },
        ]
        dataSource.map((item, index) => {
            item.key = index
        })
        this.setState({
            dataSource
        })
        this.request();
    }

    // 1.动态获取mock数据
    // request = ()=>{
    //     axios.get("/table/list").then((res)=>{
    //         console.log(JSON.stringify(res));
    //         if (res.status == '200') {
    //             this.setState({
    //                 dataSource2:res.data.result,

    //             })

    //         }
    //     })
    // }

    request = () => {
        let _this = this;
        console.log("request调用了");
        axios.ajax({
            url: '/table/list',
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
                    dataSource2: res.result.list,
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


    onRowClick = (record, index) => {
        // 鼠标点击行出发事件
        let selectKey = [index];  // 存在多选，放入数组比较保险
        Modal.info({
            title: '选中信息',
            content: `用户名:${record.userName}\nid:${record.id}`
        })
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record,
        })
    }

    handleDelete = () => {
        // 4.多选执行删除操作
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id)
        })

        Modal.confirm({
            title: '删除',
            content: `您确定删除下面的id:${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
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
                dataIndex: 'date'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
        ]


        const selectedRowKeys = this.state.selectedRowKeys;

        // 3.mock表格单选
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        };
        // 4.mock表格复选
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                let ids = [];
                selectedRows.map((item) => {
                    ids.push(item.id)
                })
                this.setState({
                    selectedRowKeys,
                    selectedRows,
                    // selectedIds:ids

                })
            }
        };
        return (
            <div>

                <Card title='1.基础表格'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    ></Table>
                </Card>
                <Card title='2.动态基础表格渲染' style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    ></Table>
                </Card>
                <Card title='3.Mock-单选' style={{ margin: '10px 0' }}>

                    <Table

                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            };
                        }}
                    ></Table>
                </Card>
                <Card title='4.Mock-复选' style={{ margin: '10px 0' }}>
                    <div>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table

                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        rowSelection={rowCheckSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            };
                        }}
                    ></Table>
                </Card>
                <Card title='5.表格分页' style={{ margin: '10px 0' }}>
                    <Table

                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                        rowSelection={rowCheckSelection}
  
                    ></Table>
                </Card>
            </div>
        );
    }
}
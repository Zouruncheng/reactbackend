import React from 'react'
import { message, Tabs, Button, Card, Icon, Alert } from 'antd'
import './ui.less'


const TabPane = Tabs.TabPane;

export default class Taps extends React.Component {

    handleCallback = (key) => {
        message.info("chose", key)
    }


    onChange = (activeKey)=>{
        this.setState({
            activeKey
        })
    }


    componentWillMount() {
        const newTabIndex =0;
        const panes = [
            {
                title: "TAB 1",
                content: "tab 1",
                key: "1",
            },
            {
                title: "TAB 2",
                content: "tab 2",
                key: "2",
            },
            {
                title: "TAB 3",
                content: "tab 3",
                key: "3",
            },]
        this.setState({
            activeKey:panes[0].key,
            panes
        });
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab'+activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }


    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
      }

    render() {
        return (
            <div>
                <Card className='card-wrap' title='Taps标签'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>,
                </Card>


                <Card className='card-wrap' title='Taps带图的标签'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type='plus' />TAB 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane disabled={true} tab={<span><Icon type='edit' />TAB 1</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type='delete' />TAB 1</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>,
                </Card>


                <Card className='card-wrap' title='Taps带图的标签'>
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type='editable-card'
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel) => {
                                return <TabPane
                                    tab={panel.title}
                                    key={panel.key}
                                >{panel.content}</TabPane>
                            })
                        }
                    </Tabs>,
                </Card>


            </div>
        );
    }
}
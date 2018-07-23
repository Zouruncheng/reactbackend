import React from 'react'
import menuConfig from './../../config/menuConfig'
import {NavLink} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import './index.less'
const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode = this.renderMenu(menuConfig);
        
        this.setState({
            menuTreeNode
        })
    }

    //左侧菜单渲染
    renderMenu=(data)=>{
        // console.log(data);
        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu> 
                )
                 
            }
            return <Menu.Item title={item.title} key={item.key}>
                  <NavLink to={item.key}>{item.title}</NavLink>   
            </Menu.Item>
        })
    }

    render(){
        var style = {
            backgroundColor:"red",

        }
        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>SFZ OA</h1>
                </div>
                <Menu
                    theme='dark'
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>

        );
    }
}
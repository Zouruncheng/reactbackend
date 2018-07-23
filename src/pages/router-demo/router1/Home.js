import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topic from './Topic'

export default class Home extends React.Component {


    render() {
        return (
            <HashRouter path='/about'>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                        <li><Link to="/topics">主题列表</Link></li>
                    </ul>

                    <hr />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        {/* <Route exact={true} path="/" component={Main} /> */}
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topic} />
                    </Switch>

                </div>
            </HashRouter>
        );
    }
}
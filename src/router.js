import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import NoMatch from './pages/nomatch'
import Loadings from './pages/ui/loadings'
import Notification from './pages/ui/notification'
import Messages from './pages/ui/messages'
import Taps from './pages/ui/taps'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'

import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'

import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'


import Creditor from './pages/creditor'

//权限控制
import Permission from './pages/permission'




export default class IRouter extends React.Component {


    render() {

        return (
            <HashRouter>
                <div>
                    <App>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/search' component={Login}></Route>
                        
                        <Route path='/' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                    <Route path='/admin/ui/modals' component={Modals}></Route>
                                    <Route path='/admin/ui/loadings' component={Loadings}></Route>
                                    <Route path='/admin/ui/notification' component={Notification}></Route>
                                    <Route path='/admin/ui/messages' component={Messages}></Route>
                                    <Route path='/admin/ui/taps' component={Taps}></Route>
                                    <Route path='/admin/ui/gallery' component={Gallery}></Route>
                                    <Route path='/admin/ui/carousel' component={Carousel}></Route>
                                    <Route path='/admin/form/login' component={FormLogin}></Route>
                                    <Route path='/admin/form/register' component={FormRegister}></Route>
                                    <Route path='/admin/table/basic' component={BasicTable}></Route>
                                    <Route path='/admin/table/high' component={HighTable}></Route>

                                    <Route path='/admin/permission' component={Permission}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route path='/order/detail' component={Login}></Route>
                    </App>
                </div>
            </HashRouter>
        );

    }
}

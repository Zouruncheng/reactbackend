import React from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'
const FormItem = Form.Item

class FormLogin extends React.Component {

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName},通过验证`)
            }
        })
    }


    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Card title='登录'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input placeholder='请输入用户名'></Input>

                        </FormItem>
                        <FormItem>
                            <Input type='password' placeholder='请输入密码'></Input>
                        </FormItem>

                        <FormItem>
                            <Button onClick={this.handleSubmit} type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title='登录水平表单' style={{ marginTop: 10 }}>
                    <Form style={{ width: 300 }}>
                        <FormItem>
                            {
                                getFieldDecorator("userName", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空',
                                        },
                                        {
                                            min: 5, max: 10,
                                            message: '长度大于5，小于10'
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$'),
                                            message: "用户名必须为字母或数字"
                                        }

                                    ]

                                })(<Input prefix={<Icon type='user' />} placeholder='请输入用户名'></Input>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("userPwd", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空',
                                        },

                                    ]
                                })(<Input prefix={<Icon type='lock' />} type='password' placeholder='请输入密码'></Input>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("remember", {
                                    initialValue: true,
                                    valuePropName:"checked",
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="#"  style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormLogin);
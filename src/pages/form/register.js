import React from 'react'
import {Card, Form, Button, Input,Checkbox, Radio, Select, Switch, DatePicker,TimePicker,Upload, Icon, InputNumber } from 'antd'
import moment from 'moment';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option
const TextArea = Input.TextArea
class FormRegister extends React.Component{
    
    state={

    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }

    // 上传回调
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
      }

    //点击注册按钮的回调
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringfy(userInfo));
    }



    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:10,
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }

        return(
            <div>
                <Card title='注册表单'>
                    <Form layout='horizontal'>
                    <FormItem label='用户名' {...formItemLayout}>
                    {
                                getFieldDecorator("userName", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空',
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$'),
                                            message: "用户名必须为字母或数字"
                                        }

                                    ]

                                })(<Input placeholder='请输入用户名'></Input>)
                    }
                    </FormItem>

                    <FormItem label='密码' {...formItemLayout}>
                    {
                                getFieldDecorator("userPasswd", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空',
                                        },

                                    ]

                                })(<Input type='password' placeholder='请输入密码'></Input>)
                    }
                    </FormItem>

                    <FormItem label='性别' {...formItemLayout}>
                    {
                                getFieldDecorator("sex", {
                                    initialValue: '',
                                    rules: [

                                    ]

                                })(<RadioGroup>
                                    <Radio value='1'>男</Radio>
                                    <Radio value='2'>女</Radio>
                                </RadioGroup>      )
                    }
                    </FormItem>

                    <FormItem label='年龄' {...formItemLayout}>
                    {
                                getFieldDecorator("age", {
                                    initialValue: 18,
                                    rules: [

                                    ]

                                })(<InputNumber></InputNumber>)
                    }
                    </FormItem>

                    <FormItem label='当前状况' {...formItemLayout}>
                    {
                                getFieldDecorator("status", {
                                    initialValue: '2',
                                    rules: [

                                    ]

                                })(<Select>
                                    <Option value='1'>前端</Option>
                                    <Option value='2'>运维</Option>
                                    <Option value='3'>算法</Option>
                                </Select>   )
                    }
                    </FormItem>

                    <FormItem label='爱好' {...formItemLayout}>
                    {
                                getFieldDecorator("hobby", {
                                    initialValue: '2',
                                    rules: [

                                    ]

                                })(<Select mode='multiple'>
                                    <Option value='1'>游泳</Option>
                                    <Option value='2'>篮球</Option>
                                    <Option value='3'>跑步</Option>
                                    <Option value='4'>LOL</Option>
                                    <Option value='5'>爬山</Option>
                                    <Option value='6'>足球</Option>
                                    <Option value='7'>羽毛球</Option>
                                </Select>   )
                    }
                    </FormItem>

                    <FormItem label='婚姻状况' {...formItemLayout}>
                    {
                                getFieldDecorator("isMarried", {
                                    valuePropName:'checked',
                                    initialValue: true,
                                })(<Switch></Switch>   )
                    }
                    </FormItem>

                    <FormItem label='生日' {...formItemLayout}>
                    {
                                getFieldDecorator("birthday", {
                                    initialValue: moment('1994-10-08'),
                                })(<DatePicker/>  )
                    }
                    </FormItem>

                    <FormItem label='联系地址' {...formItemLayout}>
                    {
                                getFieldDecorator("address", {
                                    initialValue: '北京市昌平区回龙观',
                                })(<TextArea
                                    autosize={
                                        {minRows:2, maxRows:4}
                                    }
                                    
                                />  )
                    }
                    </FormItem>

                    <FormItem label='时间' {...formItemLayout}>
                    {
                                getFieldDecorator("time",)(<TimePicker/>   )
                    }
                    </FormItem>

                    <FormItem label='上传' {...formItemLayout}>
                    {
                                getFieldDecorator("userImg",)(
                                <Upload 
                                    listType='picture-card'
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    onChange={this.handleChange}
                                >
                                    { this.state.userImg ? <img src={this.state.userImg}/> : <Icon type='plus'/>}    
                                </Upload>   )
                    }
                    </FormItem>

                    <FormItem {...offsetLayout} labelCol={{offset:4}}>
                    {
                                getFieldDecorator("userImg",)(
                                    <Checkbox>我接收并同意<a href='#'>用户协议</a></Checkbox>
                                )
                    }
                    </FormItem>

                    <FormItem {...offsetLayout} labelCol={{offset:4}}>
                    {
                                getFieldDecorator("userImg",)(
                                    <Button type='primary' onClick={this.handleSubmit}>注册</Button>  
                                )
                    }
                    </FormItem>

                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormRegister);
import jsonP from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'

export default class Axios{
    //1.jsonp请求的封装，获取天气api
    static jsonp(options){
        return new Promise((resolve, reject)=>{
            jsonP(options.url,{
                param:'callback'
            },function (err, response){
                if (response.status === "success"){
                    resolve(response);
                } else{
                    reject(response.message);
                }

            })
        })
    } 

    //2.ajax请求的封装
    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display='block';
        }

        let baseAPI = "https://www.easy-mock.com/mock/5b41ae711204b4765d9f6f8b/backend-manage";
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseAPI,
                timeout:5000,
                params:(options.data && options.data.params) || "",
            }).then((response)=>{
                if(options.data && options.data.isShowLoading !== false){
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display='none';
                }
                if(response.status == '200'){
                    let res = response.data;
                    if(res.code=='0'){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.msg,
                        })
                    }

                }else {
                    // 请求失败，错误拦截
                    reject(response.data);
                }
            })
        });
    }
}
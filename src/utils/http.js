import axios from 'axios'
import { notify } from './tips'
import { message } from 'antd'

class Http {
    constructor(arg) {
        this.baseURL = ''; //正式服务器
        this.apiList = {
            /*------------------------登陆--------------------------*/
            login: Http.genApi('POST', '/user/login'), // 登陆
            logout: Http.genApi('POST', '/user/logout'), // 退出登陆
            regist: Http.genApi('POST', '/user/regist'), // 注册
            testCreate: Http.genApi('POST', '/test/create'), // 测试 新建一条数据
            testQuery: Http.genApi('POST', '/test/query'), // 测试 查询数据

        }; //接口列表
    }

    getBaseURL() {
        return this.baseURL;
    }

    /**
     * 整理api接口
     */
    static genApi(method = 'POST', _url = '') {
        return {
            method: method.toUpperCase(),
            _url
        }
    }

    /**
     * 获取api
     */
    getApiName(apiName) {
        if (apiName && this.apiList[apiName]) {
            return this.apiList[apiName];
        } else {
            console.error('\n-\n-\n-apiName:' + apiName + 'is not found!\n-\n-\n');
            return false;
        }
    }

    /**
     * 请求查询
     * @param apiName       接口名称定义在apiList
     * @param dataToSend    传送数据
     * @param param         get参数
     * @param type          1 正常请求， 2：formData
     * @returns {Promise<any>}
     */
    request(apiName = "", dataToSend = {}, {
        param = '',
        type = 1
    } = {}) {
        let api = this.getApiName(apiName),
            token = localStorage.getItem('token'),
            headers = {
                token
            };
            console.log(token);
        return new Promise((resolve, reject) => {
            if (api) {
                if (type === 2) {
                    headers["content-type"] = 'application/x-www-form-urlencoded';
                    let formData = new FormData();
                    for (let k in dataToSend) {
                        formData.append(k, dataToSend[k]);
                    }
                    dataToSend = formData;
                }
                axios.request({
                    headers,
                    method: api.method,
                    url: api._url + param,
                    data: dataToSend,
                    params: api.method === 'GET' ? dataToSend : undefined,
                    baseURL: this.baseURL,
                }).then((res) => {
                    console.log(`${apiName} request:`, res);
                    let data = res.data;
                    if (data.code === 200) {
                        resolve(data.data)
                    } else {
                        message.error(data.msg);
                        reject(data);
                    }
                }).catch(() => {
                    if (reject) {
                        reject()
                    }
                })
            } else {
                if (reject) {
                    reject()
                }
            }
        })

    }
}


export default new Http();
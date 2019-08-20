import axios from 'axios'

class Http {
    constructor(arg) {
        this.baseURL = ''; //正式服务器
        this.apiList = {
            /*------------------------登陆--------------------------*/
            login: Http.genApi('POST', '/user/login'), // 登陆
            logout: Http.genApi('POST', '/user/logout'), // 退出登陆
            regist: Http.genApi('POST', '/user/regist'), // 注册

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
            token = sessionStorage.getItem('token'),
            headers = {
                token
            };
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
                    console.log('res', res);
                    let data = res.data;
                    if(data.code === 200){
                        resolve(data.data)
                    }else {
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
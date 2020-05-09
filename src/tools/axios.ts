import axios  , { AxiosError , AxiosResponse , AxiosRequestConfig} from 'axios';
import baseURL from '../baseUrl';
import { promised, reject } from 'q';

// 默认超时30秒
axios.defaults.timeout = 30 * 1000;

// 设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 设置baseURL => dev
axios.defaults.baseURL = baseURL.dev;

// 取消token
const CancelToken = axios.CancelToken;


const pending : any[] = [];

const removePending = (config :any) => {
    for(const p in pending){
        if(pending[p].u === config.url + '&' + config.method ){
            pending[p].f();
            pending.splice(parseInt(p,10) ,1)
        }
    }
};

// 请求拦截
axios.interceptors.request.use(
    (config) => {
        removePending(config);
        config.cancelToken = new CancelToken((c)=>{
            pending.push({
                u:config.url + '&' + config.method,
                f:c
            })
        } )
        return config 
    },
    (err) => Promise.reject(err),

);

// 响应拦截
axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error:AxiosError) => {
        if(error && error.response){
            switch(error.response.status) {
                case 400 :
                    error.message = '400 Bad Request';
                    break;
                case 401 :
                    error.message = '401 Unauthorized';
                    window.location.href = '/login';
                    break;
                case 403 :
                    error.message = '403 Forbidden';
                    break;
                case 404 :
                    error.message = '404 Not Found';
                    break;
                case 500 :
                    error.message = '500 Internal Server Error';
                    break;
                case 502 :
                    error.message = '502 Bad Gateway';
                    break;
                case 504 :
                    error.message = '504 Internal Server Error';
                    break;
                default :
                    error.message = `Unknown error and the status code is ${error.response.status}`
            }
        } else {
            error.message = 'Unknown error';
        }
        return Promise.reject(error.message);
    });

// GET方法
export function GET(url : string , params: object | null , errMsg: string | null) : Promise <AxiosResponse>{
    return new Promise((resolve , rejcet)=>{
        axios
            .get(url, {
                params,
            })
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err)
            })
    });
}

// POST方法
export function POST(url : string , params:object | null , config? : AxiosRequestConfig) : Promise<AxiosResponse>{
    return new Promise((resolve , reject) => {
        axios
            .post(url ,params , config)
            .then((res)=>{
                resolve(res)
            },(err)=>{reject(err)})
            .catch((err)=>{
                reject(err)
            })
            
    })
}

// PUT方法
export function PUT(url:string , params : object | null , errMsg:string | null):Promise<AxiosResponse>{
    return new Promise((resolve , reject) =>{
        axios
            .put(url , params )
            .then((res)=>{
                resolve(res)
            } , (err) => reject(err)) 
            .catch((err)=>{
                err = errMsg ? errMsg : err;
                reject(err)
            });
    })
}

// DELETE
export function DELETE(url : string , params:object | null ) : Promise<AxiosResponse>{
    return new Promise((resolve , reject) =>{
        axios
            .delete(url,{
                data:params
            })
            .then((res)=>{
                resolve(res)
            },(err)=>{reject(err)})
            .catch((err)=>{
                reject(err)
            });
    })
}
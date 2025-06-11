/**
 * 请求接口-数据类型
 */
export interface RequestData<T>{
    code: string;
    msg: string;
    result: T;
}
/**
 * 请求接口-数据类型
 */
export interface Data<T>{
    code: string;
    msg: string;
    result: T;
}
/** 通用分页结果类型 */
export type PageResult<T> = {
    /** 数据列表 */
    list: T[];
    /** 当前页码 */
    page: number;
    /** 总页数 */
    pages: number;
    /** 每页条数 */
    pageSize: number;
    /** 总条数 */
    counts: number;
}
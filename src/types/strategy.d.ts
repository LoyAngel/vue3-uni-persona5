/**
 * 攻略页-主数据
 */
export type StrategyMainData = {
    /** 标题 */
    title: string;
    /** 类型 */
    type: string;
    /** 图片 */
    image: string;
    /** 内容 */
    content: StrategyContentData[];
}

/**
 * 攻略页-内容数据
 */
export type StrategyContentData = {
    /** 文本 */
    text: string;
    /** 标题 */
    title: string;
    /** 类型, 唯一 */
    type: string;
}

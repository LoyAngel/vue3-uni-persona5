/**
 * 首页-Banner数据类型
 */
export type IndexBannerData = {
    /** 跳转链接 */
    hrefUrl: string;
    /** 图片地址 */
    imgUrl: string;
    /** id */
    id: string;
    /** 跳转类型 */
    type: number;
};

export type TitleItem = {
  title: string;
  url: string;
  image: string;
}
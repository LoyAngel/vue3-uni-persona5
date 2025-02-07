/**
 * 首页-Banner数据类型
 */
export type IndexBannerData = {
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
import { http } from "@/utils/http";
import type { IndexBannerData, IndexTitleData } from "@/types";
import type { RequestData } from "@/types/http";
/**
 * @Description: 获取首页banner
 * @param {number} distributionSite - banner位置（投放位置，1为首页） 默认为1
 * @return {Promise}
 */
export const getIndexBannerAPI = (distributionSite = 1) => {
    // return http<IndexBannerData[]>({
    //     method: 'GET',
    //     url: '/home/banner',
    //     data:{
    //         // 请求参数
    //         distributionSite,
    //     },
    // })
    return new Promise<RequestData<IndexBannerData[]>>((resolve) => {
        resolve({
            code: "200",
            msg: "success",
            result: [
                {
                    imgUrl: "https://i0.hdslb.com/bfs/article/6e0cd4638e60fce9528d6a68721fb038dfbb222a.png",
                    id: "3",
                    type: 98,
                },
                {
                    imgUrl: "https://i0.hdslb.com/bfs/article/84a31314be63ff59e1dcedaaa0fe28e5ae822f44.png",
                    id: "4",
                    type: 76,
                },
                {
                    imgUrl: "https://i0.hdslb.com/bfs/article/d2e23202abfa9e447dd49dc7a43a9012cd742ae1.jpg",
                    id: "5",
                    type: 6,
                },
            ],
        });
    });
};

export const getIndexTitleListAPI = () => {
    return new Promise<RequestData<IndexTitleData[]>>((resolve) => {
        resolve({
            code: "200",
            msg: "success",
            result: [
                {
                    title: "COOP攻略",
                    url: "/pages/strategy/strategy?type=coop",
                    image: "/static/index_title1.png",
                },
                {
                    title: "解答猜谜",
                    url: "/pages/strategy/strategy?type=answer",
                    image: "/static/index_title2.png",
                },
                {
                    title: "人格指数",
                    url: "/pages/strategy/strategy?type=confidant",
                    image: "/static/index_title3.png",
                },
                {
                    title: "街区指南",
                    url: "/pages/strategy/strategy?type=area",
                    image: "/static/index_title5.png",
                },
            ],
        });
    });
};

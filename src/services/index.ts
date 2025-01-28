import { http } from '@/utils/http'
import { IndexBannerData, TitleItem } from '@/types'
import { Data } from '@/types/http'
/** 
    * @Description: 获取首页banner
    * @param {number} distributionSite - banner位置（投放位置，1为首页） 默认为1
    * @return {Promise}
*/
export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<IndexBannerData[]>({
        method: 'GET',
        url: '/home/banner',
        data:{
            // 请求参数
            distributionSite,
        },
    })
}

// export const getTitleListAPI = () => {
//     return new Promise<Data<TitleItem[]>>((resolve) => {
//         resolve({
//             code: '200',
//             msg: 'success',
//             result: [
//                 { title: 'COOP攻略', url: '/pages/strategy/strategy?type=coop', image: '/static/index_title1.png' },
//                 { title: '解答猜谜', url: '/pages/strategy/strategy?type=answer', image: '/static/index_title2.png' },
//                 { title: '人格指数', url: '/pages/strategy/strategy?type=confidant', image: '/static/index_title3.png' },
//             ]
//         })
//     })
// }

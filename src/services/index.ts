import { http } from '@/utils/http'
import { BannerItem } from '@/types/home'
/** 
    * @Description: 获取首页banner
    * @param {number} distributionSite - banner位置（投放位置，1为首页） 默认为1
    * @return {Promise}
*/
export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data:{
            // 请求参数
            distributionSite,
        },
    })
}

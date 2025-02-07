import { onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";

export default {
    onShareAppMessage() {
        return {
            title: 'Persona5Royal攻略手册',
            path: '/pages/index/index' // Add the path to the page you want to share
        };
    },
    onShareTimeline() {
        return {
            title: 'Persona5Royal攻略手册',
            query: 'key=value' // Add any query parameters if needed
        };
    }
};
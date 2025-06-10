<script setup lang="ts">
import { onLaunch, onShow, onHide, onPageNotFound } from "@dcloudio/uni-app";
onLaunch(() => {
//   console.log("App Launch");
});
onShow(() => {
//   console.log("App Show");
});
onHide(() => {
//   console.log("App Hide");
});
onPageNotFound(() => {
    uni.navigateTo({
        url: '/pages/404/404'
    })
})
</script>
<style></style>

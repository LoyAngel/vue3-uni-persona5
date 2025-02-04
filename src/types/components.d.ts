import P5rTestCom from '@/components/P5rTestCom.vue'
import P5rBackground from '@/components/P5rBackground.vue'
import P5rNavbar from '@/components/P5rNavbar.vue'

declare module 'vue'{
  export interface GlobalComponents{
    P5rTestCom: typeof P5rTestCom,
    P5rBackground: typeof P5rBackground,
    P5rNavbar: typeof P5rNavbar
  }
  
}
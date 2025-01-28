import P5rTestCom from '@/components/P5rTestCom.vue'
import P5rBackground from '@/components/P5rBackground.vue'


declare module 'vue'{
  export interface GlobalComponents{
    P5rTestCom: typeof P5rTestCom,
    P5rBackground: typeof P5rBackground
  }
  
}
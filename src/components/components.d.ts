import Ps5TestCom from "./Ps5TestCom.vue";


declare module 'vue'{
  export interface GlobalComponents{
    Ps5TestCom: typeof Ps5TestCom
  }
  
}
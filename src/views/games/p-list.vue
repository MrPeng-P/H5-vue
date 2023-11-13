<script>
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();


    const gameTypeList=[{
        id:0,
        name:'老虎机',
        
    },{
        id:1,
        name:'转盘',
        
    },{
        id:2,
        name:'滚盘',
        type:'slot'
    },{
        id:3,
        name:'翻牌',
      
    },]

    const allMethods = {
     
        goHome:()=>{
            router.push("/home")
        }
    };
    onMounted(() => {
    });
    return {
        gameTypeList,
      ...allMethods,
    };
  },
};
</script>
<template>
    <div class="container">
       <div class="game-box">
        <div class="game-list" v-for="(item,index) in gameTypeList" @click="goHome()">
            <div class="game-item">{{ item.name }}</div>
        </div>
       </div>
    </div>
</template>
<style scoped>


.container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #202223;
    color: #ffffff;
}
.game-box{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 250px;
    height:250px;
    
}
.game-list{
   
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #141414;
    border: 1px solid #37d1c8;

}
</style>
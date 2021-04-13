<template>
    <view>
        <button @click="switchTabPage('/pages/index/index',1)">北京分店</button>
        <button @click="switchTabPage('/pages/index/index',2)">上海分店</button>
    </view>
</template>

<script>
    export default {
        name: "shop",
        methods:{
            switchTabPage(url,id){
                uni.switchTab({
                    url
                });
                uni.setStorageSync("shop_id",id)
            }
        }
    }
</script>

<style scoped>

</style>

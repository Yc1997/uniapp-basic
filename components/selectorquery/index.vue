<template>
    <view>
        <view id="selector-query-box" class="selector-query-box">组件内的box</view>
    </view>
</template>

<script>
    export default {
        name: "selectquerybox",
        mounted(){
            let query = uni.createSelectorQuery().in(this);
            //获取单个节点信息
            query.select('.selector-query-box').boundingClientRect(data=>{
                console.log(data);
            }).exec();
        }
    }
</script>

<style scoped>
    .selector-query-box{width:300rpx;height:300rpx;background-color:#000000;font-size:28rpx;color:#FFFFFF}
</style>

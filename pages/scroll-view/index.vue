<template>
    <view>
        纵向：<br/>
        <scroll-view :scroll-top="scrollTop" :scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-with-animation="true">
            <view class="item">套餐</view>
            <view class="item">早餐</view>
            <view class="item">晚餐</view>
            <view class="item">套餐</view>
            <view class="item">早餐</view>
            <view class="item">晚餐</view>
            <view class="item">套餐</view>
            <view class="item">早餐</view>
            <view class="item">晚餐</view>
            <view class="item">套餐</view>
            <view class="item">早餐</view>
            <view class="item">晚餐</view>
            <view class="item">套餐</view>
            <view class="item">早餐</view>
            <view class="item">最后一顿晚餐</view>
        </scroll-view>
        <button @click="tapTop">滚动到顶部</button>
        <view>
            横向：
            <scroll-view :scroll-x="true" class="scroll-x" :scroll-with-animation="true">
                <view class="item"></view>
                <view class="item"></view>
                <view class="item"></view>
                <view class="item"></view>
                <view class="item"></view>
                <view class="item"></view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "scroll-view-component",
        data(){
            return {
                scrollTop:0
            }
        },
        onLoad(){
            this.tmpScrollTop=0;
        },
        methods:{
            //顶部/左边
            upper(e){
                console.log("upper",e);
            },
            //底部/右边
            lower(e){
                console.log("lower",e);
            },
            scroll(e){
                // console.log(e);
                this.tmpScrollTop=e.detail.scrollTop;
            },
            tapTop(){
                this.scrollTop=this.tmpScrollTop;
                // setTimeout(()=>{
                //     this.scrollTop=0;
                // },30)
                this.$nextTick(()=>{
                    this.scrollTop=0;
                })
            }
        }
    }
</script>

<style scoped>
    .scroll-Y{
        width:100%;
        height:500rpx;
        overflow: hidden;
    }
    .scroll-Y .item{width:100%;height:60rpx;}

    .scroll-x{width:600rpx;height:auto;white-space: nowrap;}
    .scroll-x .item{display: inline-block;width:300rpx;height:200rpx;background-color:#007aff;margin-right:30rpx;}
</style>

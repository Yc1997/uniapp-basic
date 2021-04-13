<template>
    <view>
        <view class="uni-title uni-common-mt">
            示例 1
            <text>movable-view 区域小于 movable-area</text>
        </view>
        <movable-area class="marea1">
            <movable-view class="mview1" :x="x" :y="y" direction="all" @change="onChange">text</movable-view>
        </movable-area>
        <button @click="onTap">
            点击这里移动至 (30px, 30px)
        </button>
        <view class="uni-title uni-common-mt">
            示例 2
            <text>movable-view区域大于movable-area</text>
        </view>
        <movable-area class="marea2">
            <movable-view class="max" direction="all">
                <image src="http://vueshop.glbuys.com/uploadfiles/1484285302.jpg"></image>
            </movable-view>
        </movable-area>
    </view>
</template>

<script>
    export default {
        name: "movable",
        data(){
            return {
                x:0,
                y:0
            }
        },
        onLoad(){
            this.tmpX=0;
            this.tmpY=0;
        },
        methods:{
            onChange(e){
                // console.log(e);
                this.tmpX=e.detail.x;
                this.tmpY=e.detail.y;
            },
            onTap(){
                this.x=this.tmpX;
                this.y=this.tmpY;
                this.$nextTick(()=>{
                    this.x=30;
                    this.y=30;
                })
            }
        }
    }
</script>

<style scoped>
    .marea1{width:100%;height:600rpx;overflow:hidden;}
    .mview1{width:300rpx;height:300rpx;background-color:#007aff;}

    .marea2{width:300rpx;height:300rpx;overflow:hidden;}
    .marea2 .max{width:600rpx;height:600rpx;}
    .marea2 .max image{width:100%;height:100%;}
</style>

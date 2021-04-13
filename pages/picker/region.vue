<template>
    <view>
        <picker mode="region" :value="areas" @change="bindPickerChange">
            <view class="picker">{{area?area:'请选择'}}</view>
        </picker>
    </view>
</template>

<script>
    export default {
        name: "picker-component",
        data(){
            return {
                area:"",
                areas:[]
            }
        },
        methods:{
            bindPickerChange(e){
                console.log(e);
                this.areas=e.detail.value;
                this.area=this.areas.join(" ");
            }
        }
    }
</script>

<style scoped>
    .picker{width: 500rpx;height:80rpx;border:1px solid #EFEFEF;font-size:28rpx;text-align: center;line-height:80rpx;}
</style>

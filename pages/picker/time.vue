<template>
    <view>
        <picker value="13:35" mode="time" @change="bindPickerChange" start="12:00" end="14:00">
            <view class="picker">{{time?time:'请选择'}}</view>
        </picker>
    </view>
</template>

<script>
    export default {
        name: "picker-component",
        data(){
            return {
                time:""
            }
        },
        methods:{
            bindPickerChange(e){
                console.log(e);
                this.time=e.detail.value;
            }
        }
    }
</script>

<style scoped>
    .picker{width: 500rpx;height:80rpx;border:1px solid #EFEFEF;font-size:28rpx;text-align: center;line-height:80rpx;}
</style>

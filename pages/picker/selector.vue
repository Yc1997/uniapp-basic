<template>
    <view>
        <picker :range="range" value="0" @change="bindPickerChange" range-key="title">
            <view class="picker">{{range[index].title?range[index].title:'请选择'}}</view>
        </picker>
    </view>
</template>

<script>
    export default {
        name: "picker-component",
        data(){
            return {
                range:[
                    {id:1,title:'中国'},
                    {id:2,title:'美国'},
                    {id:3,title:'巴西'},
                    {id:4,title:'日本'}
                    ],
                index:""
            }
        },
        methods:{
            bindPickerChange(e){
                console.log(e);
                this.index=e.detail.value;
            }
        }
    }
</script>

<style scoped>
    .picker{width: 500rpx;height:80rpx;border:1px solid #EFEFEF;font-size:28rpx;text-align: center;line-height:80rpx;}
</style>

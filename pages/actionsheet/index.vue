<template>
    <view>
        <view class="gender" @click="showActionSheet">{{gender=='1'?'男':(gender=='2'?'女':'请选择')}}</view>
    </view>
</template>

<script>
    export default {
        name: "action-sheet",
        data(){
            return {
                gender:""
            }
        },
        methods:{
            showActionSheet(){
                uni.showActionSheet({
                    itemList: ['男', '女'],
                    success: (res) =>{
                        // console.log(res);
                        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
                        this.gender=res.tapIndex + 1;
                    },
                    fail:  (res)=> {
                        console.log(res.errMsg);
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .gender{width:300rpx;height:60rpx;border:1px solid #EFEFEF;font-size:28rpx;line-height:60rpx;}
</style>

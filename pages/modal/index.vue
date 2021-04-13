<template>
    <view>
        <button @click="showAlert">alert</button>
        <button @click="showConfirm">confirm</button>
    </view>
</template>

<script>
    export default {
        name: "modal",
        methods:{
            showAlert(){
                uni.showModal({
                    title: 'alert',
                    showCancel:false,
                    content: '这是一个alert模态弹窗',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定');
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                        }
                    }
                });
            },
            showConfirm(){
                uni.showModal({
                    title: 'confirm',
                    showCancel:true,
                    content: '这是一个confirm模态弹窗',
                    cancelColor:"#FF0000",
                    confirmColor:"#0000FF",
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定');
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                        }
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>

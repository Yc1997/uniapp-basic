<template>
    <view>
        <view class="form-main">
            密码：<input type="text" :password="isShowPwd" placeholder="请输入密码"> <switch @change="showPwd" style="transform: scale(0.7)"></switch>
        </view>
    </view>
</template>

<script>
    export default {
        name: "switch-component",
        data(){
            return {
                isShowPwd:true
            }
        },
        methods:{
            showPwd(e){
                console.log(e);
                this.isShowPwd=!e.target.value;
            }
        }
    }
</script>

<style scoped>
    .form-main{display:flex}
</style>

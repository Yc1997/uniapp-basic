<template>
    <view>
        <view class="input-wrap">用户名：<input type="text" v-model="username" /></view>
        <view class="input-wrap">密码：<input type="text" password v-model="password" /></view>
        <view><button @click="doLogin">登录</button></view>
    </view>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                username:"",
                password:""
            }
        },
        methods:{
            doLogin(){
                if(this.username.trim()==""){
                    uni.showToast({
                        title: '请输入用户名',
                        icon:"none",
                        duration: 2000
                    });
                    return;
                }
                if(this.password.trim()==""){
                    uni.showToast({
                        title: '请输入密码',
                        icon:"none",
                        duration: 2000
                    });
                    return;
                }
                uni.setStorageSync('username', this.username);
                uni.setStorageSync("isLogin",true);
                uni.navigateBack({
                    delta:1
                })
            }
        }
    }
</script>

<style scoped>
    .input-wrap{display:flex;}
</style>

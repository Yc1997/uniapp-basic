<template>
    <view>
        欢迎{{username}}回来！<button @click="outLogin">安全退出</button>
    </view>
</template>

<script>
    export default {
        name: "profile",
        data(){
            return {
                username:""
            }
        },
        onLoad(){
            if(!uni.getStorageSync("isLogin")){
                uni.redirectTo({
                    url:"/pages/login/index"
                })
            }
            this.username=uni.getStorageSync("username");
        },
        methods:{
            //安全退出
            outLogin(){
                uni.clearStorageSync();
                uni.redirectTo({
                    url:"/pages/login/index"
                })
            }
        }
    }
</script>

<style scoped>

</style>

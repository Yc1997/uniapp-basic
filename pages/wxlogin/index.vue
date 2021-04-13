<template>
    <view>
        <button @click="doLogin">微信授权登录</button>
    </view>
</template>

<script>
    export default {
        name: "wxlogin",
        methods:{
            doLogin(){
                uni.login({
                    provider: 'weixin',
                    success: (loginRes)=> {
                        // console.log(loginRes);
                        let code=loginRes.code;
                        let appid="appid";
                        let secret="secret";
                        uni.request({
                            url:"登录接口",
                            method:"POST",
                            header:{
                                "content-type":"application/x-www-form-urlencoded"
                            },
                            data:{
                                code:code,
                                appid:appid,
                                secret:secret
                            }
                        }).then(data=>{
                            let [err,res]=data;
                            // console.log(res);
                            let openid=res.data.data.openid;
                            console.log(openid);
                            // 获取用户信息
                            uni.getUserInfo({
                                provider: 'weixin',
                                success:  (infoRes)=> {
                                    console.log(infoRes);
                                    //请求服务端接口
                                }
                            });
                        })
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>

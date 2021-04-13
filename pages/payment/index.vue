<template>
    <view>
        <view class="input-wrap">金额：<input type="text" placeholder="请输入金额" v-model="price"></view>
        <view><button @click="goPay()">支付</button></view>
    </view>
</template>

<script>
    export default {
        name: "payment",
        data(){
            return {
                price:0.01
            }
        },
        methods:{
            goPay(){
                uni.login({
                    provider: 'weixin',
                    success: async (loginRes)=> {
                        // console.log(loginRes);
                        let code=loginRes.code;
                        let appid="自己的appid";
                        let secret="自己的secret";
                        //获取用户的openid
                        let openid=await uni.request({
                            url:"接口地址",
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
                            return openid;
                        })
                        //获取统一下单接口信息
                       let orderRes=await uni.request({
                            url:"获取统一下单接口信息",
                            method:"POST",
                            header:{
                                "content-type":"application/x-www-form-urlencoded"
                            },
                            data:{
                                open_id:openid,
                                notify_url:"随机填个地址",
                                ordernum:this.getOrdernum(),
                                price:this.price,
                                body:"测试支付"
                            }
                        }).then(data=>{
                            let [err,res]=data;
                            // console.log(res);
                            return res.data.data;
                        })
                        // console.log(orderRes);
                        uni.requestPayment({
                            nonceStr:orderRes.nonceStr,
                            package:orderRes.package,
                            signType:"MD5",
                            paySign:orderRes.paySign,
                            timeStamp:orderRes.timeStamp.toString(),
                            success:  (res)=> {
                                console.log('success:' + JSON.stringify(res));
                            },
                            fail:  (err)=> {
                                console.log('fail:' + JSON.stringify(err));
                            }
                        })
                    }
                });
            },
            getOrdernum(){
                return new Date().getTime();
            }
        }
    }
</script>

<style scoped>
    .input-wrap{display:flex;}
</style>

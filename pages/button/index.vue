<template>
    <view>
        <button type="default" class="btn" hover-class="none">button组件</button>
        <button type="primary" class="btn" hover-class="none" open-type="getUserInfo" @getuserinfo="getUserInfo($event)">获取用户信息</button>
        <view>头像：<image :src="head" style="width:200rpx;height:200rpx;"></image></view>
        <view>国家：{{country}}</view>
        <view>省份：{{province}}</view>
        <view>城市：{{city}}</view>
        <view>性别：{{gender=='1'?'男':(gender=='2'?'女':"")}}</view>
        <view>昵称：{{nickname}}</view>
        <button type="default" class="btn" hover-class="none" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
        <button type="default" class="btn" hover-class="none" open-type="share">分享小程序</button>
        <view>我的手机号：{{cellphone}}</view>
    </view>
</template>

<script>
    export default {
        name: "button-component",
        data(){
            return {
                head:"",
                country:"",
                province:"",
                city:"",
                gender:"",
                nickname:"",
                cellphone:""
            }
        },
        methods:{
            getUserInfo(e){
                console.log(e);
                this.head=e.detail.userInfo.avatarUrl;
                this.country=e.detail.userInfo.country;
                this.province=e.detail.userInfo.province;
                this.city=e.detail.userInfo.city;
                this.gender=e.detail.userInfo.gender;
                this.nickname=e.detail.userInfo.nickName;
            },
            //获取手机号
            getPhoneNumber(e){
                let iv=e.detail.iv;
                let enData=e.detail.encryptedData;
                uni.login({
                    provider: 'weixin',
                    success: (loginRes)=> {
                        let jsCode=loginRes.code;
                        uni.request({
                            method:"POST",
                            url: 'xxxxxxx',
                            header:{
                                "Content-Type":"application/x-www-form-urlencoded"
                            },
                            data:{
                                code:jsCode,
                                appid:"xxxxxxxx",
                                secret:"xxxxxxxx"
                            },
                            success: (res) => {
                                let sessionKey=res.data.data.session_key;
                                uni.request({
                                    method:"POST",
                                    url:"xxxxxxx",
                                    header:{
                                        "Content-Type":"application/x-www-form-urlencoded"
                                    },
                                    data:{
                                        encrypteddata:enData,
                                        iv:iv,
                                        session_key:sessionKey
                                    },
                                    success:(res)=>{
                                        console.log(res);
                                        this.cellphone=res.data.data.phoneNumber;
                                    }
                                })
                            }
                        });
                    }
                });
            }
        },
        //分享小程序
        onShareAppMessage(res) {
            if (res.from === 'button') {// 来自页面内分享按钮
                console.log(res.target)
            }
            console.log(res.from);
            return {
                title: 'button组件',
                path: '/pages/button/index',
                imageUrl:"xxxxxx/1484285302.jpg"
            }
        }
    }
</script>

<style scoped>
    .btn{width:200px;height:80rpx;color:#000000;font-size:28rpx;line-height:80rpx;margin-top:20rpx;border-radius: 3px;}
    .btn:after{border:0 none;}
</style>

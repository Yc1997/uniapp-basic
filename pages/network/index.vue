<template>
    <view>
        <view class="view-wrap">
            <video id="my-video" :src="videoUrl" :controls="true" :autoplay="true"></video>
            <view class="tip" v-show="isTip">当前网络环境为"<text>{{networkType}}</text>"</view>
            <view class="play-btn" v-show="isTip" @click="play()">继续播放</view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "network",
        data(){
            return {
                videoUrl:"http://www.lucklnk.com/video/4.mp4",
                networkType:"",
                isTip:false
            }
        },
        onLoad(){
            this.videoContext = uni.createVideoContext('my-video');
            //获取网络类型
            uni.getNetworkType({
                success: (res)=> {
                    // console.log(res.networkType);
                    this.networkType=res.networkType;
                    if(this.networkType!=='wifi'){
                        this.isTip=true;
                        //暂停视频 播放
                        this.videoContext.pause();
                    }
                }
            });

            //监听网络变化
            uni.onNetworkStatusChange( (res)=> {
                console.log(res.isConnected);
                console.log(res.networkType);
                this.networkType=res.networkType;
                if(this.networkType!=='wifi'){
                    this.isTip=true;
                    //暂停视频 播放
                    this.videoContext.pause();
                }else{
                    this.isTip=false;
                    this.videoContext.play();
                }
            });
        },
        methods:{
            play(){
                this.videoContext.play();
                this.isTip=false;
            }
        }
    }
</script>

<style scoped>
    .view-wrap{width:100%;height:500rpx;position: relative;}
    .view-wrap video{width:100%;height:100%;}
    .view-wrap .tip{width:auto;height:auto;position: absolute;z-index:2;left:50%;top:50%;transform: translate(-50%,-50%);padding:10rpx 30rpx;background-color:rgba(0,0,0,0.6);font-size:28rpx;color:#FFFFFF;border-radius: 4px;}
    .view-wrap .play-btn{position: absolute;z-index:2;left:50%;top:60%;transform: translateX(-50%);padding:10rpx 30rpx;border-radius: 4px;background-color:rgba(255,50,50,0.6);font-size:28rpx;color:#FFFFFF}
</style>

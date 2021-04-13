<template>
    <view>
        <video id="myVideo" :src="videoUrl" controls style="width:100%;height:500rpx;" object-fit="fill" @timeupdate="getTime" :danmu-list="danmuList" :danmu-btn="true"></video>
        当前播放时间：{{currentTime|formatSeconds}}/{{duration|formatSeconds}}
        <input type="text" placeholder="请输入弹幕内容" v-model="danmuValue">
        <button @click="sendDanmu()">发送弹幕</button>
        <button @click="play()">播放</button>
        <button @click="pause()">暂停</button>
        <button @click="goTime()">前进15秒</button>
        <button @click="backTime()">后退15秒</button>
    </view>
</template>

<script>
    export default {
        name: "video-component",
        data(){
            return {
                videoUrl:"http://www.lucklnk.com/video/4.mp4",
                currentTime:"00:00",
                duration:"00:00",
                danmuList: [{
                    text: '第 1s 出现的弹幕',
                    color: '#ff0000',
                    time: 1
                },
                    {
                        text: '第 3s 出现的弹幕',
                        color: '#ff00ff',
                        time: 3
                    }
                ],
                danmuValue:""
            }
        },
        onReady(){
            //创建视频组件控制实例
            this.videoContext = uni.createVideoContext('myVideo')
        },
        methods:{
            play(){
                this.videoContext.play();
            },
            pause(){
                this.videoContext.pause();
            },
            //获取时长
            getTime(e){
                // console.log(e);
                this.currentTime=e.detail.currentTime;
                this.duration=e.detail.duration;
            },
            goTime(){
                this.videoContext.seek(this.currentTime+15);
            },
            backTime(){
                this.videoContext.seek(this.currentTime-15);
            },
            //发送弹幕
            sendDanmu(){
                this.videoContext.sendDanmu({
                    text: this.danmuValue,
                    color: this.getRandomColor()
                })
            },
            getRandomColor() {
                const rgb = []
                for (let i = 0; i < 3; ++i) {
                    let color = Math.floor(Math.random() * 256).toString(16)
                    color = color.length == 1 ? '0' + color : color
                    rgb.push(color)
                }
                console.log('#' + rgb.join(''));
                return '#' + rgb.join('')
            }
        },
        filters:{
            formatSeconds(val){
                let minute=parseInt(val/60)?parseInt(val/60):"0";//分
                let second=parseInt(val%60)?parseInt(val%60):"0"; //秒
                if(minute<10){
                    minute="0"+minute;
                }
                if(second<10){
                    second="0"+second;
                }
                return minute+":"+second;
            }
        }
    }
</script>

<style scoped>

</style>

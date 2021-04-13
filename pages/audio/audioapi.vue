<template>
    <view>
        <div @click="doPlay()">播放</div>
        <div @click="doPause()">暂停</div>
        <view>当前播放时间：{{currentTime}}/{{duration}}</view>
    </view>
</template>

<script>
    export default {
        name: "audioapi",
        data(){
            return {
                currentTime:"00:00",//当前播放时间
                duration:"00:00",//总时长
								startTime:false
            }
        },
        onLoad(){
            this.timer=null;
            //创建实例
            this.innerAudioContext = uni.createInnerAudioContext();
						this.innerAudioContext.src="http://www.lucklnk.com/music/jiehun/1.mp3";
            this.innerAudioContext.onPlay(()=>{
                this.timer=setInterval(()=>{
                    this.currentTime=this.formatSeconds(this.innerAudioContext.currentTime);
                },1000);
            });
						this.innerAudioContext.onCanplay(()=>{
						    //初始化总时长
								// this.duration=this.formatSeconds(this.innerAudioContext.duration);
								//如果在onCanplay事件中直接获取总时长，那么在还没点击播放的时候总时长就出来了，这样不合理，应该播放之后出来才对。
						    //延迟300ms以上
						    // setTimeout(()=>{
						    //     this.duration=this.formatSeconds(this.innerAudioContext.duration);
						    // },300)
						})
        },
        //页面离开
        onUnload(){
            clearInterval(this.timer);
            //销毁实例
            this.innerAudioContext.destroy();
        },
        methods:{
            //播放音频
            doPlay(){
                // this.innerAudioContext.src="http://www.lucklnk.com/music/jiehun/1.mp3"; 
								//如果将音频地址放在点击播放方法中，每次暂停之后就无法继续播放，会重新播放
								 //延迟300ms以上
								setTimeout(()=>{
								    this.duration=this.formatSeconds(this.innerAudioContext.duration);
								},300)
								this.innerAudioContext.play();
            },
            //暂停音频
            doPause(){
                this.innerAudioContext.pause();
                clearInterval(this.timer);
            },
            //格式化时间秒转换成03:56格式
            formatSeconds(val){
                let minute=parseInt(val/60);//分
                let second=parseInt(val%60);//秒
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

<template>
    <view>
        <button @tap="startRecord">开始录音</button>
        <button @tap="endRecord">停止录音</button>
        <button @tap="playVoice">播放录音</button>
    </view>
</template>

<script>
    export default {
        name: "recorder",
        onLoad() {
            //创建录音管理器实例
            this.recorderManager = uni.getRecorderManager();
            //创建音频组件控制实例
            this.innerAudioContext = uni.createInnerAudioContext();
            //停止录音事件
            this.recorderManager.onStop((res)=> {
                console.log('recorder stop' + JSON.stringify(res));
                //音频文件路径
                this.voicePath = res.tempFilePath;
            });
        },
        methods:{
            startRecord() {
                console.log('开始录音');

                this.recorderManager.start({
                    format:"mp3"
                });
            },
            endRecord() {
                console.log('录音结束');
                this.recorderManager.stop();
            },
            playVoice() {
                console.log('播放录音');

                if (this.voicePath) {
                    this.innerAudioContext.src = this.voicePath;
                    this.innerAudioContext.play();
                }
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <view>
        <button @click="setClipBroad">复制内容</button>
        <button @click="getClipBroad">获取内容</button>
        <view>剪贴板内容：{{content}}</view>
    </view>
</template>

<script>
    export default {
        name: "clipbroad",
        data(){
            return {
                content:""
            }
        },
        methods:{
            setClipBroad(){
                uni.setClipboardData({
                    data: '我的口令',
                    success:  ()=> {
                        console.log('success');
                    }
                });
            },
            getClipBroad(){
                uni.getClipboardData({
                    success: (res)=> {
                        console.log(res.data);
                        this.content=res.data;
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>

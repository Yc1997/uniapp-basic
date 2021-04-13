<template>
    <view>
        <view>图片预览：<image :src="showImage" style="width:200rpx;height:200rpx;"></image></view>
        <button @click="uploadImage">上传图片</button>
        <button @click="stopUpload">终止上传</button>
    </view>
</template>

<script>
    export default {
        name: "uploadfile",
        data(){
            return {
                showImage:""
            }
        },
        onLoad(){
            this.uploadTask=null
        },
        methods:{
            uploadImage(){
                uni.chooseImage({
                    success: (chooseImageRes) => {
                        const tempFilePaths = chooseImageRes.tempFilePaths;
                        // console.log(tempFilePaths);
                        this.uploadTask=uni.uploadFile({
                            url: '上传图片接口地址',
                            filePath: tempFilePaths[0],
                            name: 'headfile',
                            success: (uploadFileRes) => {
                                console.log(uploadFileRes.data);
                                let data=JSON.parse(uploadFileRes.data);
                                this.showImage="获取图片在线地址"+data.data.msbox;
                            }
                        });
                    }
                });
            },
            //终止上传
            stopUpload(){
                this.uploadTask.abort();
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <view>
        <view>图片预览：
            <view v-for="(item,index) in showImages" :key="index">
                <image :src="item" style="width:200rpx;height:200rpx;"></image>
            </view>
        </view>
        <button @click="uploadImage">上传图片</button>
    </view>
</template>

<script>
    export default {
        name: "uploadfile",
        data(){
            return {
                showImages:[]
            }
        },
        methods:{
            uploadImage(){
							//上传多张图片
                uni.chooseImage({
                    success: (chooseImageRes) => {
                        const tempFilePaths = chooseImageRes.tempFilePaths;
                        // console.log(tempFilePaths);
                        if(tempFilePaths.length>0) {
                            for (let i = 0; i < tempFilePaths.length; i++) {
                                uni.uploadFile({
                                    url: '上传图片接口地址',
                                    filePath: tempFilePaths[i],
                                    name: 'headfile',
                                    success: (uploadFileRes) => {
                                        console.log(uploadFileRes.data);
                                        let data = JSON.parse(uploadFileRes.data);
                                        this.showImages.push("获取图片接口地址" + data.data.msbox);
                                    }
                                });
                            }
                        }
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

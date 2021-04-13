<template>
    <view>
        <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" indicator-color="#000000" indicator-active-color="#0000FF">
            <swiper-item v-for="(item,index) in images" :key="index">
                <image :src="item.path"></image>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
    export default {
        name: "swiper-component",
        data() {
            return {
                images:[
                    {
                        //1484285302.jpg"
                    },
                    {
                        //1484285334.jpg"
                    },
                    {
                        //1524206455.jpg"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .swiper{width:100%;height:400rpx;}
    .swiper image{width:100%;height:100%}
</style>

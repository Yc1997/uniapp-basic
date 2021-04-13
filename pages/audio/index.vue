<template>
    <view>
        <view class="page-body">
            <view class="page-section page-section-gap" style="text-align: center;">
                <audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" controls></audio>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "audio-component",
        data() {
            return {
                current: {
                    poster: 'http://www.lucklnk.com/music/jiehun/1.png',
                    name: '咱们结婚吧',
                    author: '齐晨',
                    src: 'http://www.lucklnk.com/music/jiehun/1.mp3',
                }
            }
        }
    }
</script>

<style scoped>

</style>

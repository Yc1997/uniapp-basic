<template>
    <view>
        <view :animation="animationData" style="background:red;height:100rpx;width:100rpx"></view>
        <button @click="rotateAndScale">旋转同时放大</button>
        <button @click="rotateThenScale">先旋转后放大</button>
        <button @click="rotateAndScaleThenTranslate">先旋转同时放大，然后平移</button>
    </view>
</template>

<script>
    export default {
        name: "animation",
        data() {
            return {
                animationData: {}
            }
        },
        onShow: function(){
            //创建animation实例
            this.animation = uni.createAnimation({
                duration: 1000,
                timingFunction: 'ease',
            })

            // this.animation.scale(2,2).rotate(45).step()

            this.animationData = this.animation.export()

            setTimeout(()=> {
                this.animation.translate(50,200).step()
                this.animationData = this.animation.export()
            }, 1000)
        },
        methods:{
            rotateAndScale: function () {
                // 旋转同时放大
                this.animation.rotate(45).scale(2, 2).step()
                this.animationData = this.animation.export()
            },
            rotateThenScale: function () {
                // 先旋转后放大
                this.animation.rotate(45).step()
                this.animation.scale(2, 2).step()
                this.animationData = this.animation.export()
            },
            rotateAndScaleThenTranslate: function () {
                // 先旋转同时放大，然后平移
                this.animation.rotate(45).scale(2, 2).step()
                this.animation.translate(300, 250).step({ duration: 500 ,timingFunction:"ease-in-out"})
                this.animationData = this.animation.export()
            }
        }
    }
</script>

<style scoped>

</style>

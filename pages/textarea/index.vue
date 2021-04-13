<template>
    <view>
        <view class="uni-title uni-common-pl">输入区域高度自适应，不会出现滚动条</view>
        <view class="uni-textarea">
            <textarea @blur="bindTextAreaBlur" auto-height />
        </view>
        <view class="uni-title uni-common-pl">占位符字体是红色的textarea</view>
        <view class="uni-textarea">
            <textarea placeholder-style="color:#F76260" placeholder="占位符字体是红色的" v-model="content"/>
        </view>
        <button @click="submit">提交</button>
    </view>
</template>

<script>
    export default {
        name: "textarea-component",
        data() {
            return {
                content:""
            }
        },
        methods: {
            bindTextAreaBlur: function (e) {
                console.log(e.detail.value)
            },
            submit(){
                let content=this.content.replace(/\n/g,"<br/>");
                content=content.replace(/\r\n/g,"<br/>");
                console.log(content);
            }
        }
    }
</script>

<style scoped>

</style>

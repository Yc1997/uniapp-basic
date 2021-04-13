<template>
    <view>
        <text :decode="true" space="nbsp" :selectable="true">{{text}}</text>
    </view>
</template>

<script>
    export default {
        name: "text-component",
        data(){
            return {
                text:"我是&lt;text&gt;&nbsp;    组件"
            }
        }
    }
</script>

<style scoped>

</style>

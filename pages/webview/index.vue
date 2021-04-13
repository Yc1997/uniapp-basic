<template>
    <view>
        <web-view :webview-styles="webviewStyles" src="http://baidu.com"></web-view>
    </view>
</template>

<script>
    export default {
        name: "webview",
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>

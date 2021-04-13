<template>
    <view>
        <rich-text :nodes="content"></rich-text>
    </view>
</template>

<script>
    import parseHtml from "../../static/js/utils/html-parser";
    export default {
        name: "rich-text-component",
        data(){
            return {
                content:parseHtml("<div>我是<span style='color:#FF0000'>富文本组件</span></div>"),
                arrContent:[
                    {
                        name:"div",
                        children:[
                            {
                                type:"text",
                                text:"我是"
                            },
                            {
                                name:"span",
                                attrs:{
                                    "style":"color:#FF0000"
                                },
                                children:[
                                    {
                                        type:"text",
                                        text:"富文本组件"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>

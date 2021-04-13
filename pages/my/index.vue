<template>
    <div>我的
        <button @click="setTabBar">设置TabBar</button>
        <button @click="setTabBarStyle">更改TabBar的样式</button>
        <button @click="hideTabBar">隐藏TabBar</button>
        <button @click="showTabBar">显示TabBar</button>
        <button @click="removeBadge">移除右上角文本</button>
        <button @click="removeRedDot">移除右上角红点</button>
<!--        <uni-tab-bar :curRoute="curRoute"></uni-tab-bar>-->
    </div>
</template>

<script>
    export default {
        name: "my",
        data() {
            return {
                curRoute:""
            }
        },
        onLoad(opts) {
            // console.log(opts);
            let pages=getCurrentPages();
            let curPage=pages[pages.length-1];
            this.curRoute=curPage.route;
            // console.log(this.curRoute);

            uni.setTabBarBadge({
                index: 1,
                text: '100'
            })

            uni.showTabBarRedDot({
                index:2
            })
        },
        methods:{
            setTabBar(){
                uni.setTabBarItem({
                    index: 0,
                    text: 'Home'
                })
                uni.setTabBarItem({
                    index: 1,
                    text: 'Cart'
                })
                uni.setTabBarItem({
                    index: 2,
                    text: 'My'
                })
            },
            setTabBarStyle(){
                uni.setTabBarStyle({
                    color: '#FF0000',
                    selectedColor: '#00FF00',
                    backgroundColor: '#0000FF',
                    borderStyle: 'white'
                })
            },
            hideTabBar(){
                uni.hideTabBar({
                    animation:true
                })
            },
            showTabBar(){
                uni.showTabBar({
                    animation:true
                })
            },
            removeBadge(){
                uni.removeTabBarBadge({
                    index:1
                })
            },
            removeRedDot(){
                uni.hideTabBarRedDot({
                    index:2
                })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <navigator open-type="navigateBack" delta="1"><button>返回</button></navigator>
        <button @click="goBack()">api-返回</button>
        <navigator open-type="navigate" url="/pages/news/index">新闻详情1</navigator>
        <navigator open-type="navigate" url="/pages/news/index">新闻详情2</navigator>
        <navigator open-type="navigate" url="/pages/news/index">新闻详情3</navigator>
        <button @click="goPage('/pages/news/index')">新闻详情4</button>
        <navigator open-type="reLaunch" url="/pages/news/index"><button>reLaunch跳转到新闻页面</button></navigator>
        <button @click="reLaunch('/pages/news/index')">api-reLaunch跳转到新闻页面</button>
    </div>
</template>

<script>
    export default {
        name: "news",
        onLoad(opts){
            // console.log(opts.id,decodeURIComponent(opts.title));
            let pages=getCurrentPages();
            //获取第一个页面
            let firstPage=pages[0];
            // console.log(firstPage.route);
            //获取当前页面
            let curPage=pages[pages.length-1];
            // console.log(curPage.route);
            // console.log(pages.length);
        },
        methods:{
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
            },
            reLaunch(url){
                uni.reLaunch({
                    url
                })
            },
            goPage(url){
                let pages=getCurrentPages();
                console.log(pages.length);
                if(pages.length>=10){
                    uni.redirectTo({
                        url
                    })
                }else{
                    uni.navigateTo({
                        url
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>

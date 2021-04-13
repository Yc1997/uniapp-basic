<template>
    <view>
        <view>LOGO： <image :src="logo" style="width:200rpx;height:200rpx;"></image></view>
        <view>商品名称：{{shopName}}</view>
        <view>公告：{{notice}}</view>
        <view>菜品分类：</view>
        <view v-for="(item,index) in classifys" :key="item.cid">{{item.title}}</view>
    </view>
</template>

<script>
    export default {
        name: "request",
        data(){
            return {
                logo:"",
                shopName:"",
                notice:"",
                classifys:[]
            }
        },
        async onLoad(){
            uni.hideHomeButton()
            uni.setNavigationBarTitle({
                title: '发起网络请求'
            });
            setTimeout(()=>{
                uni.setNavigationBarColor({
                    frontColor: '#ffffff',
                    backgroundColor: '#ff0000',
                    animation: {
                        duration: 400,
                        timingFunc: 'easeIn'
                    }
                })
            },300)
            uni.showLoading({
                title: '加载中...'
            });
            uni.showNavigationBarLoading()
            // uni.request({
            //     url: '接口地址',
            //     data:{
            //         "branch_shop_id":"商品id"
            //     },
            //     success: (res) => {
            //         console.log(res);
            //         this.logo=res.data.data.logo;
            //         this.shopName=res.data.data.shop_name;
            //         this.notice=res.data.data.notice;
            //     }
            // });

            // uni.request({
            //     url: '接口地址',
            //     data:{
            //         "branch_shop_id":"商品id"
            //     }
            // }).then(data=>{
            //     let [err,res]=data;
            //     // console.log(res);
            //     this.logo=res.data.data.logo;
            //     this.shopName=res.data.data.shop_name;
            //     this.notice=res.data.data.notice;
            // });

            let [err,res]=await uni.request({
                url: '接口地址',
                data:{
                    "branch_shop_id":"商品id"
                }
            });
            this.logo=res.data.data.logo;
            this.shopName=res.data.data.shop_name;
            this.notice=res.data.data.notice;

            uni.request({
                url:"接口地址",
                method:"POST",
                data:{
                    "branch_shop_id":"商品id"
                },
                header:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                success:(res)=>{
                    uni.hideLoading();
                    uni.hideNavigationBarLoading()
                    console.log(res);
                    this.classifys=res.data.data;
                }
            })
        }
    }
</script>

<style scoped>

</style>

<template>
    <view>
        <view v-for="(item,index) in shops" :key="item.branch_shop_id">{{item.branch_shop_name}}</view>
    </view>
</template>

<script>
    export default {
        name: "pulldownrefresh",
        data(){
            return {
                shops:[]
            }
        },
        onLoad(){
            uni.startPullDownRefresh({
                success:()=>{
                    this.getShops();
                }
            })
        },
        onPullDownRefresh(){
            this.getShops(()=>{
                uni.stopPullDownRefresh()
            });
        },
        methods:{
            getShops(complete){
                uni.request({
                    url:"接口地址"
                }).then(data=>{
                    let [err,res]=data;
                    // console.log(res);
                    this.shops=res.data.data;
                    if(complete){
                        complete()
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>

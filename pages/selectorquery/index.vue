<template>
    <view>
        <view id="box1" class="box"></view>
        <view id="box2" class="box red"></view>
        <view id="box3" class="box green"></view>
        <SelectQueryBox></SelectQueryBox>
    </view>
</template>

<script>
    import SelectQueryBox from "../../components/selectorquery";
    export default {
        name: "selectorquery",
        onLoad(){
            let query = uni.createSelectorQuery();
            //获取单个节点信息
            query.select('.box').boundingClientRect(data=>{
                // console.log(data);
            }).exec();

            //获取多个节点信息
            query.selectAll('.box').boundingClientRect(data=>{
                // console.log(data);
                if(data.length>0){
                    for(let i=0;i<data.length;i++){
                        console.log(data[i].id,data[i].top);
                    }
                }
            }).exec();
        },
        components:{
            SelectQueryBox
        }
    }
</script>

<style scoped>
    .box{width:200rpx;height:200rpx;background-color:#0000FF;position:absolute;left:50rpx;top:300rpx;}
    .box.red{background-color:#FF0000;top:650rpx;}
    .box.green{background-color:#00FF00;top:950rpx;}
</style>

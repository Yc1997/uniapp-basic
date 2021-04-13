<template>
    <view class="page">
        <scroll-view :scroll-y="true" class="scroll">
            <view class="item" v-for="(item,index) in items" :key="index">
                <view class="title">{{item.title}}</view>
                <view class="amount-wrap">
                    <view>数量：</view>
                    <view class="amount">
                        <text v-if="!item.isInput" @click="showInput(index)">{{item.amount}}</text>
                        <input :focus="true" type="number" v-model="item.amount" v-if="item.isInput" @blur="hideInput(index)">
                    </view>
                </view>
            </view>
        </scroll-view>
<!--        <uni-tab-bar :curRoute="curRoute"></uni-tab-bar>-->
    </view>
</template>

<script>
    export default {
        name: "cart",
        data() {
            return {
                curRoute:"",
                items:[
                    {
                        title:"Vue",
                        amount:1,
                        isInput:false//是否显示input组件
                    },
                    {
                        title:"JavaScript",
                        amount:1,
                        isInput:false
                    },
                    {
                        title:"React",
                        amount:1,
                        isInput:false
                    }
                ]
            }
        },
        onLoad(opts) {
            // console.log(opts);
            let pages=getCurrentPages();
            let curPage=pages[pages.length-1];
            this.curRoute=curPage.route;
            // console.log(this.curRoute);
        },
        methods:{
            //显示input组件
            showInput(index){
                this.items[index].isInput=true;
                this.$set(this.items,index,this.items[index]);
            },
            //隐藏input组件
            hideInput(index){
                this.items[index].isInput=false;
                this.$set(this.items,index,this.items[index]);
            }
        }
    }
</script>

<style scoped>
    .page{width:100%;height:auto;}
    .scroll{width:100%;height:600rpx;overflow:hidden}
    .scroll .item{width:100%;margin-bottom:20rpx;}
    .scroll .item .amount-wrap{display:flex;}
    .scroll .item .amount-wrap text,.scroll .item .amount-wrap input{padding:0 40rpx;}
</style>

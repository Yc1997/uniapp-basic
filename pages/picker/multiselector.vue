<template>
    <view>
        <picker :range="range" mode="multiSelector" value="0" @change="bindPickerChange" range-key="title" @columnchange="bindColumnChange">
            <view class="picker">{{showTitle?showTitle:'请选择'}}</view>
        </picker>
    </view>
</template>

<script>
    export default {
        name: "picker-component",
        data(){
            return {
                range:[
                    [
                        {id:1,title:"主食"},
                        {id:2,title:"饮料"},
                        {id:3,title:"小吃"}
                    ],
                    [
                        {id:1,title:"鸡肉汉堡"},
                        {id:2,title:"牛肉汉堡"},
                        {id:3,title:"培根汉堡"}
                    ]
                ],
                showTitle:""
            }
        },
        methods:{
            bindPickerChange(e){
                console.log(e);
                // this.index=e.detail.value;
                this.showTitle=this.range[0][e.detail.value[0]].title+'-'+this.range[1][e.detail.value[1]].title;
            },
            bindColumnChange(e){
                // console.log(e);
                let column=e.detail.column;
                let index=e.detail.value;
                console.log(column,index);
                if(column==0){
                    switch (index) {
                        case 0://主食
                            this.range[1]=[
                                {id:1,title:"鸡肉汉堡"},
                                {id:2,title:"牛肉汉堡"},
                                {id:3,title:"培根汉堡"}
                            ];
                            this.$set(this.range,1,this.range[1]);
                            break;
                        case 1://饮料
                            this.range[1]=[
                                {id:1,title:"可乐"},
                                {id:2,title:"雪碧"},
                                {id:3,title:"咖啡"}
                            ];
                            this.$set(this.range,1,this.range[1]);
                            break;
                        case 2://小吃
                            this.range[1]=[
                                {id:1,title:"薯条"},
                                {id:2,title:"鸡块"},
                                {id:3,title:"鸡柳"}
                            ];
                            this.$set(this.range,1,this.range[1]);
                            break;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .picker{width: 500rpx;height:80rpx;border:1px solid #EFEFEF;font-size:28rpx;text-align: center;line-height:80rpx;}
</style>

<template>
    <view>
        <view class="picker" @click="openAddress">{{area?area:'请选择'}}</view>
        根据省市区名称打开地址：
        <view class="picker" @click="openAddress2">{{area?area:'请选择'}}</view>
        <simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address>
    </view>
</template>

<script>
    import simpleAddress from "../../components/simple-address/simple-address"
    export default {
        name: "picker-component",
        data(){
            return {
                area:"",
                cityPickerValueDefault: [0, 0, 0]
            }
        },
        methods:{
            openAddress() {
                // this.cityPickerValueDefault = [0,0,0]
                this.$refs.simpleAddress.open();
            },
            openAddress2() {
                // 根据 label 获取
                var label = this.$refs.simpleAddress.queryIndex(['湖北省', '随州市', '曾都区'], 'label');
                console.log(label);
                this.cityPickerValueDefault = label.index;
                this.$refs.simpleAddress.open();
            },
            onConfirm(e) {
                console.log(e);
                this.area = e.label.replace(/\-/g," ");
                this.cityPickerValueDefault=e.value;
            }
        },
        components:{
            simpleAddress
        }
    }
</script>

<style scoped>
    .picker{width: 500rpx;height:80rpx;border:1px solid #EFEFEF;font-size:28rpx;text-align: center;line-height:80rpx;}
</style>

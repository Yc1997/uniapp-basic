<template>
    <view>
        <picker :value="date" mode="date" @change="bindPickerChange" :start="startDate" :end="endDate">
            <view class="picker">{{date?date:'请选择'}}</view>
        </picker>
    </view>
</template>

<script>
    export default {
        name: "picker-component",
        data(){
            return {
                date:this.getDate()
            }
        },
        computed: {
            startDate() {
                return this.getDate('start');
            },
            endDate() {
                return this.getDate('end');
            }
        },
        methods:{
            bindPickerChange(e){
                console.log(e);
                this.date=e.detail.value;
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();

                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            }
        }
    }
</script>

<style scoped>
    .picker{width: 500rpx;height:80rpx;border:1px solid #EFEFEF;font-size:28rpx;text-align: center;line-height:80rpx;}
</style>

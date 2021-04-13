<template>
    <view>
        <radio-group @change="radioChange">
            <label class="uni-list-cell" v-for="item in items" :key="item.value">
                <view>
                    <radio :value="item.value" :checked="item.checked" />
                </view>
                <view>{{item.name}}</view>
            </label>
        </radio-group>
        <button @click="submit">提交</button>
    </view>
</template>

<script>
    export default {
        name: "radio-component",
        data(){
            return {
                items: [{
                    value: 'USA',
                    name: '美国'
                },
                    {
                        value: 'CHN',
                        name: '中国',
                        checked: true
                    },
                    {
                        value: 'BRA',
                        name: '巴西'
                    },
                    {
                        value: 'JPN',
                        name: '日本'
                    },
                    {
                        value: 'ENG',
                        name: '英国'
                    },
                    {
                        value: 'FRA',
                        name: '法国'
                    }
                ]
            }
        },
        onLoad(){
            this.newItems={};
        },
        methods:{
            radioChange(e){
                let value=e.detail.value;
                console.log(value);
                if(this.items.length>0){
                    for(let i=0;i<this.items.length;i++){
                        if(this.items[i].value==value){
                            this.newItems=this.items[i];
                            break;
                        }
                    }
                }
            },
            submit(){
                console.log(JSON.stringify(this.newItems));
            }
        }
    }
</script>

<style scoped>
    .uni-list-cell{display:flex;}
</style>

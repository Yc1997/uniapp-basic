<template>
    <view>
        <checkbox-group @change="checkboxChange">
            <label class="uni-list-cell" v-for="item in items" :key="item.value">
                <view>
                    <checkbox :value="item.value" :checked="item.checked" />
                </view>
                <view>{{item.name}}</view>
            </label>
        </checkbox-group>
        <button @click="submit">提交</button>
    </view>
</template>

<script>
    export default {
        name: "checkbox-component",
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
        methods:{
            checkboxChange(e){
                let values=e.detail.value;
                for(let i=0;i<this.items.length;i++){
                    if(values.includes(this.items[i].value)){
                        this.items[i].checked=true;
                        // this.$set(this.items[i],"checked",true);
                        this.$set(this.items,i,this.items[i]);
                    }else{
                        this.items[i].checked=false;
                        this.$set(this.items[i],"checked",false);
                    }
                }
            },
            submit(){
                let newItems=[];
                for(let i=0;i<this.items.length;i++){
                    if(this.items[i].checked){
                        newItems.push(this.items[i]);
                    }
                }
                console.log(JSON.stringify(newItems));
            }
        }
    }
</script>

<style scoped>
    .uni-list-cell{display:flex;}
</style>

<template>
    <view></view>
</template>

<script>
    export default {
        name: "location",
        onLoad(){
            uni.getLocation({
                type: 'gcj02',
                success:  (res)=> {
                    console.log('当前位置的经度：' + res.longitude);
                    console.log('当前位置的纬度：' + res.latitude);
                }
            });
        }
    }
</script>

<style scoped>

</style>

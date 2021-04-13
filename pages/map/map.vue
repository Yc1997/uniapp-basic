<template>
    <view>
        <map class="map" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
    </view>
</template>

<script>
    export default {
        name: "location",
        data(){
            return {
                latitude:"", //纬度
                longitude:"", //经度
                markers:[
                    {
                        latitude:"",
                        longitude:"",
                        iconPath:"../../static/images/map/my.png",
                        width:30,
                        height:30
                    }
                ]
            }
        },
        onLoad(){
            uni.getLocation({
                type: 'gcj02',
                success:  (res)=> {
                    console.log('当前位置的经度：' + res.longitude);
                    console.log('当前位置的纬度：' + res.latitude);
                    this.latitude=res.latitude;
                    this.longitude=res.longitude;
                    this.markers[0].latitude=this.latitude;
                    this.markers[0].longitude=this.longitude;
                }
            });
        }
    }
</script>

<style scoped>
    .map{width:100%;height:500rpx;}
</style>

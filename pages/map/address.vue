<template>
    <view>
        <map class="map" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
    </view>
</template>

<script>
    import QQMapWX from "../../static/js/utils/qqmap-wx";
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
                        iconPath:"../../static/images/map/location.png",
                        width:30,
                        height:30,
                        callout:{
                            content:"",
                            display:"ALWAYS",
                            fontSize:14,
                            padding:5,
                            borderRadius:8
                        }
                    }
                ]
            }
        },
        onLoad(){
            // 实例化API核心类
            this.qqmapsdk = new QQMapWX({
                key: 'OG4BZ-DEPHF-36FJE-NLIJP-H3JV3-2EFWR' // 必填
            });
            uni.getLocation({
                type: 'gcj02',
                success:  (res)=> {
                    console.log('当前位置的经度：' + res.longitude);
                    console.log('当前位置的纬度：' + res.latitude);
                    this.latitude=res.latitude;
                    this.longitude=res.longitude;
                    this.markers[0].latitude=this.latitude;
                    this.markers[0].longitude=this.longitude;
                    this.qqmapsdk.reverseGeocoder({
                        location: {
                            latitude: this.latitude,
                            longitude: this.longitude
                        },
                        success:(res)=>{
                            console.log(res);
                            this.markers[0].callout.content=res.result.address;
                        }
                    })
										//自己测试搜索附近范围内的学校
										this.qqmapsdk.search({
											 keyword: '学校',  //搜索关键词
											 location:`${res.latitude},${res.longitude}`,
											 success:(res) => {
												 console.log(res)
											 }
										})
                }
            });
        }
    }
</script>

<style scoped>
    .map{width:100%;height:500rpx;}
</style>

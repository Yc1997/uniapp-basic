<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view :class="{'nav-wrap':true,ipx:isIpx}">
			<view :class="{nav:true,ipx:isIpx}">uni-app演示</view>
		</view>
		<!--#ifdef H5-->
		<view class="box">h5平台</view>
		<!--#endif-->
		<!--#ifdef MP-WEIXIN-->
		<view class="parent-box" hover-class="box-active">
			<view class="box" hover-class="box-active" hover-start-time="3000" hover-stay-time="3000" :hover-stop-propagation="true">微信小程序平台</view>
		</view>
		<!--#endif-->
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text>{{text}}</text>
		</view>
		<uni-button className="btn">提交</uni-button>
		<navigator url="/pages/news/index" open-type="navigate" hover-class="navigator-hover">
			<button>navigate跳转到新闻页面</button>
		</navigator>
		<navigator url="/pages/news/index" open-type="redirect" hover-class="navigator-hover">
			<button>redirect跳转到新闻页面</button>
		</navigator>
		<navigator url="/pages/cart/index" open-type="switchTab" hover-class="navigator-hover">
			<button>跳转到购物车</button>
		</navigator>
		<button @click="navigatePage('/pages/news/index?id=1&title='+encodeURIComponent('新闻动态')+'')">api-navigate跳转到新闻页面</button>
		<button @click="redirectPage('/pages/news/index')">api-redirect跳转到新闻页面</button>
		<button @click="switchTabPage('/pages/cart/index')">api-跳转到购物车</button>
		<button @click="navigatePage('/pages/shop/index')">选择分店</button>
		<button @click="navigatePage('/pages/scroll-view/index')">scroll-view组件</button>
		<button @click="navigatePage('/pages/swiper/index')">swiper</button>
		<button @click="navigatePage('/pages/movable/index')">可拖动区域和可移动视图</button>
		<button @click="navigatePage('/pages/text/index')">text组件</button>
		<button @click="navigatePage('/pages/rich-text/index')">rich-text组件</button>
		<button @click="navigatePage('/pages/button/index')">button组件</button>
		<button @click="navigatePage('/pages/checkbox/index')">checkbox组件</button>
		<button @click="navigatePage('/pages/radio/index')">radio组件</button>
		<button @click="navigatePage('/pages/input/index')">input组件</button>
		<button @click="navigatePage('/pages/picker/selector')">picker普通选择器</button>
		<button @click="navigatePage('/pages/picker/multiselector')">picker多列选择器</button>
		<button @click="navigatePage('/pages/picker/time')">picker时间选择器</button>
		<button @click="navigatePage('/pages/picker/date')">picker日期选择器</button>
		<button @click="navigatePage('/pages/picker/region')">picker省市区选择器</button>
		<button @click="navigatePage('/pages/picker/address')">simpleAddress省市区选择器</button>
		<button @click="navigatePage('/pages/switch/index')">switch组件</button>
		<button @click="navigatePage('/pages/textarea/index')">textarea组件</button>
		<button @click="navigatePage('/pages/webview/index')">web-view组件</button>
		<button @click="navigatePage('/pages/image/index')">image组件</button>
		<button @click="navigatePage('/pages/audio/index')">audio组件</button>
		<button @click="navigatePage('/pages/audio/audioapi')">audio音频组件控制</button>
		<button @click="navigatePage('/pages/video/index')">video组件</button>
		<button @click="navigatePage('/pages/request/index')">request发起网络请求</button>
		<button @click="navigatePage('/pages/uploadfile/index')">文件上传</button>
		<button @click="navigatePage('/pages/uploadfile/all')">批量文件上传</button>
		<button @click="navigatePage('/pages/map/location')">获取位置</button>
		<button @click="navigatePage('/pages/map/map')">我的位置</button>
		<button @click="navigatePage('/pages/map/address')">获取地址信息</button>
		<button @click="navigatePage('/pages/login/index')">会员登录</button>
		<button @click="userNavigatePage('/pages/profile/index')">个人资料</button>
		<button @click="navigatePage('/pages/modal/index')">模态弹窗</button>
		<button @click="navigatePage('/pages/actionsheet/index')">操作菜单</button>
		<button @click="navigatePage('/pages/recorder/index')">录音管理器</button>
		<button @click="navigatePage('/pages/network/index')">网络状态</button>
		<button @click="navigatePage('/pages/clipbroad/index')">剪贴板</button>
		<button @click="navigatePage('/pages/animation/index')">动画</button>
		<button @click="navigatePage('/pages/pulldownrefresh/index')">下拉刷新</button>
		<button @click="navigatePage('/pages/wxlogin/index')">微信登录</button>
		<button @click="navigatePage('/pages/payment/index')">微信支付</button>
		<button @click="navigatePage('/pages/selectorquery/index')">节点信息</button>
<!--		<uni-tab-bar :curRoute="curRoute"></uni-tab-bar>-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				text:"",
				curRoute:"",
				isIpx:false
			}
		},
		onLoad(opts) {
			// console.log(opts);
			let pages=getCurrentPages();
			let curPage=pages[pages.length-1];
			this.curRoute=curPage.route;
			// console.log(this.curRoute);
			if(process.env.NODE_ENV === 'development'){
				console.log('开发环境')
			}else if(process.env.NODE_ENV==='production'){
				console.log('生产环境')
			}
			console.log(this.$config.baseApi);
			// #ifdef H5
			console.log("h5平台");
			// #endif

			//#ifdef MP-WEIXIN
			console.log("微信小程序平台");
			//#endif

			//#ifdef MP-WEIXIN-TEST
			console.log("微信小程序测试平台");
			//#endif
			//获取系统信息
			uni.getSystemInfo({
				success:  (res)=> {
					console.log(res.model);
					if(res.model.indexOf('iPhone X')>-1){
						this.isIpx=true;
					}
				}
			});
		},
		onShow(){
			console.log(uni.getStorageSync('shop_id'));
		},
		methods: {
			navigatePage(url){
				uni.navigateTo({
					url
				})
			},
			redirectPage(url){
				uni.redirectTo({
					url
				})
			},
			switchTabPage(url){
				uni.switchTab({
					url: '/pages/cart/index'
				});
			},
			userNavigatePage(url){
				if(uni.getStorageSync("isLogin")){
					uni.navigateTo({
						url
					})
				}else{
					uni.navigateTo({
						url:"/pages/login/index"
					})
				}
			},
		},
		onReachBottom(){
			console.log("底部");
		},
		onNavigationBarSearchInputChanged(e){
			console.log(e.text);
			this.text=e.text;
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.nav-wrap{width:100%;height:170rpx;}
	.nav-wrap.ipx{height:215rpx;}
	.nav{width:100%;height:80rpx;background-color:#dd524d;font-size:28rpx;color:#FFFFFF;text-align: center;line-height:80rpx;position: fixed;z-index: 99;left:0;top:var(--status-bar-height);}
	.nav.ipx{padding-top:45rpx;}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #dd524d;
		position: fixed;
		z-index:99;
		left:0;
		top:0;
	}
	.btn{width:200rpx;height:80rpx;background-color: #3cc51f;color:#FFFFFF;}
	.navigator-hover button{background-color: #dd524d;}
	/*#ifdef H5*/
	.box{width:200rpx;height:200rpx;background-color:#dd524d;text-align: center;font-size:28rpx;color:#FFFFFF;line-height:200rpx;}
	/*#endif*/
	/*#ifdef MP-WEIXIN*/
	.box{width:200rpx;height:200rpx;background-color:#3cc51f;text-align: center;font-size:28rpx;color:#FFFFFF;line-height:200rpx;}
	/*#endif*/
	.box-active{background-color:#007aff!important;}
	.parent-box{width:400rpx;height:400rpx;background-color:#CCCCCC}
</style>

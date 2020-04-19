<template>
	<swiper class="test1" ref="mySwiper" :options="swiperOption">
		<swiper-slide>
			<div class="content">
				<div class="ani reveal-top"
					 swiper-animate-effect="bounceInRight"
					 swiper-animate-duration="1.5s"
					 swiper-animate-delay="1"

				>
					<div class="test-box">
						我是测试
					</div>
				</div>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div class="content">
				<div class="ani reveal-top"
					 swiper-animate-effect="bounceInLeft"
					 swiper-animate-duration="2.5s"
					 swiper-animate-delay="1.5"

				>
					<div class="test-box">
						我是测试1234
					</div>
				</div>
			</div>
		</swiper-slide>
		<swiper-slide>Slide 4</swiper-slide>
		<swiper-slide>Slide 5</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<script>
	import * as swiperAnimate from "../assets/js/swiper.animate1.0.3.min.js"
	export default {
		name: "test1",
		components: {},
		data() {
			return {
				swiperOption: {
					on:{
						init: function(){
							console.log('init', this)
							swiperAnimate.swiperAnimateCache(this); //隐藏动画元素
							swiperAnimate.swiperAnimate(this); //初始化完成开始动画
						},
						slideChange: function(){
							swiperAnimate.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
						}
					},
					notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					direction: "vertical", //水平方向移动
					grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
					setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
					autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
					mousewheel: false,
					slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					// mousewheelControl: true, //同上
					height: window.innerHeight, // 高度设置，占满设备高度
					resistanceRatio: 10, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
					observeParents: true //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
				}
			}
		},
		methods: {},
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper
			}
		},
		mounted() {

		},
		created: function () {
		}
	}
</script>

<style lang="scss">
	.test1 {
		.content {
			height: 100%;
		}
		.test-box {
			width: 100%;
			height: 200px;
			color: white;
			font-size: 40px;
			background-color: aqua;
		}
	}
</style>

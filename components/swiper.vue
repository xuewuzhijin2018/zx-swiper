<template>
	<div>
		<div v-if="swiping" :class="`swiper-container  swiper-container-${id}`">
			<div class="swiper-wrapper"><slot></slot></div>
		</div>
		<div v-else :class="`swiper-container swiper-no-swiping swiper-container-${id}`">
			<div class="swiper-wrapper"><slot></slot></div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import 'animate.css';
import 'swiper/css/swiper.css';
let mySwiper = {};
export default {
	props: {
		speed: {
			type: Number,
			default: 1500
		},
		slidesPerView: {
			type: Number,
			default: 8
		},
		spaceBetween: {
			type: Number,
			default: 15
		},
		swiping: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			id: this.getUuid()
		};
	},
	beforeDestroy() {
		if (mySwiper) {
			mySwiper.destroy();
		}
	},
	mounted() {
		mySwiper = new Swiper('.swiper-container-' + this.id, {
			speed: this.speed,
			slidesPerView: this.slidesPerView,
			spaceBetween: this.spaceBetween,
			loop: false
		});
	},
	methods: {
		getUuid() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = (Math.random() * 16) | 0,
					v = c == 'x' ? r : (r & 0x3) | 0x8;
				return v.toString(16);
			});
		},
		update() {
			mySwiper.update();
		},
		slideNext() {
			mySwiper.slideNext();
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.swiper-container {
	width: 100%;
	height: 200px;
}
.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #dedede;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}
</style>

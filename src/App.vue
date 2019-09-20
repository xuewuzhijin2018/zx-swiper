<template>
	<div id="app">
		<byui-swiper ref="swiper" :slidesPerView="10">
			<div v-for="(item, index) in num" :key="index" class="swiper-slide animated zoomInLeft">Slide{{ index }}</div>
		</byui-swiper>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return { num: 1 };
	},
	mounted() {
		setInterval(() => {
			this.num++;
		}, 1000);
		setInterval(() => {
			this.$refs.swiper.update();
			this.$refs.swiper.slideNext();
		}, 500);
	}
};
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	padding: 20px;
}
</style>

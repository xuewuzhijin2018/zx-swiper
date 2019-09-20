# zx-swiper(作者:初志鑫<1204505056@qq.com>)

## 注意事项
```
只能用于Vue CLI项目

```

## 鸣谢
```
努力了这么久,终于成了一名合格的代码搬运工,我只是有幸站在了巨人的肩膀上,感谢自己,感谢巨人...

```

## 实现功能
```
1.实现人像插播加载

```

### 商务合作与赞赏
```
邮箱  1204505056@qq.com
QQ 1204505056

如果你觉得这个项目帮助到了你，你可以赞赏一下作者:
```
![image](https://raw.githubusercontent.com/chuzhixin/donate/master/donation.png)

## 安装方法
```
cnpm i -S zx-swiper

```

### keel组件main.js全局引入
```
import Vue from 'vue'
import zxSwiper from '../components/export.js'
Vue.component('byui-swiper', zxSwiper)

```


### template完整示例
```
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



```

 
 
 

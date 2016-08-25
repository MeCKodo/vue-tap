# vue-tap

> tap手势基于vue.js

无需任何依赖

如果能帮到您，请右上角star吧:)

### 2016.8.25(update)

> * 经测试没有点透问题

### 2016.8.24(update)

> * 统一为v-tap,兼容`PC`和`移动端`
> * 新增捕获a标签的href地址,点击a标签可实现快速跳转
> * 解决部分手机点击没有反应的问题
> * 准备加入npm大家庭


### 2016.1.20(merge)

> * 新增 dom带有disable属性时，tap失效

### 2015.12.22(update)

> * 新增vue-tap-click版本兼容PC和移动端,v-tap指令将自动判断使用click还是tap事件
> * vue-tap 是不带兼容版本, vue-tap-click兼容版本, 请客官自行选择进食.

## How To use

> * ES6
```javascript
import vueTap from './vue-tap';
Vue.use(vueTap);
```

> * 直接引入
```html
<script src="./vue.js"></script>
<script src="./vue-tap.js"></script>
```


## Example

```html
<a id="demo" v-tap="callback">red</a>
<a id="demo" v-tap.prevent="callback">red</a>
```

```javascript
new Vue({
	el: "body",
	methods : {
		callback : function(e) {
			//不带参数指令,e为event对象
			e.preventDefault();
			console.log('---e---',e);
			console.log('---tapObj---', e.tapObj);
		}
	}
});
```

## With parmas

```html
<ul>
	<li v-for="el in list"
		v-tap="args($index,el,$event)"
			>
		{{el.name}}---{{el.age}}
	</li>
</ul>
```

```javascript
args : function(index,el,e) {
	// v-for循环带参数的回调
	console.log('---index---',index);
	console.log('---el---',el);
	console.log('---e---',e);
	console.log(e.tapObj);
	//e.tapObj 可获得 tap的一些参数
	//pageX,pageY,clientX,clientY,distanceX,distanceY
	//后面2个分别的手指可能移动的位置(以后可用于拓展手势)
}
```



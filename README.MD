# vue-tap

> tap手势基于vue.js

无需任何依赖

如果能帮到您，请右上角star吧:)

## 使用

> * ES6
```javascript
import vueTap from './vue-tap-click';
Vue.use(vueTap);
```

> * 直接引入
```html
<script src="./vue.js"></script>
<script src="./vue-tap-click.js"></script>
```


## 栗子

```html
<a id="demo" v-tap="callback">red</a>
2015/12/18新增可用 .stop（默认是 阻止默认事件）
<a id="demo" v-tap.stop="callback">red</a>
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

带参数回调

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

### 2015.12.22

> * 新增vue-tap-click版本兼容PC和移动端,v-tap指令将自动判断使用click还是tap事件
> * vue-tap 是不带兼容版本, vue-tap-click兼容版本, 请客官自行选择进食.

### 2015.1.20(merge)

> * 新增 dom带有disable属性时，tap失效



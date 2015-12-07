# vue-tap

> tap手势基于vue.js

无需任何依赖

## 栗子

```html
<a id="demo" v-tap="callback">red</a>
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





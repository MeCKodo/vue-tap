## How To use

> * ES6

``` bash
# install v-tap  
npm install v-tap --save; 

# 请注意！是**v-tap** 不是 **vue-tap**
```

```javascript
import vueTap from 'v-tap';
Vue.use(vueTap);
```

> * 直接引入
```html
<script src="./vue.js"></script>
<script src="./vue-tap.js"></script>
```


## Vue2.0

> Vue2.0的绑定形式略有不同  主要改为 `v-tap={ methods : xxx , paramA : a,paramB:b}` 的形式


```html
// 具体请看demo  test-href.html
<!--如果想要快速跳转直接写v-tap即可不用写任何参数-->
<a href="http://www.baidu.com" v-tap>如果想要快速跳转直接写v-tap即可不用写任何参数</a>

<p v-tap.prevent="{ methods : scroll }">无法滑动页面</p>

<!-- 这样的a标签可以进行一些处理而不跳转 -->
<a v-tap.prevent="{ methods : cant }" href="这是无法跳转的">这是无法跳转的</a>

<!--这样一样会直接快速跳转不会执行cant 除非设置了prevent-->
<a href="aaa" v-tap="{ methods : cant }">can't</a>

<a v-tap="a++">v-tap="a++" 直接执行表达式在2.0里无法使用</a>

<a href="javascript:window.history.go(-1);" v-tap>我可以直接在href里写js代码 如history.go(-1)</a>

```

```javascript
new Vue({
	el: "body",
	methods : {
		callback : function(params) {
			// params 可获取绑定时候带的参数
			console.log(params.event); // 原生事件
			console.log(params.tapObj); // 手指触摸的一些参数
			console.log(params.paramA); // 绑定时候传入的paramA
			console.log(params.paramB); // 绑定时候传入的paramB
		}
	}
});
```

## With parmas

```html
<ul>
	<li v-for="(item,index) in list"
		v-tap="{ methods:args , index : index, item:item }"
			>
		{{item.name}}---{{item.age}}
	</li>
</ul>
```

```javascript
args : function(params) {
	// v-for循环带参数的回调
	console.log('---params.event---',params.event)
	console.log('---params.tapObj---',params.tapObj);
	console.log('---params.index---',params.index)
	console.log('---params.el---',params.el)
	//params.tapObj 可获得 tap的一些参数
	//pageX,pageY,clientX,clientY,distanceX,distanceY
	//后面2个分别的手指可能移动的位置(以后可用于拓展手势)
},
```


## Vue1.0

```html
// 具体请看demo  test-href.html
<!--如果想要快速跳转直接写v-tap即可不用写任何参数-->
<a href="http://www.baidu.com" v-tap>如果想要快速跳转直接写v-tap即可不用写任何参数</a>

<p v-tap.prevent="scroll">无法滑动页面</p>

<!-- 这样的a标签可以进行一些处理而不跳转 -->
<a v-tap.prevent="callback" href="这是无法跳转的">这是无法跳转的</a>

<!--这样一样会直接快速跳转不会执行cant 除非设置了prevent-->
<a href="aaa" v-tap="cant">can't</a>
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

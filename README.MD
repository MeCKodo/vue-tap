# vue-touch

> tap events plugin for Vue.js

Without any dependence

```

## Example

```html
<div id="demo" v-tap="tapTest">red</div>
```

```javascript
new Vue({
	el: "body",
	methods : {
		tapTest : function(e,tapObj) {
			e.preventDefault();
			console.log('-----this-----',this);
			console.log('-----e-----',e);
			console.log('-----tapObj-----',tapObj);
		}
	}
});
```



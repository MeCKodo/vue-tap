# vue-tap ( 已支持vue2.0，最下方有更新日志 )

[![npm](https://img.shields.io/npm/v/v-tap.svg)](https://www.npmjs.com/package/v-tap) [![npm](https://img.shields.io/npm/dm/v-tap.svg)](https://www.npmjs.com/package/v-tap)

> a v-tap directive of vue.js

## How To use



## Update

### 2017.06.17(fix)

> * 修复父级DOM里含有input，点击input无法聚焦的BUG

### 2017.03.16(fix)

> * 主要BUG修复！v-if和v-else指令绑定事件绑定不对的问题
> * 现已修复，可以看if-else.html测试
> * 感谢 coco 帮助我进行测试！

### 2017.02.21(fix)

> * 重大BUG修复！经过v-for渲染出来的列表，在生命周期修改了数据重新渲染后v-tap获取不到最新值
> * 现已修复，可以看list-test.html测试
> * 感谢 火星X王子 帮助我进行测试！

### 2016.10.02(update)

支持Vue2.0,兼容Vue1.0

### 2016.9.25(fix)

> * 修复了PC端的bug
> * test-href.html页面,新增测试
> * <a v-tap="a++">我是测试v-tap="a++"直接执行表达式</a>
    <a href="javascript:widnow.history.go(-1);" v-tap>我是history.go(-1)</a>

### 2016.9.19(update)

> * 优化了a标签快速跳转逻辑,可以直接在 <a href="xxx" v-tap></a> 写v-tap指令,这样即可快速跳转

### 2016.8.26(update)

> * 发布npm, 各位可用`npm i v-tap --save;`下载使用
> * 重写了currentTarget对象,避免currentTarget为null的情况
> * fix : 判断el是否为a标签,避免获取href出错

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


/**
 * Created by 二哲 on 15/12/6.
 */
;(function() {
    var vueTap = {};
    vueTap.install = function(Vue) {
        Vue.directive('tap', {
            isFn : true,
            bind : function() {
                 //bind callback
            },
            update : function(fn) {
                var self = this;
                    self.tapObj = {};
                if(typeof fn !== 'function') {
                    return console.error('The param of directive "v-tap" must be a function!');
                }
                this.el.addEventListener('touchstart',function(e) {
                    self.touchstart(e,self);
                },false);
                this.el.addEventListener('touchend',function(e) {
                    self.touchend(e,self,fn);
                },false);
            },
            unbind : function() {},
            isTap : function() {
                var tapObj = this.tapObj;
                return this.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2;
            },
            touchstart : function(e,self) {
                var touches = e.touches[0];
                var tapObj = self.tapObj;
                tapObj.pageX = touches.pageX;
                tapObj.pageY = touches.pageY;
                tapObj.clientX = touches.clientX;
                tapObj.clientY = touches.clientY;
                self.time = +new Date();
            },
            touchend : function(e,self,fn) {
                var touches = e.changedTouches[0];
                var tapObj = self.tapObj;
                e.targetVM = self.vm;
                self.time = +new Date() - self.time;
                tapObj.distanceX = tapObj.pageX - touches.pageX;
                tapObj.distanceY = tapObj.pageY - touches.pageY;
                if (self.isTap(tapObj)) {
                    fn.call(self.vm, e, tapObj);
                }
            }
        });
    };

    if (typeof exports == "object") {
        module.exports = vueTap;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return vueTap })
    } else if (window.Vue) {
        window.vueTap = vueTap;
        Vue.use(vueTap);
    }

})();
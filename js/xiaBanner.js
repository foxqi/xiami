/**
 * Created by Administrator on 2016/7/25 0025.
 */

(function(){
    var oBox=document.getElementById('banner');
    var oBoxInner=oBox.getElementsByTagName('ul')[0];
    var oOl=oBox.getElementsByTagName('ol')[0];
    var aDiv=oBoxInner.getElementsByTagName('li');
    var aImg=oBoxInner.getElementsByTagName('img');
    var aLi=oOl.getElementsByTagName('li');
    var data=null;
    var step=0;
    var autoTimer=null;
    var interval =5000;
    zhufengAnimate(aDiv[0], {opacity: 1}, 500);
    //var aA=oBox.getElementsByTagName('a');
    //console.log(aDiv.length)

    //1.图片渐隐渐现
    //开启一个定时器
    clearTimeout(autoTimer)//开启一个定时器前先关闭一个定时器
    autoTimer = setInterval(autoMove, interval)
    function autoMove() {
        if (step >= aDiv.length - 1) {
            step = -1;
        }
        step++;// 1 2 3 0不断累加step
        setBanner();// 1 2 3 0
    }

    function setBanner() {
        //通过遍历每个div，看哪个div的索引等于step，如果等于，就让这个div的层级变高为1，让其他div层级变0；
        //让层级为1的这张图片，让这张图片的透明度通过运动到达1，当运动结束后，让显示的这张图片的所有兄弟元素的透明度都为0，
        for (var i = 0; i < aDiv.length; i++) {
            var curEle = aDiv[i];
            if (i === step) {
                utils.css(curEle, 'zIndex', 1);
                zhufengAnimate(curEle, {opacity: 1}, 500, function () {
                    // alert（i）-->   回调函数属于异步，异步中的i值一定会失效，是最大值
                    //    一般情况下，回调函数中的this是window，但是我们封装时通过call改变了回调函数中的this指向-curEle

                    //    让显示的这张图片的兄弟元素，透明度都为0
                    var siblings = utils.siblings(this);
                    for (var i = 0; i < siblings.length; i++) {
                        utils.css(siblings[i], 'opacity', 0)
                    }
                });
                continue;
            }
            utils.css(curEle, 'zIndex', 0);
        }
        //console.log(step)
        bannerTip();
    }

//    2.焦点自动轮播
//    思路：遍历每个焦点，判断哪个焦点的索引跟step相同，相同点亮，不相同不点亮
    function bannerTip() {
        for (var i = 0; i < aLi.length; i++) {

            var curEle = aLi[i]
            curEle.className = i === step ? 'on' : ''
        }
    }

//    3.移入移除
    oBox.onmouseover = function () {
        clearInterval(autoTimer)

    }
    oBox.onmouseout = function () {
        autoTimer = setInterval(autoMove, 5000);

    }
//    4.点击焦点手动切换
    handleChange();
    function handleChange() {
        for (var i = 0; i < aLi.length; i++) {

            (function (index) {
                aLi[index].onclick = function () {
                    step = index;
                    setBanner();
                    bannerTip();
                }
            })(i)
        }
    }

})();

/*(function(){
    var oBox=document.getElementById('first')
    var oBoxInner=oBox.getElementsByTagName('div')[0];
    var aDiv=oBoxInner.getElementsByTagName('div')
    var aA=oBox.getElementsByTagName('a');
    //console.log(aDiv.length)
    var step=0;
    //oBoxInner.innerHTML+='<div><img src="img/banner1.jpg" alt=""/></div>';
    oBoxInner.style.width=aDiv.length*aDiv[0].offsetWidth+'px';
    //1.实现自己自动轮播
    function autoMove(){
        if(step>=aDiv.length-1){
            step=0;
            utils.css(oBoxInner,'left',-step*1000);
        }
        step++;
        //utils.css(oBoxInner,'left',-step*1000)
        //在使用运动库前，先写好效果，在加运动
    }

//   3.鼠标移入停止运动，鼠标移除继续运动： 移入显示左右按钮，移除隐藏左右按钮
    oBox.onmouseover=function(){
        clearInterval(autoTimer)
        utils.css(aA[0],'display','block')
        utils.css(aA[1],'display','block')
    }
    oBox.onmouseout=function(){
        autoTimer=setInterval(autoMove,1000);
        utils.css(aA[0],'display','none')
        utils.css(aA[1],'display','none')
    }

//    5.点击左右按钮手动切换
    aA[0].onclick=function(){
        if(step<=0){
            step=aLi.length;
            utils.css(oBoxInner,'left',-step*1000)
        }
        step--;
        zhufengAnimate(oBoxInner,{left:-step*1000},500)
    }
    aA[1].onclick=autoMove;



})()*/
//返回顶部
(function(){
    var oBtn=document.getElementById('noBorb');

    oBtn.onclick=function(){
        //window.onscroll=null;
        var target=utils.win('scrollTop');
        var duration=100;
        var interval=10;
        var step=target/duration*interval;
        var timer=setInterval(function(){
            var curTop=utils.win('scrollTop');
            if(curTop<=0){
                clearInterval(timer);
                return;
            }
            curTop-=step;
            utils.win('scrollTop',curTop);
        },interval)
    }
})();

//第二个 ：华语的那个

(function(){
    var  aDiv=document.getElementById('disPaly');
    var oUl=document.getElementById('china');
    var aLi=oUl.getElementsByTagName('li');
    var step=0;
    var child = utils.getChildren(aDiv);
    //oUl.style.height=child.length*child[0].offsetheight+'px';
    //4）点击焦点手动切换
    handleChange();
    function handleChange(){
        for(var i=0; i<aLi.length; i++){
            aLi[i].index=i;//用自定义属性保存索引
            aLi[i].onclick=function(){
                for (var i = 0; i < child.length; i++) {
                    zhufengAnimate(child,{top:-step*1000},500);
                }

            }
        }
    }


})();
/*
var oTop = document.getElementById('top');
var oWrapperR = document.getElementById('wrapperR');
var oDiv = oWrapperR.getElementsByTagName('div');
var oBtn = oTop.getElementsByTagName('li');
//需求：当点击淘宝出现淘宝的邮箱，虾米邮箱隐藏，点击虾米出现虾米邮箱，淘宝邮箱隐藏
for (var i = 0; i < oBtn.length; i++) {
    oBtn[i].index = i;
    oBtn[i].onclick = function () {
        for (var i = 0; i < oBtn.length; i++) {
            oBtn[i].style.borderBottom = '1px solid #e6e6e6';
            oBtn[i].style.background = '#fafafa';
            oDiv[i].style.display = 'block'
        }
        this.style.borderBottom = 'none';
        this.style.background = 'transparent';
        oDiv[this.index].style.display = 'none'
    }
}*/

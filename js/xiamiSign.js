/**
 * Created by Administrator on 2016/7/15 0015.
 */

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
}

var oInpC = document.getElementById('inputC');
var oInpE = document.getElementById('inputE');
var oInpT = document.getElementById('inputT');
var oP = document.getElementById('inputTt');

oInpC.onclick = function () {
    oInpE.style.display = 'block';
    oInpT.focus();
    oP.style.marginTop = '15px';

};

var oInpO = document.getElementById('inputCo');
var oInpEO = document.getElementById('taoE');
var oinputD = document.getElementById('inputD');
var oPa = document.getElementById('inputTa');
oInpO.onclick = function () {
    oInpEO.style.display = 'block';
    oinputD.focus();
    oPa.style.marginTop = '20px';
};




















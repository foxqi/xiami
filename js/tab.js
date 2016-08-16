/**
 * Created by Administrator on 2016/7/26 0026.
 */
//右边第一个选项卡。思路，点击按钮，当前显示的隐藏，隐藏的显示
//var oBox=document.getElementById('musician');
var oBig = document.getElementById('muD');
var aBtn = document.getElementById('aBtn');
var oDiv = oBig.getElementsByTagName('div');

//aBtn.onclick = function (){
//    var child = utils.getChildren(oBig);
//    console.log(child);
//    for (var i = 0; i < child.length; i++) {
//        child[i].index = i;
//            child[i].style.display='none';
//            i++;
//        }
//        child[i].style.display='block';
//
//
//
//}


var child = utils.getChildren(oBig);
    aBtn.onclick = function () {
        for (var i = 0; i < child.length; i++) {
            child[i].index=i;
            if(child[i].index==0){
                child[i].style.display='none';
            }else if(child[i].index===1){
                child[i].style.display='block';
            }
            //alert(i)

        }
};

/*oDiv.n=0;
 oDiv.onclick=function(){
 this.innerHTML=++this.n;
 }*/
//思



//var oBody=document.getElementById("box");
//oBody.onclick=function(){
//    //给元素绑定点击事件 并且点击时 运行一个方法function
//    var bg=oBody.style.backgroundColor;
//    //获取到这个元素的行内样式
//    console.log(bg);
//    if(bg==="white"){
//        oBody.style.backgroundColor="yellow";
//    }else if(bg==="yellow"){
//        oBody.style.backgroundColor="red";
//    }else if(bg==="red"){
//        oBody.style.backgroundColor="black";
//    }else{
//        oBody.style.backgroundColor="white";
//    }
//}


//var flag = true;
//var src1 = "D:/图片/壁纸/20088511434621_2.jpg";
//var src2 = "D:/图片/壁纸/月女2.jpg";
//var img =null;
//function dowith() {
//    img = document.getElementById("img");
//    //此处看你默认路径的为什么而定。不固定
//    if (flag) {
//        img.src = src2;
//        flag = false;
//    } else {
//        img.src = src1;
//        flag = true;
//    }
//}

var oswiBtn = document.getElementById('swiBtn');
var olittleBox = document.getElementById('littleBox');
var oBtn = oswiBtn.getElementsByTagName('li');
var aDiv = olittleBox.getElementsByTagName('li');

for (var i = 0; i < oBtn.length; i++) {
    oBtn[i].index = i;
    oBtn[i].onclick = function () {
        for (var i = 0; i < oBtn.length; i++) {
            oBtn[i].style.borderBottom = '1px solid #e6e6e6';
            oBtn[i].style.background = '#fafafa';
            aDiv[i].className='hh';

        }
        this.style.borderBottom = 'none';
        this.style.background = 'transparent';
        aDiv[this.index].className='hah';
    }
}
//    var oTab=document.getElementById('tab');
//    var oLi=oTab.getElementsByTagName('li');
//    var oDiv=oTab.getElementsByTagName('div');
//    for(var i=0;i<oLi.length;i++){
//        oLi[i].index=i;
//        oLi[i].onclick=function(){
//            for(var i=0;i<oLi.length;i++){
//                oLi[i].className='';
//                oDiv[i].className='';
//            }
//            this.className='bg';
//            oDiv[this.index].className='show';
//        }
//    }




//var oRecom = document.getElementById('recom');
//var oRow=utils.getChildren(oRecom);
//var oRowOn=oRecom.getElementsByClassName('rowOn');
//var oRowHide=oRecom.getElementsByClassName('rowHide');
////console.log(oRowOn);
//for(var a=0;a<oRow.length;a++){
//    //console.log(oRow[a]);
//    oRow[a].onmouseover=function(){
//        //console.log(oRowOn)
//
//
//    };
//}







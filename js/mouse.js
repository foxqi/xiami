/**
 * Created by Administrator on 2016/8/2 0002.
 */

var $user=$('#user');
var $userHidern=$('#userHidern');
var $vanish=$('#vanish');

var $offset=$user.offset();//{left:xxx,top:xxx}
//1.鼠标移入每张图片，让大图显示在求出距离box左上角的位置；鼠标位置距离可视区左上角的；我们要求大图的位置是距离box左上角的
$user.mouseover(function(e){
//        优化1.在移入的时候，可以不设置位置，让直接显示
//        扩展：$(this)这个对象只当前触发事件的这个元素---事件源
//        console.log(e.target==this)=>true
//        $mark.stop().show(500).find('img').attr('src',$(this).attr('realImg'));
//    });
    $vanish.stop().show(500).find('div').first();
});

$user.mousemove(function(e){
    var left= e.clientX-$offset.left+20;//加20是为了，鼠标移动的时候，鼠标会跑到大图，脱离小图触发hide，导致出现闪烁，
    var top= e.clientY-$offset.top+20;
    $vanish.css({left:left,top:top});//只管位置，不管显示
});
$user.mouseout(function(){
    $vanish.stop().hide();
})
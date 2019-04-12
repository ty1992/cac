isNeed = 0;
document.onkeyup  = function(e){
    var e = e || window.event;
    var codyKey = e.keyCode;
    switch(codyKey){
        case 38:
            keyUp();
            break;
        case 40:
            keyDown();
            break;
        case 37:
            keyLeft();
            break;
        case 39:
            keyRight();
            break;
        case 13:
            keyEnter();
            break;
        case 27:
            if(typeof keyBack == 'function' ){
                keyBack();
            }else{
                exit();
            }
            break;
    }
}

parent = {
    Util:  {
        getURLParameter: function(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg); //匹配目标参数
            if (r != null) return unescape(r[2]);
            return ''; //返回参数值
        }
    },
    TurnPage: {
        addUrl: function(url){
            window.location.href = url;
        },
        goBack: function(){
            //window.history.go(-1);
        }
    }

}


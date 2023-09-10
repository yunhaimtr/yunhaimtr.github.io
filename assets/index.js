$(function(){
    $(document).bind("contextmenu", function () {
        return false; 
    });
    document.oncontextmenu = function () {
        return false; 
    };
    document.onkeydown = function () {
        if (window.event && (window.event.keyCode == 123 || window.event.keyCode == 85)) {
            event.keyCode = 0;
            event.returnValue = false;
            return false;
        }
    };
});
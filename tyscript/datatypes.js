var child = /** @class */ (function () {
    function child() {
    }
    child.prototype.myfun = function () {
        console.log("It's child");
    };
    return child;
}());
var obj = new child();
//obj.myfun()

var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Hi Constructor ");
    }
    Demo.prototype.abc = function () {
        console.log("Hi method ");
    };
    return Demo;
}());
var d = new Demo();

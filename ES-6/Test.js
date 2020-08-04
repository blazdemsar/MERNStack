var myObject = {
    foo: "bar",
    func: function() {
        var self = this; //this -> context (myObject)
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() { //IIFE : no context has been set over here, then would be global
            console.log("inner func:  this.foo = " + this.foo); // no foo in the global, so it is undefined.... "this" is the context keyword
            console.log("inner func:  self.foo = " + self.foo); // self belongs to self in "func"
        }.call(this)); // setting the context to parent "this" using call method
    }
};
myObject.func();
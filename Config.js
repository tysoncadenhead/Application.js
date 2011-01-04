var MyApp = new Application();
MyApp.onError = function(e){
	console.log(e);
};

MyApp.addListener('custom-event1', function(params, caller){
	console.log(params, caller);
});

MyApp.fireEvent('custom-event1', {
	test: 'test 1'
});

/*
MyApp.addComponent('Alert', function(){
	alert('hello world!');
});

MyApp.addComponent('Alert2', function(){
	alert('hello world again!');
});
*/

MyApp.module = (function () { 
    var my = {}, 
        privateVariable = 1; 
     
    function privateMethod() { 
        // ... 
    } 
     
    my.moduleProperty = 1; 
    my.moduleMethod = function () { 
        // ... 
    }; 
     
    return my; 
}());
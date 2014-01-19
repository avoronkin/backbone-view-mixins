var advice = require('Backbone.Advice');
var afterRender = require('../../src/afterRender');

describe('afterRender mixin tests', function(){
    var a;
    beforeEach(function(){
        var A = function(){};
        A.prototype = {
            render: function(){
                console.log('render'); 
            },
            afterRender: function(){
                console.log('afterRender'); 
            }
        };
        advice.addMixin(A);
        A.mixin(afterRender);
        a = new A();
    });

    it('should work', function(){
        a.render();
    });
});

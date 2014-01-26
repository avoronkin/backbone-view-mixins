var sinon = require('sinon');
var expect = require('chai').expect;
var advice = require('Backbone.Advice');
var afterRender = require('../../src/afterRender');

describe('afterRender mixin', function(){
    var a;
    beforeEach(function(){
        var A = function(){};
        A.prototype = {
            render: function(){}
        };

        advice.addMixin(A);
        A.mixin(afterRender);
        a = new A();
    });

    it('should call afterRender() after render()', function(){
        var spy = sinon.spy(a, 'afterRender');
        a.render();

        expect(spy.calledOnce).to.be.true;
    });
});

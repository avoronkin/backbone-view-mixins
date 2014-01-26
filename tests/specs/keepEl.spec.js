var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var $ = require('jquery-browserify');
var Backbone = require('backbone');
Backbone.$ = $;

var advice = require('Backbone.Advice');
var keepEl = require('../../src/keepEl');


describe('keepEl mixin', function () {
    var View;
    beforeEach(function () {

        advice.addMixin(Backbone.View);
        View = Backbone.View.extend({}).mixin(keepEl);

    });

    describe('#remove()', function () {
        it('should call stopListening()', function () {
            var view = new View();
            var stopListeningSpy = sinon.spy(view, 'stopListening');

            view.remove();
            expect(stopListeningSpy.calledOnce).to.be.true;
        });

        it('should return a reference to view instance', function () {
            var view = new View();
            expect(view.remove()).to.be.equal(view);
        });
    });

    describe('#keepEl', function () {
        it('should be false by default', function () {
            var view = new View();
            expect(view.keepEl).to.be.false;
        });

        it('can be specified as a constructor parameter', function () {
            var view = new View({
                keepEl: true
            });
//hjjh
            expect(view.keepEl).to.be.true;

        });

    });

});

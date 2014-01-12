'use strict';

var _ = require('underscore');

var regionsMixin = function () {

    this.before('initialize', function (options) {
        options = options || {};
        this.views = options.views || {};
    });

    this.setDefaults({
        createSubView: function (view) {
            if (!view.instance) {
                view.instance = new view.constructor(view.options);
            }
        },

        renderSubViews: function () {
            _.each(this.views, this.renderSubView, this);
        },

        renderSubView: function (view, el) {
            this.createSubView(view);
            view.instance.setElement(el).render();
        },

        removeSubViews: function () {
            _.each(this.views, this.removeSubView, this);
        },

        removeSubView: function (view) {
            if (view.instance) {
                view.instance.remove();
            }
        }
    });

    this.around('render', function (render) {
        render();
        this.renderSubViews();
        return this;
    });

    this.around('remove', function (remove) {
        this.removeSubViews();
        remove();
        // console.log('remove ' + this, this);
        return this;
    });

};

module.exports = regionsMixin;

'use strict';

module.exports = function () {

    this.setDefaults({
        afterRender: function () {}
    });

    this.after('render', function () {
        this.afterRender();
    });
};

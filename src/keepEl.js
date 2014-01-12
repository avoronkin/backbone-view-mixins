'use strict';

var keepEl = function () {
    this.before('initialize', function (options) {
        options = options || {};
        this.keepEl = options.keepEl ? options.keepEl : true;
    });

    this.clobber({
        remove: function () {
            if (this.keepEl) {
                this.$el.html('');
            } else {
                this.$el.remove();
            }

            this.stopListening();
            return this;
        }
    });
};

module.exports = keepEl;

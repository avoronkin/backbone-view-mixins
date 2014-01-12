'use strict';

var underscoreTemplate = function () {

    this.setDefaults({

        template: function () {
            throw new Error('mixin underscoreTemplate: where underscore compiled template??');
        },

        data: function () {
            return {};
        }

    });


    this.clobber({

        getRenderedTemplate: function () {
            var html = this.template(this.data(), {
                variable: 'data'
            });

            return html;
        }

    });
};


module.exports = underscoreTemplate;

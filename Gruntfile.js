module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var browsers = [{
        browserName: "firefox",
        version: "19",
        platform: "XP"
    }, {
        browserName: "chrome",
        platform: "XP"
    }, {
        browserName: "chrome",
        platform: "linux"
    }, {
        browserName: "internet explorer",
        platform: "WIN8",
        version: "10"
    }, {
        browserName: "internet explorer",
        platform: "VISTA",
        version: "9"
    }, {
        browserName: "opera",
        platform: "Windows 2008",
        version: "12"
    }];


    grunt.initConfig({
        browserify: {
            tests: {
                files: {
                    'tests/browserify-specs-build.js': ['tests/main.js']
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/**/*.js', 'tests/**/*.spec.js', 'tests/main.js'],
                tasks: ['browserify:tests'],
                options: {
                    spawn: false,
                },
            },
            tests: {
                files: ['tests/browserify-specs-build.js'],
                tasks: ['mocha_phantomjs:all']
            }
        },

        mocha_phantomjs: {
            all: ['tests/index.html']
        },

        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },

        'saucelabs-mocha': {
            all: {
                options: {
                    urls: ["http://127.0.0.1:9999/tests/index.html"],
                    tunnelTimeout: 5,
                    build: process.env.TRAVIS_JOB_ID,
                    concurrency: 3,
                    browsers: browsers,
                    testname: "mocha tests",
                    tags: ["master"]
                }
            }
        }

    });

    grunt.registerTask('default', ['mocha_phantomjs:all', 'watch']);

    grunt.registerTask("test", ["connect", "saucelabs-mocha"]);

};

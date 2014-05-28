/*
 * slush-node-webkit
 * based on https://github.com/obetomuniz/slush-nodewebkit-express-nedb
 *
 * Copyright (c) 2014, Beto Muniz
 * Licensed under the MIT license.
 */

'use strict';

var gulp     = require('gulp'),
    install  = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename   = require('gulp-rename'),
    _        = require('underscore.string'),
    inquirer = require('inquirer');


var isTrue = function(v){
    return (v == "yes" || v == "true") ? true : false;
}

gulp.task('default', function(done) {

    //Answers
    var prompts = [{
        name: 'appName',
        message: 'What the name of project?',
        default: 'nodewebkit.app'
    }, {
        name: 'appVersion',
        message: 'What the version?',
        default: '0.0.1'
    }, {
        name: 'appDescription',
        message: 'What the description?',
        default: 'A simple scaffolding to build a node-webkit app from scratch'
    }, {
        name: 'appTitle',
        message: 'What the Window Title?',
        default: 'My New nodewebkit project'
    }, {
        name: 'appResizable',
        message: 'Window Resizable?',
        default: true
    }, {
        name: 'appFrame',
        message: 'Add Window Frame?',
        default: true
    }, {
        name: 'appToolbar',
        message: 'Add Window Toolbar?',
        default: false
    }, {
        name: 'appWidth',
        message: 'What is Window Width?',
        default: 800
    }, {
        name: 'appHeight',
        message: 'What is Window Height?',
        default: 600
    }, {
        name: 'appWindowPosition',
        message: 'Window Position?',
        default: "center"
    }, {
        name: 'appRepository',
        message: 'What is your app repository?',
        default: 'https://github.com/your-name/slush-nodewebkit'
    }, {
        name: 'appAuthor',
        message: 'Name of author?',
        default: 'Your Name'
    }, {
        name: 'appEmail',
        message: 'Author e-mail?',
        default: 'youremail@website.com'
    }];

    //Ask
    inquirer.prompt(prompts,
        function(answers) {
            if (!answers.appName) {
                return done();
            }

            answers.appToolbar = isTrue(answers.appToolbar);
            answers.appFrame = isTrue(answers.appFrame);
            answers.appResizable = isTrue(answers.appResizable);
            answers.appName = _.slugify(answers.appName)
            answers.appAuthorSlug = _.slugify(answers.appAuthor)
            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                .pipe(rename(function(file) {
                    if (file.basename[0] === '@') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function() {
                    done();
                });
        });
});

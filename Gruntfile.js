function config (name) {
    return require('./tasks/' + name + ".js");
}
module.exports = function(grunt) {
    //config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // config
        concat: config('concat'),
        jshint: config('jshint'),
        emberTemplates: config('emberTemplates'),
        less: config('less'),
        uglify: config('uglify'),
        cssmin: config('cssmin'),
        watch: {
            files: ['templates/**/*.hbs', 'app/**/*/js', 'css/**/*.less', 'index.html'],
            tasks: ['concat', 'jshint', 'emberTemplates', 'less', 'uglify', 'cssmin'],
            options: {
                livereload: true,
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks
    grunt.registerTask('dist', ['concat', 'jshint', 'emberTemplates', 'less', 'uglify', 'cssmin']);
    grunt.registerTask('default', ['watch']);
};
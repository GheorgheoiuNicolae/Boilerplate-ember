module.exports = {
    option: {
        separator: '\n'
    },
    dist: {
        src: ['js/app/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
    }
};
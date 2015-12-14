module.exports = function(grunt) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        script: 'app.js'
      }
    },
    pa11y: {
      options: {
        url: ['http://localhost:3000/OrderHistory_Gap'],
        timeout: 60000, 
        ignore: ['notice', 'warning']
      }
    },
  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-pa11y');
  grunt.registerTask('default', ['pa11y']);

};

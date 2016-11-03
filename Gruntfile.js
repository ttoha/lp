module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch : {
            compass: {
                files: ['css/scss/*.scss'],
                tasks: ['process']
            }
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['main.css', '!*.min.css'],
              dest: 'css',
              ext: '.min.css'
            }]
          }
        },
        concat: {
            dist: {
                src: ['css/scss/compile/*.css'],
                dest: 'css/main.css'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'css/scss',
                    cssDir: 'css/scss/compile',
                    environment: 'development',
                    imagesDir: "images/",
                    generatedImagesDir: "images/sprites/",
                    generatedImagesPath: "images/sprites/",
                    httpGeneratedImagesPath: "../images/sprites"
                }
            }
        },
    });
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-newer');


    grunt.registerTask('process', ['newer:compass', 'concat', 'cssmin']);
    grunt.registerTask('default', ['compass', 'concat', 'cssmin', 'watch']);
};

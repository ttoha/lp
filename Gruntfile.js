module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch : {
            compass: {
                files: ['scss/*.scss'],
                tasks: ['process']
            }
        },
        concat: {
            dist: {
                src: ['scss/*.scss'],
                dest: 'css/main.scss'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'css',
                    cssDir: 'css',
                    environment: 'development',
                    imagesDir: "images/",
                    generatedImagesDir: "images/sprites/",
                    generatedImagesPath: "images/sprites/",
                    httpGeneratedImagesPath: "../images/sprites",
                    outputStyle: "compressed"
                }
            }
        },
    });
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-newer');


    grunt.registerTask('process', ['concat', 'newer:compass']);
    grunt.registerTask('default', ['concat', 'compass', 'watch']);
};

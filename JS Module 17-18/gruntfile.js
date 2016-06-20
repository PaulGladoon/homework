module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'js/dist/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
    }
  },
  cssmin: {
    with_banner: {
      options: {
        banner: '/* My minified CSS */'
      },
      files: {
        'css/dist/style.min.css' : ['src/css/*.css']
      }
    }

  },
  concat_css: {
    options: {
      // Task-specific options go here.
    },
    all: {
      src: ["src/css/*.css"],
      dest: "css/dist/styles.main.css"
    },
  }
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');


  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'concat_css']);

};

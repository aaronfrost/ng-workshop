module.exports = function(grunt){

  grunt.initConfig({
    stylus:{
      compile:{
        options:{compress:false},
        files:{
          'css/app.css': 'styl/app.styl'
        }
      }
    },
    watch:{
      stylus:{
        files:['styl/**.styl'],
        tasks:['stylus:compile']
      },
      css:{
        options:{livereload:true},
        files:['css/**.css']
      },
      html:{
        options:{livereload:true},
        files:['**.html']
      },
      script:{
        options:{livereload:true},
        files:['**.js']
      }
    },
    concat:{
      js:{
        src:['js/lib/angular.js','js/app.js','js/**.js'],
        dest:'build/app.js'
      }
    },
    uglify:{
      js:{
        src:['build/app.js'],
        dest:'build/app.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', []);

}
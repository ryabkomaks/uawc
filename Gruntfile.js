module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		, sass_directory_import: {
			base: {
				options: {
					quiet: true
				}
				, files: {
					src: ['src/sass/base/**/_all_base_import.scss']
				}
			}
			, layout: {
				options: {
					quiet: true
				}
				, files: {
					src: ['src/sass/layout/**/_all_layout_import.scss']
				}
			}
			, modules: {
				options: {
					quiet: true
				}
				, files: {
					src: ['src/sass/modules/**/_all_modules_import.scss']
				}
			}
		}
		, sass: {
			dist: {
				options: {
					style: 'compressed'
				}
				, files: [{
					expand: true,
					cwd: 'src/sass/',
					src: ['*.scss'],
					dest: 'css/_styles.css'
				}]
			}
		}
		// , sprite:{
		// 	all: {
		// 		src: 'src/icons/*.png',
		// 		destImg: 'css/i/sprite.png',
		// 		destCSS: 'src/sass/_sprite.scss',
		// 		padding: 2,
		// 		algorithm: 'binary-tree'
		// 		// imgPath: './i/icons.png'
		// 	}
		// }
		// sprite:{
		//       all: {
		//         src: 'path/to/your/sprites/*.png',
		//         dest: 'destination/of/spritesheet.png',
		//         destCss: 'destination/of/sprites.css'
		//       }
		//     }
		// uglify: {
		// 	my_target: {
		// 		files: {
		// 			'js/main.min.js': ['src/js/*.js']
		// 		}
		// 	}
		// },
		, watch: {
			sass_directory_import: {
				files: ['src/sass/base/*.scss', 'src/sass/layout/*.scss', 'src/sass/modules/*.scss'],
				tasks: ['sass_directory_import']
			}
			, css: {
				files: 'src/sass/*.scss',
				tasks: ['sass']
			}
			// , jsmin: {
			// 	files: 'src/js/*.js',
			// 	tasks: ['uglify']
			// }
			// , sprite: {
			// 	files: 'src/sass/icons/*.png',
			// 	tasks: ['sprite']
			// }
		}
		, autoprefixer: {
		    options: {
		      browsers: ['ie 8', 'ie 9' , 'last 2 Chrome versions', 'last 2 Firefox versions'  ]
		    },
		    target: {
		      src: ['css/_styles.css'],
      		  dest: 'css/styles.css'
		    }
	  	}
	});
	
	grunt.loadNpmTasks('grunt-sass-directory-import');
	grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-spritesmith');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
		
	grunt.registerTask('default',[
		'sass_directory_import'
		, 'sass'
		, 'watch'
		, 'autoprefixer'
		// , 'sprite'
		// , 'uglify'
	]);
}
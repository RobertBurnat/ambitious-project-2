module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	// pass in options to plugins, references to files
	sass: { 
		options: { 
			sourceMap: true 
		}, 
		dist: { 
			files: { 
				'css/style.css': 'sass/style.sass' 
			} 
		} 
	},

	watch: { 
		scripts: { 
			files: ['sass/*.sass', 'css/*.css', '*.html'], 
			tasks: ['sass'], 
			options: { 
				spawn: false, 
			}
		} 
	},

	imagemin: { 
		dynamic: { 
			files: [{ 
				expand: true, 
				cwd: 'images/', 
				src: ['**/*.{png,jpg,gif}'], 
				dest: 'images/' 
			}] 
		} 
	},

	browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'sass/*.sass',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }

	});
	// Load the plugins tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	// Default task(s).
	grunt.registerTask('default', ['browserSync', 'imagemin', 'watch']);
};
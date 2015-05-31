module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-riot');

	grunt.initConfig({
		riot: {
						options: {
											 concat: true
										 },
		src: 'js/*.tag',
							dst: 'build/js',
							}
							});
							};


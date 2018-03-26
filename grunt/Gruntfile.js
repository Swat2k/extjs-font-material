module.exports = function (grunt) {
	grunt.initConfig({
		webfont: {
			"Material": {
				src: 'svg/*.svg',
				dest: './../resources/fonts',
				destCss: './../sass/etc',
				options: {
					font: "Material",
					hashes: false,
					syntax: "bem",
					stylesheet: "scss",
					codepointsFile: "codepoints.json",
					relativeFontPath: "#{$material-font-path}/",
					normalize: true,
					htmlDemo: true,
					destHtml: "./..",
					types: 'eot,woff2,woff,ttf,svg',
					templateOptions: {
						baseClass: 'x-mi',
						classPrefix: 'mi-'
					}
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-webfont');
	grunt.registerTask('default', ['webfont']);
};
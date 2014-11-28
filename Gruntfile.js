module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		env: {
		  coverage: {
			APP_DIR_FOR_CODE_COVERAGE: '../coverage/instrument/'
		  }
		},
		instrument: {
		  files: 'last-mod.js',
		  options: {
			basePath: 'coverage/instrument/'
		  }
		},
		nodeunit: {
		  src: ['tests/*.js']
		},
		
		storeCoverage: {
		  options: {
			dir: 'coverage/reports'
		  }
		},
		makeReport: {
		  src: 'coverage/reports/**/*.json',
		  options: {
			type: 'html',
			dir: 'coverage/reports',
			print: 'detail'
		  }
		}
	});
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-istanbul');

	grunt.registerTask('default', 
		['env:coverage', 'instrument', 'nodeunit',
		'storeCoverage', 'makeReport']);
};


const pkg = require('../package');

const ConfigOptions = function () {
	const config = this;


  // source directory 
  config.srcDir = '../assets/src'; 
  // dist directory
  config.distDir = '../assets/dist';
  // local development : for local testing
	config.localDir = '../app';

	
  /*
    Local directories
    ===================================
  */
	config.local = {
    imagesDir: `${config.srcDir}/images/*.**`,
    viewsDir: `${config.srcDir}/views/*.html`,

    appcss: `${config.localDir}/css`,
		appjs: `${config.localDir}/js`,
		appimg: `${config.localDir}/images`,
	}
  

  /*
   Framework Scss/css directories
   ===================================
   scssDir : location of all scss files
   distDir : location of unminified css
  */
	config.css = {
		scssDir: `${config.srcDir}/scss`,
    distDir: `${config.distDir}/css`,
  };


  
  /*
   Framework Javascript directories
   ===================================
   srcDir : source javascript
   distDir : compiled javascript
  */
  config.js = {
		srcDir: `${config.srcDir}/js`, // config.js.srcDir
		distDir: `${config.distDir}/js`, // config.js.distDir
	};
	

};

module.exports = new ConfigOptions();
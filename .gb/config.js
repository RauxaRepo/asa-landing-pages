
/*

 .----------------.  .----------------.  .----------------.   .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. | | .--------------. || .--------------. |
| |  ____  ____  | || |     _____    | || |  _______     | | | |     __       | || |    ______    | |
| | |_  _||_  _| | || |    |_   _|   | || | |_   __ \    | | | |    /  |      | || |  .' ____ '.  | |
| |   \ \  / /   | || |      | |     | || |   | |__) |   | | | |    `| |      | || |  | (____) |  | |
| |    \ \/ /    | || |      | |     | || |   |  __ /    | | | |     | |      | || |  '_.____. |  | |
| |    _|  |_    | || |     _| |_    | || |  _| |  \ \_  | | | |    _| |_     | || |  | \____| |  | |
| |   |______|   | || |    |_____|   | || | |____| |___| | | | |   |_____|    | || |   \______,'  | |
| |              | || |              | || |              | | | |              | || |              | |
| '--------------' || '--------------' || '--------------' | | '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'   '----------------'  '----------------' 

*/
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
    imagesDir: `${config.srcDir}/images/**/*`,
    viewsDir: `${config.srcDir}/views/*.html`,
    fontsDir: `${config.srcDir}/fonts/**/*`,

    appcss: `${config.localDir}/css`,
    appfonts: `${config.localDir}/css/fonts`,
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
  
  
  config.creds = {
    user : 'CSAlaskaAPI',
    pass : '@Lze1nIuDW'

  }

};

module.exports = new ConfigOptions();
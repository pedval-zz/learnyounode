var fs = require('fs'),
	path = require('path');

module.exports = function (dirName, fileExtension, result) {	
	fs.readdir(dirName, function(err, files){
		var fileList = [];
		var j = 0;
		if(err) {
			console.error(err);
			return result(err);
		} 
		for(var i = 0; i < files.length; i++) {			
			if(path.extname(files[i]) === '.'+fileExtension) {
				fileList[j] = files[i];
				j++;
			}				
		}
		result(null, fileList);	
	});
};


const fs = require('fs');
const exec = require('child_process').exec;

module.exports = function(code){
	return new Promise((resolve, reject) => {
		fs.writeFile('./libs/brutgol/temp.poti', code, error => {
			if(error) return;

			exec('java -jar ./libs/brutgol/lib/potigol.jar ./libs/brutgol/temp.poti', (error, stdout, stderr) => {
				if(error) return;

				resolve(stdout);
			});
		});
	});
}
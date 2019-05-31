const fs = require('fs');
const exec = require('child_process').exec;
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const dir = './libs/brutgol';

// queue request manage..
const adapter = new FileSync(dir + '/local/queue.json');
const db = low(adapter);
db.defaults({ queue: []}).write()

module.exports = function(code, token = '2asf356h78a9s0gasd-q0w9eqw'){
	return new Promise((resolve, reject) => {
		console.log(db.get('queue').find({token: token}).value())
		// verify token
		if(db.get('queue').find({token: token}).value()) resolve('please wait you past request!');
		else{
			// send token to queue
			db.get('queue').push({token: token}).write()

			// creating a potigol file
			fs.writeFile(`./libs/brutgol/local/files/${token}.poti`, code, error => {
				if(error) return;

				// java settings
				const command = `java -jar ${dir}/lib/potigol.jar ${dir}/local/files/${token}.poti`;
				exec(command, (error, stdout, stderr) => {
					if(error) return;

					// remove token from queue
					db.get('queue').remove({token: token}).write();

					console.log('sss: ', stdout)
					resolve(stdout);
				});
			});
		}
	});
}
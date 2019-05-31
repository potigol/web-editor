const fs = require('fs');
const exec = require('child_process').exec;
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const bufferFileStream = require('buffer-file-stream');
const del = require('delete');
const dir = './libs/brutgol';

// queue request manage..
const adapter = new FileSync(dir + '/local/queue.json');
const db = low(adapter);

db.defaults({ queue: []}).write()
db.get('queue').remove().write();

module.exports = function(code, token){
	return new Promise((resolve, reject) => {
		// verify token
		if(db.get('queue').find({token: token}).value()) resolve('please wait you past request!');
		else{
			// send token to queue
			db.get('queue').push({token: token}).write()

			// creating a potigol file
			var _token = token.replace(/\//g, ''),
			filePath = `${dir}/local/files/${_token}.poti`, 
			bfs = bufferFileStream(filePath);
			bfs.write(code);

			// java settings
			const command = `java -jar ${dir}/lib/potigol.jar ${filePath}`;
			exec(command, (error, stdout, stderr) => {
				if(error) console.log(error);

				// remove token from queue
				db.get('queue').remove({token: token}).write();
				
				// remove file
				del.sync([`${dir}/local/files/*`]);
				
				resolve(stdout);
			});
		}
	});
}
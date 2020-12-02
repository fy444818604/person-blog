import { Injectable } from '@nestjs/common';

const fs = require('fs')
@Injectable()
export class AppService {
  getHello(): string {
    return 'test123!';
  }
	
	async getLive1(): Promise<any> {
		return this.getFileData().then(data => {
			return data
		})
	}
	
	getFileData() {
		let promise = new Promise((resolve, reject) => {
		    fs.readFile('./public/3.mp4', (err, data) => {
		      if (err) {
		        reject(err)
		        return 
		      }
		      resolve(data)
		    })
		  })
		  return promise
	}
}

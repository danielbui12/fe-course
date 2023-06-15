/**
 * Sync vs. Async
 * 
 * 
 * Sync
 * |------------..5p..---|---------------|---------...5p...--------|-------->
 * bật máy nước      nước xong       chuẩn bị balo                đi học
 *                   lấy nước 
 * 
 * Async
 * |----------------------|-------------------|--------------------------->
 * bật máy nước    chuẩn bị balo          lấy nước
 *                                        đi học
 * 
 * 
 * */

// console.log('bật máy nước')
// console.log('nước xong,\nlấy nước')
// console.log('chuẩn bị balo')
// console.log('đi học')


// var fs = require('fs')

// console.log('bật máy nước')
// fs.readFile(
// 	'dulieu.txt', 
// 	{ encoding: 'utf-8'}, 
// 	function(_, content) { 
// 		console.log(content) 
// 	}
// )
// 		console.log('chuẩn bị balo')


// // call back hell
// fs.readFile('dulieu/file1.txt', { encoding: 'utf-8'}, function(_, content) { 
// 		console.log(content)
// 		fs.readFile('dulieu/file2.txt', { encoding: 'utf-8'}, function(_, content) {
// 			console.log(content)
// 			fs.readFile('dulieu/file3.txt', { encoding: 'utf-8'}, function(_, content) {
// 				console.log(content)
// 			})
// 		})
// 	}
// )

// // nested if
// if () {
// 	if () {
// 		if () {

// 		}
// 	}
// }


// // nested for 
// for () {
// 	for () {
// 		for () {

// 		}
// 	}
// }

// var fs = require('fs-promise')

// fs.readFile('dulieu/file1.txt', { encoding: 'utf-8' })
//   .then(function (content) {console.log('file1', content) })
//   .then(function () {
//     return fs.readFile('dulieu/file2.txt', { encoding: 'utf-8' })
//   })
//   .then(function (content) {console.log('file2', content) })
//   .catch(function (error) { console.error(error) })


var fs = require('fs')

function readFilePromise(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { encoding: 'utf-8'}, function (error, content) {
      if (error) {
        reject(error)
      } else {
        resolve(content)
      }
    })
  })
}

// readFilePromise('dulieu/file1.txt')
//   .then(function (content) { console.log('file1', content) } )
//   .then(function () {
//     return readFilePromise('dulieu/file2.txt')
//   })
//   .then(function (content) {console.log('file2', content) })
//   .catch(function (error) { console.error(error) })

// Promise.all([
//   readFilePromise('dulieu/file1.txt'),
//   readFilePromise('dulieu/file2.txt'),
//   readFilePromise('dulieu/file3.txt')
// ])
//   .then(function (values) {
//     console.log('then', values)
//   })
//   .catch(function (error) {
//     console.log('error', error)
//   })

// async - await
async function run() {
  const file1 = await readFilePromise('dulieu/file1.txt')
  const file2 = await readFilePromise('dulieu/file2.txt')
  const file3 = await readFilePromise('dulieu/file3.txt')
  return [file1, file2, file3]
}

run()
  .then(function (values) {
    console.log('values', values)
  })
  .catch(function (error) {
    console.log('error', error)
  })
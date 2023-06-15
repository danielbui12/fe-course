var prompt = require('prompt-sync')({sigint: true});
var fs = require('fs-promise')


/**
 * tên
 * ngày nhập
 * tác giả
 * giá
 * 
 * */

function requireInput(msg) {
	var input = prompt(msg);
	if (!input) {
		requireInput(input, msg)
	} else {
		return input
	}
}

function addBook() {
	var bookName, bookAuthor, bookPrice
	bookName = requireInput('Mời nhập tên sách: ');
	bookAuthor = requireInput('Mời nhập tác giả: ');
	bookPrice = requireInput('Mời nhập giá: ');

	var bookData = {
		bookName: bookName,
		bookAuthor: bookAuthor,
		bookPrice: bookPrice,
		createdAt: new Date()
	}

	var dataWarehouse = fs.readFileSync('dulieu/khosach.json', { encoding: 'utf-8' })
	dataWarehouse = JSON.parse(dataWarehouse)
	dataWarehouse.push(bookData)
	fs.writeFileSync('dulieu/khosach.json', JSON.stringify(dataWarehouse), { encoding: 'utf-8' })
	console.log('Lưu thành công.')
	printMenu()

}


function printMenu() {
	var menu = "> 1. Xem danh sách\n  2. Tìm kiếm\n  3. Thêm sách\n  4. Thoát"
	console.log(menu)
	var input = requireInput('Mời chọn chức năng: ')
	input = parseInt(input)

	switch (input) {
	case 1:
		break 
	case 2:
		break 
	case 3:
		addBook()
		break 
	case 4:
		console.log('Tạm biệt!')
		break 
	default:
		printMenu()
		break
	}
}


function main() {
	printMenu()
}

main()
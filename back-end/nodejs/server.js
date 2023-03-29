let http = require('http');
// import module ที่สร้างมาใช้
let dt = require('./myfristmodule');
let url = require('url');
let fs = require('fs');
let uc = require('upper-case');
let rs = fs.createReadStream('demo.txt');
let events = require('events');
let eventEmitter = new events.EventEmitter();
let a = require('formidable');


// ตรวจจับ event เมื่อเปิดไฟล์
// rs.on('open', function(){
//     console.log('The file is open');
// })
// สร้างตัวจัดการ event
let myEventHandler = function() {
    console.log('I hear scream');
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream')


// let adr = 'http://localhost:8000/default.html?year=2023&month=mar';

// let q = url.parse(adr, true);

// console.log(q.host)
// console.log(q.pathname)
// console.log(q.search)

// let qdata = q.query

// console.log(qdata)
// console.log(qdata.month)
// console.log(qdata.year)
// console.log(qdata.month)

// http.createServer(function (req, res){
    // res.writeHead(200, { 'Content-type': 'text/html'})
    // import module ที่สร้างมาใช้
    // res.write('Time now: ' +  dt.myDateTime());

    // อ่าน query string
    // res.write(req.url);
    // let q = url.parse(req.url, true).query;
    // let txt = q.year + " " + q.month
 
    // อ่านไฟล์
    // fs.readFile('index.html', function(err, data){
    //     res.writeHead(200, { 'Content-type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    // })

    // res.end(txt);
// }).listen(8000);

// สร้างไฟล์ และ echo ข้างในไฟล์ ถ้าไม่มีไฟล์จะสร้างอัตโนมัตร
// fs.appendFile('mynewifle.txt', 'Hello, World', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// })

// สร้างไฟล์ opne ด้วยโหมด w
// fs.open('mynewifle2.txt', 'w', function(err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// })

// ถ้าไม่มีจะถูกสร้าง ถ้ามีจะถูกเขียนทับ  
// fs.writeFile('mynewifle3.txt', 'file 3333', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// })

// เขียนต่อจากเดิม
// fs.appendFile('mynewifle3.txt', 'Update file3', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// })

// // เปลี่ยนชื่อไฟล์
// fs.rename('mynewifle2.txt', 'renamefile.txt', function(err){
//     if (err) throw err;
//     console.log('Rename file!')
// })

// รับตัวแปร path filename
// http.createServer(function (req, res){
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data){
//         if (err) {
//             res.writeHead(404, { 'Content-Tpye': 'text/html' });
//             return res.end('404 Not Found')
//         }
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end()
//     })
// }).listen(8000)

// การติดตั้ง module และเรียกใช้  npm i upper-case
// http.createServer(function (req, res){
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(uc.upperCase('wongsathorn'))
//     res.end()
// }).listen(8000)

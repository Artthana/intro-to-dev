// let http = require('http');
// let fs = require('fs');
// let formidable = require('./node_modules/formidable');

// http.createServer(function (req, res){
//     if (req.url == '/fileupload') {
//         let form = new formidable.IncomingForm();
//         form.parse(req, function(err, fields, files){
//             if (err) throw err;
//             console.log("deee "+ files.filetoupload.path)
//             if (files.fileupload) {
//                 let oldpath = files.filetoupload.path;
//                 console.log(oldpath);
//                 let newpath = '/Users/pptvappleid/Desktop/Project/intro_to_dev/back-end/nodejs/img/' + files.filetoupload.path;
//                 fs.rename(oldpath, newpath, function(err){
//                     if (err) throw err;
//                     res.write('File uploaded and moved');
//                     res.end();
//                 })
//             } else {
//                 res.write('No file selected');
//                 res.end();
//             }
//         })
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="fileupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(8000);
let http = require('http');
let formidable = require('./node_modules/formidable');
let fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/upload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;//ตำแหน่งที่เราเลือกต้นทาง
            var newpath = 'uploads/' + files.filetoupload.name; // ตำแหน่งปลายทาง
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('Upload Complete!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<form action="upload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload">');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8000);

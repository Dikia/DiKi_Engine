/* 게시판 라우팅

게시판에 게시물을 등록/조회/삭제/수정합니다.
*/
var express = require('express');
var app = express();
var DB = {}; // DB 클라이언트 모듈(mongoose 등)입니다.

exports.run = function(Server){

Server.get(/* 게시물 조회 */"/post/:id", function(req, res){
	// 권한이 있는지 확인합니다.
	// req.params 속성을 이용해 :id의 값을 얻습니다.
});
Server.post(/* 게시물 등록&수정 */"/write", function(req, res){
	// 권한이 있는지 확인합니다.
	// req.body 속성을 이용해 클라이언트에서 보낸 정보를 얻습니다.
});
Server.post(/* 게시물 삭제 */"/delete/:id", function(req, res){
	// 권한이 있는지 확인합니다.
	// req.params 속성을 이용해 :id의 값을 얻습니다.
});

Server.post(/* 파일 업로드 */"/upload/:name", function(req, res, next){
	var data = [];
	
	req.on('data', function(chunk){
		data.push(chunk);
	}).on('end', function(){
		req.body = Buffer.concat(data);
		next();
	});
}, function(req, res){ // 바로 위 함수의 next()에 의해 진행됩니다.
	// 권한이 있는지 확인합니다.
	var file = new Buffer(req.body);
	
	fs.writeFile(/* 파일 경로 */`${__dirname}/${req.params.name}`, file, function(err){
		if(err) return res.sendStatus(500);
		res.sendStatus(200);
	});
});

};
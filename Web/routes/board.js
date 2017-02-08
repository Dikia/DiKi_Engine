/* �Խ��� �����

�Խ��ǿ� �Խù��� ���/��ȸ/����/�����մϴ�.
*/
var express = require('express');
var app = express();
var DB = {}; // DB Ŭ���̾�Ʈ ���(mongoose ��)�Դϴ�.

exports.run = function(Server){

Server.get(/* �Խù� ��ȸ */"/post/:id", function(req, res){
	// ������ �ִ��� Ȯ���մϴ�.
	// req.params �Ӽ��� �̿��� :id�� ���� ����ϴ�.
});
Server.post(/* �Խù� ���&���� */"/write", function(req, res){
	// ������ �ִ��� Ȯ���մϴ�.
	// req.body �Ӽ��� �̿��� Ŭ���̾�Ʈ���� ���� ������ ����ϴ�.
});
Server.post(/* �Խù� ���� */"/delete/:id", function(req, res){
	// ������ �ִ��� Ȯ���մϴ�.
	// req.params �Ӽ��� �̿��� :id�� ���� ����ϴ�.
});

Server.post(/* ���� ���ε� */"/upload/:name", function(req, res, next){
	var data = [];
	
	req.on('data', function(chunk){
		data.push(chunk);
	}).on('end', function(){
		req.body = Buffer.concat(data);
		next();
	});
}, function(req, res){ // �ٷ� �� �Լ��� next()�� ���� ����˴ϴ�.
	// ������ �ִ��� Ȯ���մϴ�.
	var file = new Buffer(req.body);
	
	fs.writeFile(/* ���� ��� */`${__dirname}/${req.params.name}`, file, function(err){
		if(err) return res.sendStatus(500);
		res.sendStatus(200);
	});
});

};
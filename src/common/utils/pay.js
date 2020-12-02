var md5 = require('md5-node');
var xml2js = require('xml2js');
var rp = require('request-promise');

function randomStr() { //产生一个32位随机字符串	
	var str = "";
	var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
		'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];

	for (var i = 1; i <= 32; i++) {
		var random = Math.floor(Math.random() * arr.length);
		str += arr[random];
	}

	return str;
}

function createSign(obj) { //签名算法（把所有的非空的参数，按字典顺序组合起来+key,然后md5加密，再把加密结果都转成大写的即可）
	var stringA = 'appid=' + obj.appid + '&body=' + obj.body + '&mch_id=' + obj.mch_id + '&nonce_str=' + obj.nonce_str +
		'&notify_url=' + obj.notify_url + '&out_trade_no=' + obj.out_trade_no +
		'&spbill_create_ip=' + obj.spbill_create_ip + '&sub_mch_id=' + obj.sub_mch_id + '&sub_openid=' + obj.sub_openid + '&total_fee=' + obj.total_fee + '&trade_type=' + obj.trade_type;

	let stringSignTemp = stringA + '&key=zxcvbnm147asdfghjkl258qwertyuiop';
	stringSignTemp = md5(stringSignTemp);
	let signValue = stringSignTemp.toUpperCase();
	return signValue
}

function createSign1(obj) { //签名算法（把所有的非空的参数，按字典顺序组合起来+key,然后md5加密，再把加密结果都转成大写的即可）
	var stringA = 'appid=' + obj.appid + '&mch_id=' + obj.mch_id + '&nonce_str=' + obj.nonce_str +
	    '&out_trade_no=' + obj.out_trade_no + '&sub_appid=' + obj.sub_appid + '&sub_mch_id=' + obj.sub_mch_id;

	let stringSignTemp = stringA + '&key=zxcvbnm147asdfghjkl258qwertyuiop';
	stringSignTemp = md5(stringSignTemp);
	let signValue = stringSignTemp.toUpperCase();
	return signValue
}

function pay(msg, req1, res1) {
	let time = new Date().getTime();
	let nonce_str = randomStr();
	// let total_fee = Number(msg.money) * 100;
	console.log(Number(msg.money) * 100)
	let total_fee = 1;
	let appid = 'wx3933f01ee849212d'; //自己的小程序appid
	let mch_id = '1583497671'; //自己的商户号id
	let sub_mch_id = '1598931311'// 子商户号
	let sub_openid = msg.openId;

	let sign = createSign({
		appid: appid,
		body: '盛泰农业',
		mch_id: mch_id,
		sub_mch_id: sub_mch_id,
		nonce_str: nonce_str,
		notify_url: 'https://wx.xiaoyimei.com/notice',
		sub_openid: sub_openid,
		out_trade_no: time,
		spbill_create_ip: '127.0.0.1',
		total_fee: total_fee,
		trade_type: 'JSAPI'
	})

	console.log(msg.shopNum)

	let reqUrl = 'https://api.mch.weixin.qq.com/pay/unifiedorder'

	let formData =
		`<xml>
									<appid>${appid}</appid>
									<mch_id>${mch_id}</mch_id>
									<sub_mch_id>${sub_mch_id}</sub_mch_id>
									<nonce_str>${nonce_str}</nonce_str>
									<sign>${sign}</sign>
									<body>盛泰农业</body>
									<out_trade_no>${time}</out_trade_no>
									<total_fee>${total_fee}</total_fee>
									<spbill_create_ip>127.0.0.1</spbill_create_ip>
									<notify_url>https://wx.xiaoyimei.com/notice</notify_url>
									<trade_type>JSAPI</trade_type>
									<sub_openid>${sub_openid}</sub_openid>
								</xml>`;

	rp({
		url: reqUrl,
		method: "POST",
		json: true,
		headers: {
			"content-type": "application/json",
		},
		body: formData
	}).then(res => {
		xml2js.parseString(res, function(error, result) {
			let reData = result.xml;
			console.log(reData)

			let responseData = {
				timeStamp: new Date().getTime(),
				nonceStr: reData.nonce_str[0],
				package: reData.prepay_id[0],
				paySign: reData.sign[0],
				outTradeNo: time
			}
			// orderCheck(time,msg.shopNum)
			return responseData;
			// res1.send(JSON.stringify(responseData))
		})
	})

}

module.exports = { pay }
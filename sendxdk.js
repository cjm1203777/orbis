var injector = angular.element(document.body).injector();
var $http = injector.get("$http");
var be,bb,bd;
function i2n(imin) {
    var link = "https://orbi.kr/api/v1/user/" + imin + "/timeline";
    var bc = $http({
        method: 'GET',
        url: link,
        transformResponse: function (data) {
            return angular.fromJson(data)
        }
    });

    bc.then(function (response) {
        be = response.data;
        bd = response.data.data.posts[0].id;
        bb = '000' + bd.toString();
    });
    return bb;
}
function abh(num, r) {
    if (num === undefined) {
        return "there is n error";
    }
    var link2 = "https://orbi.kr/api/v1/board/post/" + num + "/send_xdk";
    var bj = $http({
        method: 'POST',
        url: link2,
        data: {value: r},
        transformResponse: function (data) {
            return angular.fromJson(data)
        }
    });
    bj.then(function (response) {
        var bk = response.data['data']['trx'];
        alert('거래 번호 : ' + bk+'\n금액 : '+r+'\n이 전송되었습니다.');
    });
}


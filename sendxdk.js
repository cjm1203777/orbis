

injector = angular.element(document.body).injector();
    $http = injector.get("$http");
    function abc() {
        var i2n = function (imin) {
            var c = 0, aa = 0, st,bb;
            var link = "https://orbi.kr/api/v1/user/" + imin + "/timeline";
            var bc = $http({
                method: 'GET',
                url: link,
                transformResponse: function (data) {
                    return angular.fromJson(data)
                }
            });
            bc.then(function (response) {
                bd = response.data['data']['posts'][0]['id'];
                bb = '000' + bd.toString();
            });
            return bb;
        };
        var abh =  function (num, r) {
            if (num === undefined) {
                return "there is an error";
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
                alert('거래 번호 : ' + bk);
            });
        };
    }
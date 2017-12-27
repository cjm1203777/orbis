    var link2,num2,bd,bb,bk,num3;
    injector = angular.element(document.body).injector();
    $http = injector.get("$http");
    var i2n = function(imin) {
        var c = 0, aa = 0,st;
        var link = "https://orbi.kr/api/v1/user/" + imin + "/timeline";
        var bc = $http({
            method: 'GET',
            url: link,
            transformResponse: function (data) {
                return angular.fromJson(data)
            }
        });
        bc.then(function(response){
            bd = response.data['data']['posts'][0]['id'];
            bb = '000' + bd.toString();
        });
        num3 = bb;
        return bb;
    }
    var abh = function(num,r) {
        if (num===undefined) {
            return "there is an error";
        }
        link2 = "https://orbi.kr/api/v1/board/post/" + num + "/send_xdk";
        var bj = $http({
            method: 'POST',
            url: link2,
            data : {value : r},
            transformResponse: function (data) {
                return angular.fromJson(data)
            }
        });
        bj.then(function(response){
            bk = response.data['data']['trx'];
            alert('거래 번호 : '+bk);
        });
    }

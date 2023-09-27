<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form enctype="multipart/form-data" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">

        <input type="text" name="test" value="test">
</form>
</body>
</html>

curl 'https://helal-elwady.com/remote-providerInvoiceRequest?idservice=106&area_code=040&phone_number=3104810&simulate=0&calculate=0&reverse=0&jx=1&_=1695169400425' -H 'User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:109.0) Gecko/20100101 Firefox/113.0' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Accept-Language: ar,en-US;q=0.7,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' -H 'Referer: https://helal-elwady.com/panel-getServicesByServiceCategory-idservice_category-3' -H 'Cookie: PHPSESSID=0001-9cd1788e-650a24f1-4cd0-eca1516d' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'TE: trailers'


await fetch("https://helal-elwady.com/remote-providerInvoiceRequest?idservice=106&area_code=040&phone_number=3104810&simulate=0&calculate=0&reverse=0&jx=1&_=1695169400425", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; rv:109.0) Gecko/20100101 Firefox/113.0",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "ar,en-US;q=0.7,en;q=0.3",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://helal-elwady.com/panel-getServicesByServiceCategory-idservice_category-3",
    "method": "GET",
    "mode": "cors"
});
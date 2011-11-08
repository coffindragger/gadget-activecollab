



    function cached_get(key, url, data, callback) {
        if (key in localStorage) {
            callback(JSON.parse(localStorage.getItem(key)));
        }
        else {
            $.get(url, data, function(obj) {
                localStorage.setItem(key, JSON.stringify(obj));
                callback(obj);
            });
        }
    }

    function ac_api_fetch(cache_key, api_key, path, success)
    {
        var API_URL = 'https://active.concentricsky.com/public/api.php';
        cached_get(cache_key, API_URL, {'format': "json", 'token': API_KEY, 'path_info': path}, success);
    }



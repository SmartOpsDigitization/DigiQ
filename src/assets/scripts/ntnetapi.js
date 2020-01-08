function getntNet() {
    var userName;
    $.ajax({
        url: "http://vikasbo01v:8080/auth/hello.js",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        dataType: 'text',
        crossDomain: true,
        async: false,
        success: function (data) {
            userName = data.substr(data.toString().lastIndexOf("\\") + 1);
        },
        error: function (X) {
        }
    });
    return userName;
}
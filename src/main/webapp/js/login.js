/**
 * Created by Arthur on 2016/3/21.
 */


function checkLogin() {
    res = isNotEmpty("lf_username", "用户名不能为空");
    res = isNotEmpty("lf_password", "密码不能为空");
    if (!res) {
        return;
    }
    $.post("check.do",
        {
            username: $("#lf_username").val(),
            password: $("#lf_password").val()
        },
        function (data) {
            if (data.success) {
                $('#myModal').modal('hide');
            } else {
                alert(1)
            }

        }, 'json');
}

function checkValue(id, text) {
    if ($('#' + id).val() == '' || $('#' + id).val().length < 1) {
        alert(text);
        return false;
    }
    return true;
}
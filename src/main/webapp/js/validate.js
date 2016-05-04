/**
 * 对输入框的内容进行校验
 * @author zhaowenyi
 * @return true合法，false不合法
 * @param defineAttrName 自定义属性的name，为空则自动使用"check"
 * @param tagName 输入框的tag name，如input，为空表示input
 * @see 自定义属性vale规则：check="类型,长度,必填"，类型：N数字，T文本，必填：M必填，空选填
 *                示例1：<input id="tt" check="N,10,M">
 *                示例2：<input id="tt" check="N,10">
 *                示例3：<input id="tt" check="T,10">
 *                长度默认：数值12位，文本：50位
 */
function validInput(defineAtrrName, tagName) {
    tagName = tagName == null ? "input" : tagName;
    defineAtrrName = defineAtrrName == null ? "check" : defineAtrrName;

    var objs = document.getElementsByTagName(tagName);//所有的tag对象，如input
    //alert(objs.length);
    for (var i = 0; i < objs.length; i++) {
        var obj = objs[i];
        if (obj.style.display == "none")//如果隐藏的，不进行校验
            continue;
        var attr = obj.getAttribute(defineAtrrName);//自定义属性
        if (attr != null) {
            var arr = attr.split(",");
            var type = arr.length > 0 ? arr[0] : "text";//缺省是text
            var length = 50;
            if (type == "N")
                length = arr.length > 1 ? arr[1] : 12;//数值缺省长度12
            //else if(type=="T")
            //	length = arr.length>1?arr[1]:50;//文本缺省长度50
            var strMust = arr.length > 2 ? arr[2] : "";//缺省不必输，必输时传参数M
            var bMust = strMust == "M" ? true : false;//是否必输

            var value = obj.value;
            if (bMust && value.length == 0) {
                alert("内容不能为空，请输入！");
                obj.focus();
                return false;
            }
            if (type == "N" && !validNumber(obj, value, length))
                return false;
            else if (type == "T" && !validLength(obj, value, length))
                return false;
        }
    }
    //alert("ok，输入的数据没有问题。");
    return true;
}

function validNumber(obj, value, length) {
    //alert(value);
    var intnum = value.split(".")[0].length;
    var str = "";
    if (isNaN(value))
        str = "请输入合法的数字";
    else if (intnum > length)
        str = "数字的整数部分长度不能超过" + length + "位";
    if (str != "") {
        alert(str);
        obj.focus();
        return false;
    }
    else {
        //alert("ok");
        return true;
    }
}
function validLength(obj, value, length) {
    if (value.length > length) {
        alert("长度不能超过" + length + "位！");
        obj.focus();
        return false;
    }
    else
        return true;
}

var validType = {
    ValiddateBox: "ValiddateBox",
    NumberBox: "NumberBox",
    Combobox: "Combobox",
    DateBox: "DateBox"
};
function init_validate(valdateArray) {
    var validboxArray = [];
    var numberboxArray = [];
    var dateboxArray = [];
    var comboboxArray = [];
    for (var i = 0; i < valdateArray.length; i++) {

        if (valdateArray[i].validType == validType.ValiddateBox) {
            validboxArray.push(valdateArray[i]);
        } else if (valdateArray[i].validType == validType.NumberBox) {
            numberboxArray.push(valdateArray[i]);
        } else if (valdateArray[i].validType == validType.DateBox) {
            dateboxArray.push(valdateArray[i]);
        } else if (valdateArray[i].validType == validType.Combobox) {
            comboboxArray.push(valdateArray[i]);
        }

    }
    using('validatebox', function () {
        for (var i = 0; i < validboxArray.length; i++) {
            $("#" + validboxArray[i].id).validatebox(validboxArray[i]);

        }
    });
    using('numberbox', function () {
        for (var i = 0; i < numberboxArray.length; i++) {
            $("#" + numberboxArray[i].id).numberbox(numberboxArray[i]);
        }
    });
    using('datebox', function () {
        for (var i = 0; i < dateboxArray.length; i++) {
            $("#" + dateboxArray[i].id).datebox(dateboxArray[i]);
        }
    });
    using('combobox', function () {
        for (var i = 0; i < comboboxArray.length; i++) {
            $("#" + comboboxArray[i].id).combobox(comboboxArray[i]);
        }
    });
}

/**
 * 校验 控件 正确性
 *
 * @param valdateArray
 * @returns {Boolean} 全都正确返回 true 有错误返回 false
 */
function validation(valdateArray) {
    var rvalue = true;
    for (var i = 0; i < valdateArray.length; i++) {

        if (valdateArray[i].validType == validType.ValiddateBox) {
            if (!$("#" + valdateArray[i].id).validatebox("isValid")) {
                rvalue = false;
            }

        } else if (valdateArray[i].validType == validType.NumberBox) {
            if (!$("#" + valdateArray[i].id).numberbox("isValid")) {
                rvalue = false;
            }
        } else if (valdateArray[i].validType == validType.DateBox) {
            if (!$("#" + valdateArray[i].id).datebox("isValid")) {
                rvalue = false;
            }
        } else if (valdateArray[i].validType == validType.Combobox) {
            if (!$("#" + valdateArray[i].id).combobox("isValid")) {
                rvalue = false;
            }
        }

    }
    return rvalue;
}
/**
 * 隐藏错误消息框
 */
function closeMessageTip() {
    $('.validatebox-tip').css('display', 'none');
    $('.validatebox-invalid').removeClass('validatebox-invalid');
}


function isNumber(value, text) {
    if (!isNotEmpty(value, text)) {
        return false;
    }
    if (/^(0|[1-9]\d*)$|^(0|[1-9]\d*)\.(\d+)$/.test(value)) {
        return true;
    } else {
        alert(text + "必须为数字");
        return false;
    }
}
function isIntNumberOrNull(value, text) {
    if (!isNotEmpty_noAlert(value)) {
        return true;
    }
    if (/^(\d+)$/.test(value)) {
        return true;
    } else {
        alert(text + "必须为整数");
        return false;
    }
}
function isIntNumber(value, text) {
    if (isNotEmpty_noAlert(value)) {
        if (/^(\d+)$/.test(value)) {
            return true;
        } else {
            alert(text + '必须为整数');
            return false;
        }
    }
    return false;
}
function isNumberOrNull(value, text) {
    if (value == null || value == undefined || value.length == 0 || value == '') {
        return true;
    }
    if (/^(0|[1-9]\d*)$|^(0|[1-9]\d*)\.(\d+)$/.test(value)) {
        return true;
    } else {
        alert(text + "必须为数字");
        return false;
    }
}
function isNotEmpty(value, text) {
    if (value == null || value == undefined || value.length == 0 || value == '') {
        alert(text + "不能为空");
        return false;
    }
    return true;
}
function isNotEmpty_noAlert(value) {
    if (value == null || value == undefined || value.length == 0 || value == '') {
        return false;
    }
    return true;
}
function isEmpty_noAlert(value) {
    if (value == null || value == undefined || value.length == 0 || value == '') {
        return true;
    }
    return false;
}

// const API = "../";//正式打包用
export const API = "api/";
export const HEADER_FORM_URL = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
export const HEADER_JSON = {
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
};
export const YES_NO = [{
    value: true,
    label: '是'
}, {
    value: false,
    label: '否'
}];


export function commerror(err: any) {
    console.log('global_err', err);
    // if (result.responseText.indexOf("注册") > -1) {
    // 	window.location.href = "newindex/index.html?newReg=g";
    // } else if (result.responseText == "") {
    // 	alert("访问信息不正确，请稍后再试或重新登录！");
    // } else {
    // 	alert(result.responseText);
    // }
};

export function isvalid(row: any, column: any) {
    let value = row[column.property];
    if (value == null) return '';
    if (value == 1 || value == true) {
        return '启用';
    } else {
        return '禁用';
    }
}

export function isvalidAuditing(row: any, column: any) {
    let value = row[column.property];
    if (value == null) return '';
    if (value == 1 || value == true) {
        return '已认证';
    } else {
        return '未认证';
    }
}

export function formatterYesNo(row: any, column: any) {
    let value = row[column.property];
    if (value == null) return '';
    if (value == 1 || value == true) {
        return '是';
    } else {
        return '否';
    }
}

export function formatterDate(row: any, column: any, cellValue: any) {
    let value = cellValue;
    if (value != "" && value != undefined && value) {
        var date = new Date(value);
        return date.getFullYear() + '-' + pad(date.getMonth() + 1,2) + '-'
            + pad(date.getDate(),2);
    }
    else {
        return "";
    }
    return value;
}

export function formatDatePicker(value: any) {
    if (value != "" && value != undefined && value) {
        let date = new Date(value);
        return date.getFullYear() + '-' + pad((date.getMonth() + 1), 2) + '-'
            + pad(date.getDate(), 2);
    }
    else {
        return "";
    }
    return value;
}

export function formatDatetimePicker(value: any) {
    if (value != "" && value != undefined && value) {
        let date = new Date(value);
        return date.getFullYear() + '-' + pad((date.getMonth() + 1), 2) + '-'
            + pad(date.getDate(), 2) + " " + pad(date.getHours(),2) + ":" + pad(date.getMinutes(),2)
            + ":"+pad(date.getSeconds(),2);
    }
    else {
        return "";
    }
    return value;
}

export function pad(num: any, n: any) {
    let len = num.toString().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}

export function formatterYearMonth(row: any, column: any, cellValue: any) {
    let value = cellValue;
    if (value != "" && value != undefined && value) {
        var date = new Date(value);
        return date.getFullYear() + '-' + pad(date.getMonth() + 1,2);
    }
    else {
        return "";
    }
    return value;
}

export function formatYearMonthPicker(value: any) {
    if (value != "" && value != undefined && value) {
        let date = new Date(value);
        return date.getFullYear() + '-' + pad((date.getMonth() + 1), 2);
    }
    else {
        return "";
    }
    return value;
}

export function encode64(input: any){
    let keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv"
        + "wxyz0123456789+/" + "="
    let output = ""
    let chr1: any, chr2: any, chr3: any = ""
    let enc1: any, enc2: any, enc3: any, enc4: any = ""
    let i = 0
    do {
        chr1 = input.charCodeAt(i++)
        chr2 = input.charCodeAt(i++)
        chr3 = input.charCodeAt(i++)
        enc1 = chr1 >> 2
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
        enc4 = chr3 & 63
        if (isNaN(chr2)) {
            enc3 = enc4 = 64
        } else if (isNaN(chr3)) {
            enc4 = 64
        }
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2)
            + keyStr.charAt(enc3) + keyStr.charAt(enc4)
        chr1 = chr2 = chr3 = ""
        enc1 = enc2 = enc3 = enc4 = ""
    } while (i < input.length)
    return output
}


// export default {
//     API:API,
//     HEADER_FORM_URL,
//     HEADER_JSON,
//     YES_NO,
//     commerror,
//     pad,
//     isvalid,
//     isvalidAuditing,
//     formatterYesNo,
//     formatterDate,
//     formatDatePicker,
//     formatDatetimePicker,
//     formatterYearMonth,
//     formatYearMonthPicker,
//     encode64
// }

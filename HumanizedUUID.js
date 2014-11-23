$(function(){
    $('#HumanizedUid').html(HumanizedUid());
    $('#HumanizedUuid').html(HumanizedUuid());
});

function HumanizedUid(useStrings) {
    var date = new Date();
    var year = date.getUTCFullYear();
    var month = 1+date.getUTCMonth();
    month = ("00" + month).slice(-2);
    var day = date.getUTCDate();
    day = ("00" + day).slice(-2);
    var hours = date.getUTCHours();
    hours = ("00" + hours).slice(-2);
    var minutes = date.getUTCMinutes();
    minutes = ("00" + minutes).slice(-2);
    var seconds = date.getUTCSeconds();
    seconds = ("00" + seconds).slice(-2);
    var milliseconds = date.getUTCMilliseconds();
    milliseconds = ("0000" + milliseconds).slice(-4);
    var uuid = year;
    uuid += ''+month;
    uuid += ''+day;
    uuid += '-';
    uuid += ''+hours;
    uuid += ''+minutes;
    uuid += ''+seconds;
    uuid += '-';
    uuid += ''+milliseconds;
    return uuid;
}

function HumanizedUuid(useStrings) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var date = new Date();
    var year = date.getUTCFullYear();
    var month = 1+date.getUTCMonth();
    month = ("00" + month).slice(-2);
    var day = date.getUTCDate();
    day = ("00" + day).slice(-2);
    var hours = date.getUTCHours();
    hours = ("00" + hours).slice(-2);
    var minutes = date.getUTCMinutes();
    minutes = ("00" + minutes).slice(-2);
    var seconds = date.getUTCSeconds();
    seconds = ("00" + seconds).slice(-2);
    var milliseconds = date.getUTCMilliseconds();
    milliseconds = ("0000" + milliseconds).slice(-4);
    var uuid = year;
    uuid += ''+month;
    uuid += ''+day;
    uuid += '-';
    uuid += ''+hours;
    uuid += ''+minutes;
    uuid += '-'
    uuid += '10';
    uuid += ''+seconds;
    uuid += '-';
    uuid += ''+milliseconds;
    uuid += '-';
    uuid += ''+getRandomInt(111111111111,999999999999);
    return uuid;
}

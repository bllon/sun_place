export default {
    getTheme() {
        return localStorage.getItem("data-theme");
    },
    initTheme() {
        let theme = localStorage.getItem("data-theme");
        if (theme === "dark") {
            return this.changeThemeToDark();
        } else if (theme == null || theme === "light") {
            return this.changeThemeToLight();
        }
    },
    changeTheme() {
        let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
        if (theme === "dark") {
          return this.changeThemeToLight();
        } else {
          return this.changeThemeToDark();
        }
    },
    changeThemeToDark() {
        var style = document.getElementById("style-switch");
        style.setAttribute("href", "/static/css/style-dark.css");
        localStorage.setItem("data-theme", "dark"); // save theme to local storage
        return "dark";
    },
    changeThemeToLight() {
        var style = document.getElementById("style-switch");
        style.setAttribute("href", "/static/css/style.css");
        localStorage.setItem("data-theme", "light"); // save theme to local storage
        return "light";
    },
    showLogin() {
        var modalUserLogin = document.getElementById('modalUserLogin');
        console.log(modalUserLogin);
        const modal = new bootstrap.Modal(modalUserLogin)
        modal.show();
    },
    showRegister() {
        var modalUserLogin = document.getElementById('modalUserLogin');
        const modal = new bootstrap.Modal(modalUserLogin)
        modal.show();
    },
    getCookie(c_name) {
        if (document.cookie.length>0){
            let c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1){ 
                c_start=c_start + c_name.length+1 
                let c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                    return unescape(document.cookie.substring(c_start,c_end))
                } 
            }
        return ""
    },
    getUserName() {
        var token = this.getCookie('token');
        if(token == '') {
            return '';
        } else {
            var arr = token.split(".")
            if (arr.length < 3) {
                return '';
            }
            let userInfo = decodeURIComponent(escape(window.atob(arr[1].replace(/-/g, "+").replace(/_/g, "/"))));
            userInfo = JSON.parse(userInfo);
            return userInfo['user_name'] ? userInfo['user_name'] : '';
        }
    },
    isNull(str) {
        if (str == "") {
            return true;
        }
        var reg = "^[ ]+$"
        return new RegExp(reg).test(str);
    },
    timeago(date){  
        var dateTimeStamp = Date.parse(date)
        var result;
        var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
        var hour = minute * 60;
        var day = hour * 24;
        var week = day * 7;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date().getTime();   //获取当前时间毫秒
        // console.log(now)
        var diffValue = now - dateTimeStamp;//时间差
    
        if(diffValue < 0){
            return;
        }
        var minC = diffValue/minute;  //计算时间差的分，时，天，周，月
        var hourC = diffValue/hour;
        var dayC = diffValue/day;
        var weekC = diffValue/week;
        var monthC = diffValue/month;
        if(monthC >= 1 && monthC <= 3){
            result = " " + parseInt(monthC) + "月前"
        }else if(weekC >= 1 && weekC <= 3){
            result = " " + parseInt(weekC) + "周前"
        }else if(dayC >= 1 && dayC <= 6){
            result = " " + parseInt(dayC) + "天前"
        }else if(hourC >= 1 && hourC <= 23){
            result = " " + parseInt(hourC) + "小时前"
        }else if(minC >= 1 && minC <= 59){
            result =" " + parseInt(minC) + "分钟前"
        }else if(diffValue >= 0 && diffValue <= minute){
            result = "刚刚"
        }else {
            var datetime = new Date();
            datetime.setTime(dateTimeStamp);
            var Nyear = datetime.getFullYear();
            var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
            var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
            var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
            var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
            var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
            result = Nyear + "-" + Nmonth + "-" + Ndate
        }
        return result;
    }
}
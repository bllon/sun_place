export default {
    getTheme() {
        return localStorage.getItem("data-theme");
    },
    initTheme() {
        let theme = localStorage.getItem("data-theme");
        if (theme === "dark") {
            return this.changeTheme("dark");
        } else if (theme == null || theme === "light") {
            return this.changeTheme("light");
        }
    },
    changeTheme(to_theme = null) {
        if (to_theme == null) {
            let theme = localStorage.getItem("data-theme");
            if (theme === "dark") {
                to_theme = "light";
            } else {
                to_theme = "dark";
            }
        }

        var style = document.getElementById("style-switch");
        var href = style.getAttribute('href');
        if (to_theme === "dark" && href === "/static/css/style-dark.css") {
            return to_theme;
        }

        if (to_theme === "light" && href === "/static/css/style.css") {
            return to_theme;
        }

        if (to_theme === "dark") {
            style.setAttribute("href", "/static/css/style-dark.css");
        } else {
            style.setAttribute("href", "/static/css/style.css");
        }
        localStorage.setItem("data-theme", to_theme);
        return to_theme;
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
    delCookie: (c_name) => {
        var date=new Date()
        date.setSeconds(date.getSeconds()-1)
        document.cookie=c_name+ "="+escape("")+"; expires="+date.toGMTString()
    },
    getUserId() {
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
            return userInfo['user_id'] ? userInfo['user_id'] : '';
        }
    },
    getRefreshToken() {
        var token = this.getCookie('refresh_token');
        if(token == '') {
            return null;
        } else {
            var arr = token.split(".")
            if (arr.length < 3) {
                return null;
            }
            let userInfo = decodeURIComponent(escape(window.atob(arr[1].replace(/-/g, "+").replace(/_/g, "/"))));
            userInfo = JSON.parse(userInfo);
            return {token: token, exp: userInfo['exp'] ? userInfo['exp'] : 0};
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
        var dateTimeStamp
        if (typeof date == 'number') {
            dateTimeStamp = date
        } else {
            dateTimeStamp = Date.parse(date)
        }
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
        // console.log(result)
        return result;
    },
    toast(msg, text_style = 'warning', delay= 2000) {
        // var toast_html = '<div class="toast-header bg-light"><strong class="me-auto">提示</strong>' + 
        // '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div>' + 
        // '<div class="toast-body bg-light" class="text-danger">' + msg + '</div>'

        var toast_html = '<div class="d-flex"><div class="toast-body" style="color:#fff;letter-spacing:1px;font-weight:500;">' + msg 
        + '</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>'

        var toast=document.createElement('div');
        toast.innerHTML = toast_html
        toast.className = "toast align-items-center border-0 bg-" + text_style
        toast.style.position = 'fixed';
        toast.style.top = '50%';
        toast.style.left = '50%';
        toast.style.transform = 'translate(-50%,-50%)';
        toast.style.zIndex = '10000';
        toast.setAttribute('aria-atomic', true);
        toast.setAttribute('aria-data-bs-delay', delay);
        document.body.appendChild(toast)
        new bootstrap.Toast(toast).show()
        setTimeout(()=>{
            document.body.removeChild(toast)
        }, delay)
    }
}
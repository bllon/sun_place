export default {
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
    }
}
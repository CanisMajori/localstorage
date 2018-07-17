/**
 * Created by qux on 2018/7/17.
 */

window.onload=function () {
    login();
};
function login() {
    let storage=window.localStorage;

    let btn =document.getElementById("button");
    btn.onclick=function () {
        //获取账号和密码的值

        let username=document.querySelector("#username");
        let psd=document.querySelector("#psd");


        //验正账号密码是否符合格式
        //用户名：字母数字下划线6-12位，
        //密码：6-18位
        let usernameReg=/^[\w\d_\u4e00-\u9fa5]{6,12}$/i;//字母数字下划线 中文 6到12个
        let u= usernameReg.test(username.value);
        if(!u){
            username.focus();//聚焦到username
            return ;
        }
        if(psd.value.length<6||psd.value.length>18){
            psd.focus();//聚焦到密码框
            return ;
        }
        //将账号信息存储到storage里
        storage.setItem('username',username.value);
        storage.setItem('psd',psd.value);
        //在本页面打印消息
        document.querySelector("#box").innerHTML='恭喜登录成功';


    };
    window.addEventListener('storage',fn);
        function fn(){
           
        document.querySelector("#box").innerHTML='恭喜登录成功';
    }
}
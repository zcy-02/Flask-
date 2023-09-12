function bindEmailCaptchaClick(){
    $("#captcha-btn").click(function (event){
        // $this:代表的是当前按钮的jquery对象就是按钮中的文字
        var $this = $(this)
        //和这个按钮建立点击事件后为了阻止默认事件的发生比如点击获取验证码，但是把整个表单里的内容都提交了（就是实现了立即注册按钮的功能）
        event.preventDefault();

        var email = $("input[name='email']").val();
        $.ajax({
            url:"/auth/captcha/email?email="+email,
            method: "GET",
            success: function (result){
                var code = result['code'];
                if (code == 200){

                    alert("邮箱验证码发送成功！");
                }else{
                    alert(result['message']);
                }
            },
            fail: function (error){
                console.log(error);
            }
        })
        var countdown = 60;
                    // 开始倒计时之前就取消按钮的点击事件
                    $this.off("click");
                    var timer = setInterval(function (){
                        $this.text(countdown);
                        countdown -= 1;
                        if(countdown <= 0){
                            // 清除定时器
                            clearInterval(timer)
                            // 将按钮中的文字修改回来
                            $this.text("获取验证码");
                            //重新绑定点击事件
                            bindEmailCaptchaClick();
                        }
                    }, 1000);
    });

}


// $()函数是整个网页加载完成后在执行
$(function (){
    bindEmailCaptchaClick();
});
$(function () {
  var hock = true;
  $('.online-form .btn').click(function (){
    if(!hock) return;
    var _parent = $(this).parents('.online-form');
    var _user = _parent.find('input[name=name]').val();
    var _userPlace = _parent.find('input[name=name]').attr('placeholder');
    var _phone = _parent.find('input[name=tel]').val();
    var _phonePlace = _parent.find('input[name=tel]').attr('placeholder');
    var _message = _parent.find('textarea').val();
    var _messagePlace = _parent.find('textarea').attr('placeholder');
    var _code = _parent.find('input[name=captcha]').val();
    var _codePlace = _parent.find('input[name=captcha]').attr('placeholder');
    if(_user == '' || _user == _userPlace){
      layer.msg('请输入您的姓名');
      _parent.find('input[name=name]').focus();
    } else if(_phone == '' || _phone == _phonePlace ){
      layer.msg('请输入电话');
      _parent.find('input[name=mobile]').focus();
    } else if (/^[1][0-9]{10}$/.test(_phone) == false &&/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(_phone)==false){
      layer.msg('请输入正确的电话号码,区号与电话号之间用 - 链接');
      _parent.find('input[name=mobile]').focus();
    } else if(_code == '' || _codePlace == _code){
      layer.msg('请输入验证码');
      _parent.find('input[name=captcha]').focus();
    } else if(_message == '' || _message == _messagePlace){
      layer.msg('留言内容不能为空');
      _parent.find('textarea').focus();
    } else {
      hock = false;
      var option = {
        url: '/index/message/addMessage',
        type : 'POST',
        dataType : 'json',
        success : function(data) {
          hock = true;
          if(data.code == 2012){
            layer.open({
              title:'提交成功',
              content: '您的留言已提交，谢谢您的反馈！',
              scrollbar: false,
              area: ['524px', '190px']
            });
            $('#onlineForm')[0].reset();  // 提交成功重置
            $('#verifyImg').click();
          } else if(data.code == 4013){
            layer.msg(data.msg);
            $('#verifyImg').click();
          } else {
            layer.msg(data.msg);
          }
        },
        fail:function (res){
          hock = true;
          layer.msg(res.msg);
        }
      }
      $('#onlineForm').ajaxSubmit(option);
    }
  });
  // 友情链接
  $('body').on('click','.link-more',function (){
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $(this).html('展开');
      $('.link-list').removeClass('active');
    } else {
      $(this).addClass('on');
      $(this).html('收起');
      $('.link-list').addClass('active');
    }
  });
});

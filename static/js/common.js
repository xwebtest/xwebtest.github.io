$('.nav-bar li').click(function () {
  var _index = $(this).index();
  switch (_index) {
    case 0:
      window.location.href = 'index.html';
      break;
    case 1:
      window.location.href = 'about.html';
      break;
    case 2:
      window.location.href = 'product.html';
      break;
    case 3:
      window.location.href = 'news.html';
      break;
    case 4:
      window.location.href = 'honor.html';
      break;
    case 5:
      window.location.href = 'job.html';
      break;
    case 6:
      window.location.href = 'message.html';
      break;
    case 7:
      window.location.href = 'contact.html';
      break;
  }
})
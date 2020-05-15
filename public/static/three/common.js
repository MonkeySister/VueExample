// 适配 设置根字体
(function () {
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var clientWidth = document.body.clientWidth;
    // var clientWidth = window.screen.availWidth;
    if (!clientWidth) {
      return;
    }
    document.documentElement.style.fontSize = 100 * (clientWidth / 3206) + 'px';
    // document.documentElement.style.visibility = 'visible';
    // console.log(clientWidth, 100 * (clientWidth / 3206));
  };
  if (!document.documentElement.addEventListener) {
    return;
  }
  window.addEventListener(resizeEvt, recalc, false);
  window.addEventListener('DOMContentLoaded', recalc, false);
})();
var version = navigator.userAgent;

if (version.indexOf("Windows NT 6.1") != -1 && version.indexOf("Chrome") == -1) {
  console.log("win7 IE");
  document.write(
    "<style type='text/css'>" +
    ".index-right-container{transform: none !important;}" +
    ".index-left-container{transform: none !important;}}" +
    "</style>");
}

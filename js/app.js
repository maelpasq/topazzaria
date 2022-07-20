window.onscroll = function () {
  if(document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").className = "scroll-active";
  } else {
    document.getElementById("navbar").className = "";
  }
}

function CloseModal() {
  document.getElementById('modal').style.display = 'none';
}

function isMobileDevice() { 
  if( navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    function DeviceMobile() {
      document.getElementById('page').style.display = 'none';
    }
  } else {
    function DeviceMobile() {
      document.getElementById('page').style.display = 'flex';
    }
  }
}
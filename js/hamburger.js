window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
  
    // ハンバーガーアイコンをクリックしたら
    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
  }
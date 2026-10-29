(function(){
  var h=document.querySelector('.siteheader'),b=document.querySelector('.nav-toggle');
  if(b&&h){b.addEventListener('click',function(){
    var o=h.classList.toggle('nav-open');
    b.setAttribute('aria-expanded',o?'true':'false');
    b.setAttribute('aria-label',o?'Close menu':'Open menu');
  });}
  var f=document.querySelector('.floatcall'),ft=document.querySelector('.sitefooter');
  if(f&&ft&&'IntersectionObserver' in window){
    new IntersectionObserver(function(e){f.classList.toggle('hide',e[0].isIntersecting);},{threshold:0.05}).observe(ft);
  }
})();


var LOL = {
   langIndex:function() {
    var langue = ['한국어', 'にほんご', 'le français', 'Русский', '漢語'];
    var langfolder = ['02KR', '03JA', '01FR', '04RU', '05ZH'];
    var langcode = ['02KRkr', '03JA', '01FR', '04RU', '05ZH'];
    var langcolor = ['558BCF', 'DE7C68', '0055A4', 'FC80A5', '99001C'];
    var i = 0;
    while(i < langue.length) {
      document.write('<li><a href="./'+langfolder[i]+'/'+langcode[i]+'.html" style="color:#'+langcolor[i]+'">'+langue[i]+'</a></li>');
      i = i + 1;
    }
  }, langUnder:function() {
    var langue = ['한국어', 'にほんご', 'le français', 'Русский', '漢語'];
    var langcode = ['02KRkr', '03JA', '01FR', '04RU', '05ZH'];
    var langcolor = ['558BCF', 'DE7C68', '0055A4', 'FC80A5', '99001C'];
    var i = 0;
    while(i < langue.length) {
      document.write('<li><a href="../'+langcode[i]+'/'+langcode[i]+'.html" style="color:#'+langcolor[i]+'">'+langue[i]+'</a></li>');
      i = i + 1;
    }
  }, langIndexKR:function() {
   var langue = ['한국어', '일본어', '프랑스어'];
   var langcode = ['02KR', '03JA', '01FR'];
   var langcolor = ['558BCF', 'DE7C68', '0055A4'];
   var i = 0;
   while(i < langue.length) {
     document.write('<li><a href="./'+langcode[i]+'/'+langcode[i]+'kr.html" style="color:#'+langcolor[i]+'">'+langue[i]+'</a></li>');
     i = i + 1;
   }
 }, langUnderKR:function() {
  var langue = ['한국어', '일본어', '프랑스어'];
  var langcode = ['02KR', '03JA', '01FR'];
  var langcolor = ['558BCF', 'DE7C68', '0055A4'];
  var i = 0;
  while(i < langue.length) {
    document.write('<li><a href="../'+langcode[i]+'/'+langcode[i]+'kr.html" style="color:#'+langcolor[i]+'">'+langue[i]+'</a></li>');
    i = i + 1;
  }
}
}


function listMaker(name, link) {
  var i = 0;
  while(i < name.length) {
    document.write('<li class="libyli""><a href="'+link[i]+'.html">'+name[i]+'</a></li>');
    i = i + 1;
  }
}

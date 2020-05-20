function isDarkMode() {
  return Cookies.get('darkmode');
}
Cookies.set('darkmode', 'Dark');

function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
		{
		return unescape(y);
		}
	  }
}
// 출처: https://csslab.tistory.com/51 [learning DEV :D ]

var ID = {
  setColor:function(selector, c) {
    document.querySelector(selector).style.color = c;
  }, resetColor:function(selector, c) {
    document.querySelector(selector).style.color = c;
  }
}

var Strong = {
  setColor:function(selector, color) {
    $(selector).css('color', color);
  }, resetColor:function(selector, color) {
    $(selector).css('color', color);
  }
}

var Table = {
  setColor:function() {
  $('.tableW').css('color', '#343434');
}, resetColor:function() {
  $('.tableW').css('color', '#f5f5f5');
  }
}

var Body = {
  setColor:function(color){
    $('body').css('color', color);
  }, setBackgroundColor:function(color){
    $('body').css('background-color', color);
  }
}

var Button = {
  setColor:function (color) {
    $('input').css('color', color);
  },
  setBackgroundColor:function (color) {
    $('input').css('background-color', color);
  }
}

function darklight(self) {
  if(self.value === 'Dark'){
    Cookies.set('darkmode', 'Light');
    Body.setColor('white');
    Body.setBackgroundColor('#353839');//body 컬러 변경
    Button.setBackgroundColor('#f5f5f5');
    Button.setColor('#343434');//button 변경
    Strong.setColor('h1','#f5f5f5');
    Strong.setColor('.strongfr, h3', 'powderblue');
    Strong.setColor('.titlelinks', '#e86b79');
    ID.setColor('#subTitle', '#f5f5f5');
    Strong.setColor('small', '#f5f5f5');
    Table.setColor();
    $('#darknight').val('Light');
  } else {
    Cookies.set('darkmode', 'Dark');
    Body.setColor('black');
    Body.setBackgroundColor('white');//body 컬러 변경
    Button.setBackgroundColor('#353839');
    Button.setColor('#f5f5f5');//button 변경
    self.value = 'Dark';//name 변경
    Strong.resetColor('h1','#5B92E4');
    Strong.resetColor('.strongfr, h3', '#33539e');
    Strong.resetColor('.titlelinks', '#8A3A39');
    Strong.resetColor('small', '#504e48');
    Table.resetColor();
    ID.resetColor('#subTitle', '#353839');
    $('#darknight').val('Dark');
    makeCookie('Dark');
  }
}

function DM() {
  document.write('<input id="darknight" type="button" value="Dark" onclick=" this.value = isDarkMode(); darklight(this); ">');
}

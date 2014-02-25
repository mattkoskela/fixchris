function fix_name() {
  $("span[email='chriswillmorris@gmail.com']").text("Chris Morris");
}
jQuery(window).load(function () {
  for (var i=0;i<6;i++) {
    setTimeout(fix_name, i*1000);
  }
});
$(window).on('hashchange',function(){ 
  fix_name();
});

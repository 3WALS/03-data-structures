var temp = function() {
  var a = 1; var ttemp = function() {
    console.log(a);
    var a=0;
  }
  ttemp();
}

temp();

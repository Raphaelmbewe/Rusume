var p = document.getElementById('name');
p.innerHTML = '';
var n = 0;

var str = "Hello, I'm Raphael";
var typeTimer = setInterval(function() {
  n = n + 1;
  p.innerHTML = " " + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = " " + str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        p.innerHTML = " " + str + "|"
        n = 1;
      } else {
        p.innerHTML = " " + str
        n = 0;
      };
    }, 1000);
  };
}, 200)
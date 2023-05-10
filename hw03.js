document.write('<p>과제3번</p> ')

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5 - i; j++) {
      document.write("&nbsp;");
    }
    for (var k = 1; k <= i; k++) {
      document.write("*");
    }
    document.write("<br>");
  }


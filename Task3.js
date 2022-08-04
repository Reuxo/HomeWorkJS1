var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.getAttribute("class") == "panelVisible") {
      panel.setAttribute("class", "panelInvisible");
    } else {
      panel.setAttribute("class", "panelVisible");
    }
    var id = panel.getAttribute("id");
    for (let j = 0; j < acc.length; j++) {
      let str = "p" + (j + 1);
      if (str != id) {
        document.getElementById(str).setAttribute("class", "panelInvisible");
      }
    }
  });
}

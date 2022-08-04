for (let i of Array.from(document.getElementsByTagName("a"))) {
  if (i.href.indexOf("http") == 0) {
    i.style.borderBottom = "dashed";
    i.style.borderWidth = "1 px";
  }
}

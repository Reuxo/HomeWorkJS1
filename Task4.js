{
  let newsArray = new Array();
  for (let i = 0; i < 30; i++) {
    let div = document.createElement("div");
    let header = document.createElement("p");
    header.setAttribute("class", "header");
    header.innerHTML = "Новость " + (i + 5 + 1);
    div.appendChild(header);
    let text = document.createElement("p");
    text.setAttribute("class", "text");
    text.innerHTML =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, corporis eaque, quos, id dolores sunt ratione quaerat illum at quidem inventore odio officiis magni aspernatur eveniet aperiam debitis minus modi";
    div.appendChild(text);
    newsArray.push(div);
  }

  let counter = 0;

  function checkPos() {
    var height = document.getElementById("container").offsetHeight;
    var scrHeight = window.innerHeight;
    var scrolled = window.scrollY;
    var thresHold = height - scrHeight / 10;
    var position = scrolled + scrHeight;
    if (position >= thresHold && counter < newsArray.length) {
      for (let i = 0; i < 3; i++) {
        document.getElementById("container").appendChild(newsArray[counter]);
        counter++;
      }
    }
  }

  (() => {
    window.addEventListener("scroll", checkPos);
    window.addEventListener("resize", checkPos);
  })();
}

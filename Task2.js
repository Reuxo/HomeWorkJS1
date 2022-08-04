{
  function getImages(n) {
    for (var image, array = [], i = 1; i <= n; i++) {
      image = new Image();
      image.src = "img/mount" + i + ".jpg";
      array.push(image);
    }
    return array;
  }

  let forward = document.getElementById("forward");
  let back = document.getElementById("back");
  let picsArray = getImages(5);
  let i = 1;
  let img = document.getElementById("img");
  forward.addEventListener("click", (e) => {
    if (i < 5) {
      i++;
      img.setAttribute("src", "img/mount" + i + ".jpg");
      console.log(i);
    } else {
      forward.setAttribute("disabled", "disabled");
    }
    back.removeAttribute("disabled");
  });
  back.addEventListener("click", (e) => {
    if (i > 1) {
      i--;
      img.setAttribute("src", "img/mount" + i + ".jpg");
      console.log(i);
    } else {
      back.setAttribute("disabled", "disabled");
    }
    forward.removeAttribute("disabled");
  });
}

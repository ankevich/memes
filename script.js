function answerMeme() {
  console.log("1");
  const imgs = document.getElementsByTagName("img");
  for (let img of imgs) {
    img.style.display = "none";
  }
  let visibleIdx = Math.floor(0 + Math.random() * imgs.length);
  for (let i = 0; i < imgs.length; i++) {
    if (i == visibleIdx) imgs[i].style.display = "inline-block";
  }
}

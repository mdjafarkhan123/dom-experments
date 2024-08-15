let thumbs = document.getElementById("thumbs");
let previewImg = document.querySelector(".preview img");

thumbs.addEventListener("click", imgGallery);
function imgGallery(event) {
    let imgSource = event.target.getAttribute("src");
    previewImg.src = imgSource;
    event.preventDefault();
}

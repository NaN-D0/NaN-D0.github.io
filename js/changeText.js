// change text of description box on hover of image

const text = document.getElementById("text");
var images = document.getElementsByClassName('image')
var gallery = Array.from(images)

change = (imageArray) => {
  for (let i = 0; i < imageArray.length; i++) {
    imageArray[i].onmouseover = () => {
      text.textContent = imageArray[i].dataset.text
    };

    imageArray[i].onmouseout = () => {
      text.textContent = "";
      text.insertAdjacentHTML(
        "afterbegin",
        '<a id="homeLink" href="../index.html">[...]</a>'
      );
    };
  }
};

change(gallery);

// photoswipe
// spread image array into items array with their source, width, height
// create array made up of objects where each object is an images src, w, h from gallery

/*
var img12 = document.getElementById('img12')
var sss = parseInt(img12.style.width)
console.log(img12.style.width)

openPhotoSwipe = () => {
  var pswpElement = document.querySelectorAll('.pswp')[0]

  var items = [
    {
      src: '../assets/gallery/swords.jpg',
      w: sss,
      h: 1000
    },
    {
      src: '../assets/gallery/nicehat.jpg',
      w: sss,
      h: 1000
    }
  ]

  var options = {
    index: 0
  }

  var pswpGallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
  pswpGallery.init()
}

var img = document.getElementById('img3')
img.onclick = openPhotoSwipe

//gallery.forEach(onclick = openPhotoSwipe)

*/
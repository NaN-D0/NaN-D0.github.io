// change text of description box on hover of image

const descriptions = document.getElementById("descriptions");
const text = document.getElementById("text");

const image1 = document.querySelector("#img1");
const image2 = document.querySelector("#img2");
const image3 = document.querySelector("#img3");
const image4 = document.querySelector("#img4");
const image5 = document.querySelector("#img5");
const image6 = document.querySelector("#img6");
const image7 = document.querySelector("#img7");
const image8 = document.querySelector("#img8");
const image9 = document.querySelector("#img9");
const image10 = document.querySelector("#img10");

var gallery = [
  [image1, image1.dataset.text],
  [image2, image2.dataset.text],
  [image3, image3.dataset.text],
  [image4, image4.dataset.text],
  [image5, image5.dataset.text],
  [image6, image6.dataset.text],
  [image7, image7.dataset.text],
  [image8, image8.dataset.text],
  [image9, image9.dataset.text],
  [image10, image10.dataset.text],
];

var change = (imageArray) => {
  for (let i = 0; i < imageArray.length; i++) {
    imageArray[i][0].onmouseover = (image) => {
      text.textContent = imageArray[i][1];
    };

    imageArray[i][0].onmouseout = (image) => {
      text.textContent = "";
      text.insertAdjacentHTML(
        "afterbegin",
        '<a id="homeLink" href="../index.html">[...]</a>'
      );
    };
  }
};

change(gallery);

// change text of description box on hover of image

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
const image11 = document.querySelector("#img11");
const image12 = document.querySelector("#img12");
const image13 = document.querySelector("#img13");

var gallery = [
  image1, image2, image3,
  image4, image5, image6, 
  image7, image8, image9, 
  image10, image11, image12, 
  image13
              ]

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

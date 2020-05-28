let i = 0; //start punt van slideshow
let images = [];

//array met images voor boscross boekje
images[0] = 'PortfolioItems/BoscrossBoekje.png';
images[1] = 'PortfolioItems/BoscrossBoekje2.png';
images[2] = 'PortfolioItems/BoscrossBoekje3.png';
images[3] = 'PortfolioItems/BoscrossBoekje4.png';
images[4] = 'PortfolioItems/BoscrossBoekje5.png';
images[5] = 'PortfolioItems/BoscrossBoekje6.png';
images[6] = 'PortfolioItems/BoscrossBoekje7.png';
images[7] = 'PortfolioItems/BoscrossBoekje8.png';
images[8] = 'PortfolioItems/BoscrossBoekje9.png';
images[9] = 'PortfolioItems/BoscrossBoekje10.png';
images[10] = 'PortfolioItems/BoscrossBoekje11.png';
images[11] = 'PortfolioItems/BoscrossBoekje12.png';
images[12] = 'PortfolioItems/BoscrossBoekje13.png';
images[13] = 'PortfolioItems/BoscrossBoekje14.png';
images[14] = 'PortfolioItems/BoscrossBoekje15.png';

function changeImgPrev() {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  document.getElementById('slide').src = images[i];
  console.log(i);
}

function changeImgNext() {
  i++
  if (i > images.length - 1) {
    i = 0;
  }
  document.getElementById('slide').src = images[i];
  console.log(i);
}

//Event listeners
document.getElementById('prev').addEventListener("click", changeImgPrev);
document.getElementById('next').addEventListener("click", changeImgNext);
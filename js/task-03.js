const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector(".gallery");

const elements = images.map(image => {
  
  return `<li><img src="${image.url}" alt="${image.alt}" class="img" border = "20" border-radius = "10" height = "720"></li>`
  
}).join();

galleryRef.style.display = "flex";
galleryRef.style.columnGap = "20px";
galleryRef.style.listStyle = "none";
galleryRef.style.alignItems = "center"
const imgRef = document.querySelector(".img");
console.log(galleryRef)
console.log(elements);
console.log(imgRef);
galleryRef.insertAdjacentHTML("beforeend", elements);

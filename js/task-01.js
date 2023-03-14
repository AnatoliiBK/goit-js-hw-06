const categoryNum = document.querySelectorAll(".item");
console.log(categoryNum);
console.log(`Numbers of categories: ${categoryNum.length}`);
categoryNum.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`)
} );

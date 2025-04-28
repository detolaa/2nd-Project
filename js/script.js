// script.js
const buttontext = document.getElementById("View");
buttontext.addEventListener("click" , function(){
buttontext.textContent="Recipes Opened"
});

const ellipse= document.getElementById("ellipse");
ellipse.addEventListener("mouseenter" , function(){
    ellipse.style.transform = "scale(5)";
});
ellipse.addEventListener("mouseleave" , function(){
    ellipse.style.transform ="scale(1)";
})
/* let categoriesDate = { 
    fruits: ['Apple','banna','orange'],
    colors:['blue','yellow','green'],
    animals:['cat','dog','bat']
}; */
function showcategories() {
    document.getElementById('categories').innerHTML = `
      <button onclick="showItems('fruits')">Fruits</button>
      <button onclick="showItems('colors')">Colors</button>
      <button onclick="showItems('animals')">Animals</button>
    `;
  }
  
  function showItems(category) {
    let items = '';
  
    if (category === 'fruits') {
      items = '<ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>';
    } else if (category === 'colors') {
      items = '<ul><li>Red</li><li>Blue</li><li>Green</li></ul>';
    } else if (category === 'animals') {
      items = '<ul><li>Dog</li><li>Cat</li><li>Elephant</li></ul>';
    }
  
    document.getElementById('items').innerHTML = items;
  }

  
  window.onload = function() {
    const circleImages = document.querySelectorAll('.circle .image');
    const radius = 150;  // Distance from the center (chef image)

    circleImages.forEach((image, index) => {
        const angle = (index * 360) / circleImages.length; // Angle for each image

        // Convert angle to radians
        const rad = angle * (Math.PI / 180);

        // Calculate position of the image around the circle
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        // Apply position using transform
        image.style.position = 'absolute';
        image.style.left = `calc(50% + ${x}px)`;
        image.style.top = `calc(50% + ${y}px)`;
    });
};

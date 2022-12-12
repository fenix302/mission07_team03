setInterval(createSnow, 100);
 
function createSnow() {
   const snow = document.createElement('i');
   snow.classList.add('fas');
   snow.classList.add('fa-snowflake');
   snow.style.left = Math.random() * window.innerWidth + 'px';
   snow.style.animationDirection = Math.random() * 3 + 2 + 's';
   snow.style.opacity = Math.random();
   snow.style.fontSize = Math.random() * 20 + 5 + 'px';
 
   document.body.appendChild(snow);
 
   setTimeout(() => {
      snow.remove();
   }, 4000);
}
 
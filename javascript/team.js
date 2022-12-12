//눈이 생성되는 시간. 줄일수록 내리는 눈의 양이 많아짐.
setInterval(createSnow, 50);  
 
//눈 생성 함수
function createSnow() {
   const snow = document.createElement('i');
   snow.classList.add('fas');
   snow.classList.add('fa-snowflake');
   snow.style.left = Math.random() * window.innerWidth + 'px';
   snow.style.animationDirection = Math.random() * 3 + 2 + 's';
   snow.style.opacity = Math.random(); //눈의 선명도 랜덤화
   snow.style.fontSize = Math.random() * 20 + 5 + 'px'; //눈의 사이즈 조절
 
   document.body.appendChild(snow);
 
//눈이 제거되는 시간 조절
   setTimeout(() => {
      snow.remove();
   }, 5000);
}
 
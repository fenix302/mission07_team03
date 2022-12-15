// 클릭햇을때 숨겨진 컨텐츠가 나오게 만드는 자바스크립트
const t = document.querySelector('.click');
t.addEventListener('click', function(){
        //id = "hidden"인 요소을 찾아 변수 c에 대입
        let c = document.getElementById("hidden")
        let v = c.style.display
        // if문을 사용해 display가 none일때 클릭하면 block으로 바꾸어 드러나도록 만들고 block일땐 none으로 바꾸도록 설정함.
        if(v == "none"){
            c.style.display = "block"
        } else{
            c.style.display = "none"
        }
    });


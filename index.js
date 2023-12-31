var numberOfDrumButton= document.querySelectorAll(".drum").length;

for (var i=0;i<numberOfDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function() {
       var innerText=this.innerHTML;
       makeSound(innerText);
       buttonAnimated(innerText);
    
    })

   document.addEventListener("keydown",function (e){
    makeSound(e.key);
    buttonAnimated(e.key);
    })
}

function makeSound(innerText){
    switch(innerText){
        case 'w':
            var tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
       
       case 'a':
            var tom2 =new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
       
       case 's':
            var tom3 =new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
       
       case 'd':
            var tom4 =new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
       
       case 'j':
            var crash =new Audio("sounds/crash.mp3");
            crash.play();
            break;
       
       case 'k':
            var bass =new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
       
       case 'l':
            var snare =new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default :
            console.log("Something went wrong")
       }


}

function buttonAnimated(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () {activeButton.classList.remove("pressed");},100);
}
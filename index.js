
function handleClick(){
 
  // var audio = new Audio("sounds/tom-1.mp3");
   //audio.play();
  var myData = this.classList.value;
  keyPressed(myData)

  console.log(this.classList.value)
}

var btn = document.querySelectorAll('.div').length;

for(var i =0; i<btn; i++){
    document.querySelectorAll('.div')[i].addEventListener("click",handleClick);

  

}

//var tiger = document.querySelectorAll('.div ')[0].addEventListener("click",handleClick);
//console.log(tiger)

function keyPressed(key){
    switch(key){
        case "t div":
            var tig = new Audio("sounds/tiger.mp3");
            tig.play();
            break;

            case "d div":
                var dog = new Audio("sounds/dog.mp3");
                dog.play();
                break;

                case "c div":
                var cat = new Audio("sounds/cat.mp3");
                cat.play();
                break;

                case "g div":
                var goat = new Audio("sounds/goat.mp3");
                goat.play();
                break;

                case "e div":
                var el = new Audio("sounds/elephant.mp3");
                el.play();
                break;
    }

    
}
document.querySelector('img').addEventListener("click",function(){
    if(this.style.borderColor==="blue"){
        console.log("pressed_blue");
        this.style.border="solid 5px brown";
    }
    else{
        console.log("pressed_brown");
        this.style.border="solid 5px blue";
    }
})
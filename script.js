const container = document.querySelector(".slider")

let btn_l= document.querySelector(".btn-left") 
let btn_r = document.querySelector(".btn-right") 
const ImageList = ["ph-2","ph-3","ph-4"]
let index =2;
btn_l.addEventListener("click",function(){
    console.log("left")
    if(btn_l.classList.contains("btn-left")){
        --index;
        console.log(index)
    
    if(index<=0){
        index = ImageList.length
    }
}
})
btn_r.addEventListener("click",function(){
    if(btn_r.classList.contains("btn-right")){
        index++;
        console.log(index)
    
    if(index<Image.length){
        index = 0
    }
    container.style.background = ' background: url(/images/ph-${ImageList[index]}.jpg) center/cover fixed no-repeat '
}
})

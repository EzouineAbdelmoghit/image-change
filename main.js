let btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var btn3=document.getElementById("btn3")
let imgBox=document.querySelector(".img-box")


// function changeImage(srci) {
//     console.log(srci)
//     imgBox.src = srci
// }
function Imagechanger(){
    // console.log(this.attributes.src.value)
    imgBox.style.backgroundImage="url('"+this.attributes.src.value+"')"
}
// btn1.onclick=function(){
//     console.log(this.attributes.src.value)
//     // imgBox.style.backgroundImage="url('./images/télécharger (1).jpg')"
//     imgBox.style.backgroundImage="url('"+this.attributes.src.value+"')"
// }
// btn2.onclick=function(){
//     imgBox.style.backgroundImage="url('./images/télécharger (2).jpg')"
// }
// btn3.onclick=function(){
//     imgBox.style.backgroundImage='url("./images/télécharger.jpg")'
// }
btn1.onclick=Imagechanger;
btn2.onclick=Imagechanger;
btn3.onclick=Imagechanger;
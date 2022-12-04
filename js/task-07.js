const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener("input", changeFontSize); 

function changeFontSize() {
    let val = fontSizeControl.value;
    text.style.fontSize = val + "px";
 
}



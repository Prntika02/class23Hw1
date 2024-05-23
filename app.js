let parent = document.querySelector("#parent");
let child = document.querySelector(".child");
let scroll = document.querySelector(".scroll");


window.addEventListener(`scroll`, function(){
    let height = document.documentElement.scrollHeight;
    let clientheight = document.documentElement.clientHeight;
    let fromtop = document.documentElement.scrollTop;
    let subheight = height - clientheight;
    let result = Math.round(fromtop * 100 / subheight);
    parent.style.background = `conic-gradient(#9980FA ${result}% , #5758BB ${result}%)` ; 
    child.innerHTML = result;
    
})

window.addEventListener(`scroll`, function(){
    let height = document.documentElement.scrollHeight;
    let clientheight = document.documentElement.clientHeight;
    let fromtop = document.documentElement.scrollTop;
    let subheight = height - clientheight;
    let result = Math.round(fromtop * 100 / subheight);
    scroll.style.width = `${result}%`;
    console.log(result);
})
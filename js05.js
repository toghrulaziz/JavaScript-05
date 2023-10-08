let positions = {
    "div1": { top: 100, left: 200 }, 
    "div2": { top: 100, left: 450 }, 
    "div3": { top: 100, left: 700 }
};

const moveDiv = (name, targetX, targetY) => {

    let top = parseInt(document.getElementById(name).style.top) || positions[name].top;
    let left = parseInt(document.getElementById(name).style.left) || positions[name].left;

    if (top < targetY) 
        top++;
    else if (top > targetY) 
        top--;    

    if (left < targetX) 
        left++;
    else if (left > targetX) 
        left--;    

    document.getElementById(name).style.top = top + "px";
    document.getElementById(name).style.left = left + "px";

    if (top !== targetY || left !== targetX) 
        setTimeout(() => moveDiv(name, targetX, targetY), 5);
    
}

document.addEventListener("mousedown", function(event) {
    var x = event.clientX;
    var y = event.clientY;

    switch (event.button) {
        case 0: 
            moveDiv("div1", x, y);
            break;
        case 1: 
            event.preventDefault();
            moveDiv("div2", x, y); 
            break;         
        case 2: 
            event.preventDefault();
            moveDiv("div3", x, y);
            break;
    }       
    window.oncontextmenu = ()=> false;
});


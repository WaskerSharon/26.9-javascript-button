// get the current visible element


// get the hidden element

// hide the visible 

// show the hidden element


// function func(){

//     document.querySelector(".A").classList.toggle('hide')
//     document.querySelector(".B").classList.toggle('hide')

// }

function toggle(selector) {
    var items = document.querySelectorAll(selector);
    for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle('hide');
    }
}
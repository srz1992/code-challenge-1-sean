console.log('js');

let counter = 0;
let swapped = false;


$(document).ready(onReady)

function onReady() {
    console.log('jq');
    $('#generator').on('click', addDiv)
}

function addDiv(){
    counter++;
    console.log('adding div');
    console.log(counter);
    
    //I made a stylistic choice not to make the divs go to the end of the screen in my css file.
    let colorDiv = `<div class="colorDiv">
                    <p>${counter}<p>
                    <button class="swapButton">Swap Color</button>
                    <button class="deleteButton">Delete</button>
                    </div>`
    $('#appendHere').append(colorDiv)
    $('.swapButton').on('click', swapColor)
    $('.deleteButton').on('click', removeDiv)
}

//I can toggle all of them but odd-numbered divs will only toggle after I toggle and even-numbered div.
function swapColor(){
    if (swapped == false){
        $(this).closest('div').css('background-color','yellow');
        swapped = true;
    }
    else {
        console.log(swapped);
        $(this).closest('div').css('background-color','');
        swapped = false;
    }
console.log(this.closest('div').classList.contains("colorDiv"));
}


// only every other div will toggle for some reason
// function swapColor(){
//     // let element = $(this).closest('div');
//     // element.toggleClass("yellowDiv");

//     if (this.closest('div').classList.contains("yellowDiv")){
//         console.log(swapped);
//         $(this).closest('div').removeClass('yellowDiv');
//     }
//     else {
//         console.log(swapped);
//         $(this).closest('div').addClass('yellowDiv')
//     }
// console.log(this.closest('div').classList.contains("colorDiv"));


//     // $(this).closest('.colorDiv').toggleClass("yellowDiv");
//     // console.log(this);
// }

function removeDiv(){
    $(this).closest('div').remove();
    console.log('this works');
    
}
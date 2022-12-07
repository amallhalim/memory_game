let name_field = document.querySelector(".info_container .name");
// let main_container = document.querySelector(".game_cont");

let control_buttons = document.querySelector(".control_buttons");

name_field.innerHTML= " ";
// enter your name
// that function work only when click on button in span
document.querySelector(".control_buttons span").onclick = function () {
    
    let yourname = prompt("what your name ?")
    // console.log(yourname)

    if (yourname == null || yourname == " ") {

        name_field.innerHTML= "unknown";

    } else {

        name_field.innerHTML= yourname;
    
    }
    control_buttons.remove();
    // remove the background that cover the content======

}

//
// my time to retu rn the card
let duration = 1000;

// select  container of all element 
let game_container =document.querySelector(".game_cont")

// let game_block =document.querySelectorAll(".game_blo")
//Array.from()  >>>> take any thing and >>>>convert it to array
let blocks = Array.from(game_container.children)
// array of index are from 0>>>19 because we have 20 elements.
// i need all card to be together in array to easy used it  is and iteretete over it

array_length = blocks.length;
//  we  can use order attributes  to rearrange element 
// let z =[Array(array_length)];
// console.log(z)
// let x =[Array(array_length).keys()];
// console.log(x)
 
// keys of array is an indexof it
// ...    >>> are use to extract all   this data in the array
// console.log(...Array(array_length).keys())
// Array(10) ----meaning create a array 
// let orderRange =[...Array(array_length).keys()];
    let orderRange =Array.from(Array(array_length).keys());
    // orderRange==are the range of number that i want to change order of item from it
// console.log(q)

/////
// console.log(orderRange)  
shuffle(orderRange)
// console.log(orderRange)
////


// add order css property to blocks &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// index  >>> in for each are built in the foreach function
//  referer to  your index in its array
// i can loppin in my element and its index  
blocks.forEach((block,index)=>{
    // console.log(index)
    // console.log(block)

// add css order property
block.style.order =orderRange[index]; 

// add click event
block.addEventListener('click',function () {
    // trigger the flip block function
    flip(block)
    
})    
})


// shuffle function  to make random number&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7

function shuffle(array) 
{
    let current = array.length;
    let temp,random;

    while (current > 0) 
    {
        //get random number
        random = Math.floor (Math.random()*current);

        // decrease length by one 
        current--;
        // console.log(random)
    ////&&&&&&&&&&&&&& make swap   &&&&&&&&&&&&&&&&&&&&&&&&&&&
        // 1---save current element in stash{temp}-------
        // meaning that is last element in my array 
        temp= array[current]; 

        //---current element = random element  ------
        array[current] = array[random]

        // 3---random element = get element from stash  ------
        array[random] =temp;  
    }
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 

////&&&&&&&&&&&&&& flip function  &&&&&&&&&&&&&&&&&&&&&&&&&&&
function flip(selectedblock ) {

    // add class is flipped
    selectedblock.classList.add("is_flipped");

    //filter function==>> return anew array that match the condition
    // collect all flipped cards
    let allflipedblock =
    blocks.filter(flip => flip.classList.contains("is_flipped"));
    // check for all blocks have a flipped function in class list

    // if there two selectes blocks
    if ( allflipedblock.length === 2 ) {
        console.log("there two selectes blocks")
        
        // stop clicking function
        stop_clicking();
        // check method block function
        ChackMatchedBlocks( allflipedblock[0] ,allflipedblock[1] );
    }
} 
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  
//&&&&&&&&&&&&&&&&&&&&&  stop_clicking    &&&&&&&&&&&&&&&&&&&&&&&&&&
// add clicking function to the main container
function stop_clicking() { 
    // add class no clicking to main container
    game_container.classList.add("no_clicking");
    // console.log(game_container)
    setTimeout(() => {
        // remove class no clicking after the duration  time to cart convert
        game_container.classList.remove("no_clicking");


    }, duration);
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  
//&&&&&&&&&& / check method block function  &&&&&&&&&&&&&&&&&&&&&&
function ChackMatchedBlocks(firstblock,secondBlock) {
    
    let tries = document.querySelector(".tries span");
    // console.log("===000====")
    // console.log(firstblock)
    // console.log(firstblock.dataset)
    // console.log(firstblock.dataset.technology)
    // dataset is meaning like name is is like name of classlist
    if (firstblock.dataset.technology === secondBlock.dataset.technology) {

        firstblock.classList.remove("is_flipped")
        secondBlock.classList.remove("is_flipped")
        console.log("===111====")
        // ### ### ### ### ### ### ### ### ### ### ### ###
        firstblock.classList.add("is_matched")
        secondBlock.classList.add("is_matched")
        console.log("====222===")
    }else{

        tries.innerHTML = parseInt(tries.innerHTML) + 1 ;
        // use parsint toconvert sting in html to number to can add 1 to it
    

        setTimeout(() => {
            firstblock.classList.remove("is_flipped")
            secondBlock.classList.remove("is_flipped") 
        }, duration);
        // we make settime out befor we add flipped class to make atime to fliped smoothley
    }
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  


// future properties===============
// ================================

//  add more than one player by add it to the local storage

// generate all images and bocks by js  we
//    ---you select nomber of blocks you want and js 
//     generate from alote of image you have

// add timer to stop gameover and re arrange the position of blocks

// add music in background begin while you write yourname

// 

// last vudeo10/////

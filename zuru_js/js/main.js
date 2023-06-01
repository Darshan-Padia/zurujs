// Retrieve the existing divs from local storage
let count = 0

// var divs = localStorage.getItem("divs");
// divs = divs ? JSON.parse(divs) : [];

// Create the existing divs in the wrapper
// var divs = localStorage.getItem("clone")
// console.log(typeof divs);
var wrapper = document.getElementById("wrapper");
// for (var i = 0; i < divs.length; i++) {
// var ele = divs[i];
// console.log(ele);
// var box = document.createElement("div");
// var divId = "dynamicDiv-" + divContent; // Generate a unique ID for each div
// box.setAttribute("id", 'div'+ (i+2));
// box.classList.add('wrapper-child')
// box.textContent = divContent;
// wrapper.appendChild(box);
// }

window.addEventListener('load', function () {
    var storedHTML = localStorage.getItem('wrapperHTML');
    if (storedHTML) {
        wrapper.innerHTML = storedHTML;
    }
});

// Function to create a new div
function createDiv() {
    // var new_ele = document.createElement('div');
    // var existingDiv = document.querySelector(".wrapper-child:last-child");
    // var wrap = document.querySelector(".wrapper-child:last-child");

    // if (existingDiv) {
    //     var new_ele = document.createElement('div');
    //     // var clone = existingDiv.cloneNode(true);
    //     // clone.style.visibility = 'visible'
    //     // new_ele.visibility = 'visible'
    //     new_ele.setAttribute('id' , 'div'+ (Number(wrap.id.slice(3)) + 1))
    //     new_ele.classList.add('wrapper-child')

    //     new_ele.innerHTML = document.getElementById('to_do').innerHTML
    //     wrapper.appendChild(new_ele);
    //     // localStorage.setItem('wrapper', wrapperHTML);

    // }
    count++;
    console.log('cc ' + count);
    duplicateDiv()
}

function dltDiv(el) {
    count--
    console.log('cc ' + count);

    parent_ele = el.parentElement
    console.log(parent_ele.parentElement)
    grand_parent_ele = parent_ele.parentElement

    var wrapper_child_elements = document.getElementsByClassName('wrapper-child')
    var wrapper_elements = document.getElementsByClassName('wrapper')

    console.log(wrapper_elements);

    if (count == 0) {
        wrapper_elements[0].style.display = 'none'
        wrapper_child_elements[0].setAttribute('id', 'div' + 1)
        // console.log(wrapper_elements[0].id);
        console.log('ffff');

    }

    else  {
        grand_parent_ele.remove();

    }
}

function duplicateDiv() {
    var existingDiv = document.querySelector(".wrapper-child:last-child");
    var wrap = document.querySelector(".wrapper-child:last-child");
    console.log(wrap);
    if (Number(wrap.id.slice(3)) == 1) {
        wrap.parentElement.style.display = 'block'

        var arr = document.getElementsByClassName('inside_inp');
        var to_do = document.getElementsByClassName('to_do');
        const element = arr[(Number(wrap.id.slice(3)) - 1)];
        element.value= document.getElementById('to_do').value;
        wrap.setAttribute('id', 'div' + (Number(wrap.id.slice(3)) + 1))
        var clone = wrap

        // return
    }
    else {
        var clone = existingDiv.cloneNode(true);
        clone.style.visibility = 'visible'
        clone.setAttribute('id', 'div' + (Number(wrap.id.slice(3)) + 1))
        wrapper.appendChild(clone);
        var arr = document.getElementsByClassName('inside_inp');
        var to_do = document.getElementsByClassName('to_do');
        const element = arr[(Number(wrap.id.slice(3)) - 1)];
        element.value = document.getElementById('to_do').value;
        // clone.innerHTML = 'aaaaaaaaaaaaaa'
    }
    console.log(document.getElementById('to_do').value);
}

localStorage.setItem('task_list' , JSON.stringify())

// for (let i = 0; i < old_items.length; i++) {
//     const element = old_items[i];
//     console.log(element);
    
// }


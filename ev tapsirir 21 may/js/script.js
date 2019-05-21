var input = document.querySelector("#input")
// console.log(input)
var button = document.querySelector("#button")
// console.log(choose)
var ul = document.querySelector("#ul")
// console.log(ul)

button.addEventListener("click", function () {

    // var list = document.getElementById("#list")
    // list.removeChild(list.childNodes[0]); 
    // ul.classList.add("list")

    //   while (list.hasChildNodes()){
    //     list.removeChild(list.lastChild);
    //   }
    // }









    {if (ul.childElementCount != 0) {
        (ul.innerHTML="")
    }}

    for (var i = 1; i <= input.value; i++) {

        // var list = document.getElementById("#list")
        var li = document.createElement("li");

        // var list = li.classList.add("lists");
        li.classList.add("list-group-item");
        li.innerText = i;

        // console.log(ul.children)

        ul.appendChild(li);



        //    console.log(i)

    }
    // console.log(input.value)
})
// {if (ul.childElementCount != 0) {
//     ul.removeChild(list.firstChild)
// }}

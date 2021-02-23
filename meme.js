
let getFormElement = document.getElementById("formWork");
let img = document.getElementsByTagName('img');
    //add an event listener
getFormElement.addEventListener("submit", function(event){
    event.preventDefault();
    //alert("you just clicked submit"); //To check if the page is working correctly.
    //console.log("you just clicked submit");  // to check if function is working properly.

    // create new div element to hold meme, image and texts
    const newDiv = document.createElement("div");

   let top_text = document.createElement("div");
   let bottom_text = document.createElement("div");
   let img = document.createElement("img");

   let btn = document.createElement("button");
   btn.setAttribute("type", "button");

   img.src = document.getElementById("linksForImages").value;

   top_text.classList.add("top_text"); // create a class called top_text
   top_text.innerHTML = document.getElementById("top_text").value;

   bottom_text.classList.add("bottom_text");
   bottom_text.innerHTML = document.getElementById("bottom_text").value;

   btn.innerHTML = "Delete";

   newDiv.classList.add("meme");
   newDiv.appendChild(top_text);
   newDiv.appendChild(bottom_text);
   newDiv.appendChild(img);
   newDiv.appendChild(btn);

   let memeLocation = document.getElementById("memeContainer");
   memeLocation.appendChild(newDiv);

   document.getElementById("linksForImages").value = "";
   document.getElementById("top_text").value = "";
   document.getElementById("bottom_text").value = "";

   btn.addEventListener('click', function(event){
       newDiv.remove();
   })

})




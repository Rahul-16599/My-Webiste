
//alert ("hello from first.js");


const mode = document.querySelector("#mode") 
const lang = document.querySelector("#lang") 
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const box6 = document.getElementById("box6")
const box7 = document.getElementById("box7")
const box8 = document.getElementById("box8")
const heading2 = document.getElementById("heading2")
const heading3 = document.getElementById("heading3")
const outermost = document.getElementById("outermost")


// box1.addEventListener("mouseover", () => {
   //    box1.innerText = "mouse is hoverd";
   // });
   // box1.addEventListener("mouseout", () => {
   //    box1.innerText = "";
   // });


   box1.addEventListener("click", () => {
   window.open('https://www.geeksforgeeks.org/introduction-to-express/?ref=lbp', '_blank'); 
   });


   box2.addEventListener("click", () => {
   window.open('https://www.geeksforgeeks.org/express-js/', '_blank'); 
      
   });

   box3.addEventListener("click", () => {
   window.open('https://www.geeksforgeeks.org/javascript/', '_blank'); 
      
   });

    box4.addEventListener("click", () => {
    window.open('https://www.geeksforgeeks.org/html-tutorial/', '_blank'); 
      
    });

    box5.addEventListener("click", () => {
   window.open('https://www.geeksforgeeks.org/css-tutorial/', '_blank'); 
      
   });

    box6.addEventListener("click", () => {
    window.open('https://www.geeksforgeeks.org/react/', '_blank'); 
      
    });

    box7.addEventListener("click", () => {
    window.open('https://www.geeksforgeeks.org/sql-tutorial/', '_blank'); 
      
    });

    box8.addEventListener("click", () => {
    window.open('https://www.geeksforgeeks.org/mongodb-tutorial/', '_blank'); 
      
    });

   
   
   mode.addEventListener("click", function(){
   heading2.innerText = "This is dark mode";
   heading2.style.color = "red";
   heading2.style.background = "rgb(1, 33, 33)";
   outermost.style.background = "black";
 
   });
   mode.addEventListener("dblclick", function(){
      // double click for light mdode
   heading2.innerText = "This is light mode";
   heading2.style.color = "bisque";
   heading2.style.background = "rgb(2, 79, 79)";
   outermost.style.background = "rgb(2, 79, 79)";
 
   });
   mode.addEventListener("dblclick", function(){
      // double click for light mdode
   heading3.innerText = "This Website is under development and being developed by Rahul...";
   heading3.style.background = "rgb(2, 79, 79)";
   heading3.style.color = "bisque";
 
   });

   mode.addEventListener("click", function(){
   heading3.innerText = "This Website is under development and being developed by Rahul...";
   heading3.style.background = "black";
   heading3.style.color = "rgb(237, 9, 150)";
 
});


lang.addEventListener("change", () => {
    if (lang.value === "English") {
       heading2.innerText = "Language :- English";
       heading3.innerText = "Welcome To My Website";

      }else if (lang.value === "Hindi") {
       heading2.innerText = "भाषा :- हिंदी";
       heading3.innerText = "मेरी वेबसाइट पर आपका स्वागत है";

       }else if (lang.value === "Marathi") {
       heading2.innerText = "भाषा :- मराठी";
       heading3.innerText = "माझ्या वेबसाइटवर तुमचे स्वागत आहे";
       // console.log(lang.value);  
      }
   
   });





 

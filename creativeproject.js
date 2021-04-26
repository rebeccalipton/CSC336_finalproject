(function () {
    "use strict";
    window.onload = function () {

        document.getElementById("start").onclick = form1;

        document.getElementById("back1").onclick = back1;

        document.getElementById("next1").onclick = next1;

        document.getElementById("back2").onclick = back2;

        document.getElementById("next2").onclick = next2;

        document.getElementById("back3").onclick = back3;

        document.getElementById("next3").onclick = next3;
        
        document.getElementById("back4").onclick = back4;
        
//        document.getElementById("libarts").onclick = showLA;
//        
//        document.getElementById("begin").onclick = startQuiz;


    }
    
    //Time bar for Form1 where divs are an ID//
            var i = 0;
            function move() {
              if (i == 0) {
                i = 1;
                var progress = document.getElementById("myBar");
                  console.log(progress)
                var width = 1;
                var timeout = setInterval(frame, 1500);
                function frame() {
                  if (width >= 3000) {
                    clearInterval(timeout);
                      alert("You have run out of time. Would you like to start again? If so please refresh the page.");
                    i = 0;
                  } else {
                    width++;
                    progress.style.width = width + "%";
                  }
                }
              } 
            }
        //Time bar for Form2 and 3 where divs are a class -> maybe need to make an array!!//
                var i = 0;
            function moveClass() {
                var progress = document.querySelectorAll("myBar");
                for (let i = 0; i > progress.length; i++){
                     if (i == 0) {
                    i = 1;
                    console.log(progress)
                    var width = 1;
                    var timeout = setInterval(frame, 1500);
                    function frame() {
                        if (width >= 3000) {
                            clearInterval(timeout);
                        alert("You have run out of time. Would you like to start again? If so please refresh the page.");
                        i = 0;
                  } else {
                    width++;
                    progress.style.width = width + "%";
                  }
                }
              } 
            }
            }
    
//    function ClearMove(){
//        var progress = document.getElementById("myBar");
//        progress.style.width = "1%"
//        i = 0;
//        move();
//    }

    function form1 (){
        document.querySelector("#main-view").classList.add("hidden");
        document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        move();
}


    function back1 (){
         document.querySelector("#main-view").classList.remove("hidden");
        document.querySelector("#form1").classList.add("hidden");
         document.querySelector("body").style.backgroundImage = "url(college-students.jpeg)";
        
    }

    function next1 (){
        document.querySelector("#form1").classList.add("hidden");
        document.querySelector("#form2").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        moveClass();
    }

    function back2 (){
         document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("#form2").classList.add("hidden");
    }

       function next2 (){
        document.querySelector("#form2").classList.add("hidden");
        document.querySelector("#form3").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        moveClass();
    }

    function back3 (){
        document.querySelector("#form2").classList.remove("hidden");
        document.querySelector("#form3").classList.add("hidden");

    }

    function next3 (){
    document.querySelector("#form4").classList.remove("hidden");
        document.querySelector("#form3").classList.add("hidden");
        fetchAdmission();
        //create element 1//
//        var header = document.creatElement("h1");
//        var t = document.createTextnode("Your Results: ");
//        header.appendChild(t);
//        document.getElementById("header").appendChild(header);
//    
//        //create element 2//  
//      let results = document.createElement("p");
//      results.title = "results go here";
//      document.getElementByClassName("resultList").appendChild(results);
//        
//         //create element 3//  
//      let helpnotice = document.createElement("p");
//      helpnotice.title = "Need further help?";
//      document.getElementById("help").appendChild(helpnotice);
    }
    
    function back4 (){
        document.querySelector("#form3").classList.remove("hidden");
        document.querySelector("#form4").classList.add("hidden");

    }
    
    function showLA(){
      var princetonLink = document.createElement("a");
      var princetonText = document.createTextNode("Princeton's Take on Liberal Arts");
      princetonLink.appendChild(princetonText);
      princetonLink.title = "Princeton's Take on Liberal Arts";
      princetonLink.href = "https://admission.princeton.edu/academics/what-does-liberal-arts-mean";
      document.getElementById("opinions").append(princetonLink);

    }

  //   function pricefx(){
  //     let priceOptions = document.getElementsByClassName("price");
  //     let above = document.getElementById("above");
  //     let below = document.getElementById("below");
  //
  //     if(priceOptions.selected = priceOptions[0]){
  //       if(below.selected == True){
  //         alert("You cannot chose the lowest price and consider price ranges below it. Please uncheck the first checkbox.");
  //       }
  //     }
  //     if(priceOptions.selected = priceOptions[10]){
  //       if(above.selected == True){
  //         alert("You cannot chose the highest price and consider price ranges above it. Please uncheck the second checkbox.");
  //       }
  //     }
  //     if(priceOptions.selected = priceOptions[11]){
  //         alert("You cannot chose an unlimited price and consider price ranges above/below it. Please uncheck both checkboes.");
  //   }
  // }

    const url = "https://api.data.gov/ed/collegescorecard/v1/schools?api_key=1BrgxwOZt8gbORb2UlRu39hXhXV5Xjc3QCxQQwCg"
    
    function fetchAdmission(){
        fetch(url)
        .then(checkStatus)
        .then((resp) => resp.message())
        .then(function(data) {
        console.log(data)
        });
    }
    
      function checkStatus(response) {
        if (response.status >= 200 && response.status < 300 || response.status == 0) {
            return response.text();
        } else {
        return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    }
})();
// filtering array
// anon function that checks thru each condition and only returns if array meets those values



(function () {

    "use strict";
    //timeout global variable for time bars//
        var timeout = null;
        let actGlobal = 0;
        let satGlobal = 0;
        let sizeGlobal = 0;
        let tuitionGlobal = 0;

const url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?fields=school.name,2018.student.size,school.school_url,latest.admissions.act_scores.midpoint.cumulative,latest.admissions.sat_scores.average.overall,latest.cost.tuition.out_of_state&api_key=ACZ6ovhARgLjhpZMPu8YulNwDapdIPtipybia50b";
    window.onload = function () {
//what happens when user clicks back and next//
        document.getElementById("start").onclick = form1;

        document.getElementById("back1").onclick = back1;

        document.getElementById("next1").onclick = next1;

        document.getElementById("back2").onclick = back2;

        document.getElementById("next2").onclick = next2;

        document.getElementById("back3").onclick = back3;

        document.getElementById("next3").onclick = next3;

        document.getElementById("back4").onclick = back4;

        document.getElementById("moreSchools").onclick = next4;

        document.getElementById("back5").onclick = back5;


    }

    //Time bar for Form1 where divs are an ID//
            var i = 0;
            function move() {
                i = 1;
                var progress = document.getElementById("myBar");
                var progress2 = document.getElementById("bar2");
                var progress3 = document.getElementById("bar3");
                  console.log(progress)
                  console.log(progress2)
                  console.log(progress3)
                var width = 1;
                timeout = setInterval(frame, 3000);
                function frame() {
                  if (width >= 30000) {
                    clearInterval(timeout);
                      alert("You have run out of time. Would you like to start again? If so please refresh the page.");
                    i = 0;
                  } else {
                    width++;
                    progress.style.width = width + "%";
                    progress2.style.width = width + "%";
                    progress3.style.width = width + "%";
                  }
              }
            }

//clear time bar when clicking next or back so that time does not keep adding when in new form//
    function clearProgress(){
        clearInterval(timeout);
        var width = 1;
        var progress = document.getElementById("myBar");
        var progress2 = document.getElementById("bar2");
        var progress3 = document.getElementById("bar3");
        progress.style.width = "1" + "%";
        progress2.style.width = "1" + "%";
        progress3.style.width = "1" + "%";
    }

    function form1 (){
        //change view//
        document.querySelector("#main-view").classList.add("hidden");
        document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        //timer//
        move();
}


    function back1 (){
        //change view//
         document.querySelector("#main-view").classList.remove("hidden");
         document.querySelector("#form1").classList.add("hidden");
         document.querySelector("body").style.backgroundImage = "url(college-students.jpeg)";
        //clear and call timer//
        clearProgress();
        move();

    }

    function next1 (){
       //change view//
        document.querySelector("#form1").classList.add("hidden");
        document.querySelector("#form2").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        //clear and call timer//
        clearProgress();
        move();
    }

    function back2 (){
         //change view//
        document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("#form2").classList.add("hidden");
        //clear and call timer//
        clearProgress();
        move();
    }

       function next2 (){
           //change view//
        document.querySelector("#form2").classList.add("hidden");
        document.querySelector("#form3").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
           //clear and call timer//
           clearProgress();
           move();

    }

    function back3 (){
        //change view//
        document.querySelector("#form2").classList.remove("hidden");
        document.querySelector("#form3").classList.add("hidden");
        //clear and call timer//
        clearProgress();
        move();
    }

    function next3 (){
        //change view//
        document.querySelector("#form4").classList.remove("hidden");
        document.querySelector("#form3").classList.add("hidden");
        //show results from API//

        fetchAdmission();
        quiz();
        sat();
        act();
    }

    function back4 (){
        //change view//
        document.querySelector("#form3").classList.remove("hidden");
        document.querySelector("#form4").classList.add("hidden");
        //clear and call timer//
        clearProgress();
        move();
    }

    function next4(){
        fetchAdmission();
        randomizeResults();

    }


    function showLA(){
      var princetonLink = document.createElement("a");
      var princetonText = document.createTextNode("Princeton's Take on Liberal Arts");
      princetonLink.appendChild(princetonText);
      princetonLink.title = "Princeton's Take on Liberal Arts";
      princetonLink.href = "https://admission.princeton.edu/academics/what-does-liberal-arts-mean";
      document.getElementById("opinions").append(princetonLink);

    }


    function fetchAdmission(){
        fetch(url)
        .then(checkStatus)
        .then(function(data){

            console.log(data);
            //makes JSON into an array just need to print the results array - in console//
            data = JSON.parse(data);
        //  data = JSON. stringify(data); -> makes the whole JSON object appear//
            showResults(data);
        })
        .catch(function(error) {
          console.error(url);
          console.error("Problem with fetch request");
        });
    }

      function checkStatus(response) {
        if (response.status >= 200 && response.status < 300 || response.status == 0) {
            return response.text();
        } else {
        return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    }


    function getSize(){
        let size = document.getElementById("schoolSize");
        sizeGlobal = size;
        if(size.value == "small"){
          sizeGlobal = 0;
        }
        else if (size.value == "medium"){
          sizeGlobal = 5000;
        }
        else if (size.value == "large"){
          sizeGlobal = 15000;
        }

      }


function act(){
  let act = document.getElementById("act");
  actGlobal = act;
  if(act.value == "0-10"){
    actGlobal = 10;
  }
  else if(act.value== "11-13"){
    actGlobal = 13;
  }
  else if(act.value == "14-16"){
    actGlobal = 16;
  }
  else if(act.value == "17-19"){
    actGlobal = 19;
  }
  else if(act.value == "20-22"){
    actGlobal = 22;
  }
  else if(act.value == "23-25"){
    actGlobal = 25;
  }
  else if(act.value == "26-28"){
    actGlobal = 28;
  }
  else if(act.value == "29-31"){
    actGlobal = 31;
  }
  else if(act.value == "32-34"){
    actGlobal = 34;
  }
  else if(act.value == "35-36"){
    actGlobal = 36;
  }
  else if(act.value == "No ACT"){
    actGlobal = "NA";
  }
}


function sat(){
    let sat = document.getElementById("sat");
    satGlobal = sat; // setting global var to local var

        if(sat.value == "0-600"){
          satGlobal = 600;
        }
        else if (sat.value == "601-700"){
          satGlobal = 700;
        }
        else if (sat.value == "701-800"){
          satGlobal = 800;
        }
        else if (sat.value == "801-900"){
          satGlobal = 900;
        }
        else if (sat.value == "901-1000"){
          satGlobal = 1000;
        }
        else if (sat.value == "1001-1100"){
          satGlobal = 1100;
        }
        else if (sat.value == "1101-1200"){
          satGlobal = 1200;
        }
        else if (sat.value == "1201-1300"){
          satGlobal = 1300;
        }
        else if (sat.value == "1301-1400"){
          satGlobal = 1400;
        }
        else if (sat.value == "1401-1500"){
          satGlobal = 1500;
        }
        else if (sat.value == "1501-1600"){
          satGlobal = 1600;
        }
        else if (sat.value == "No SAT"){
          satGlobal = "NA";
        }

      }

    //API variable name - cost//
    function quiz(){
        let price = document.getElementById("price");
        tuitionGlobal = price;
        if(price.value == "0-5000"){
          tuitionGlobal = 5000;
        }

          else if (price.value == "5000-10000"){
            tuitionGlobal = 10000;
          }

          else if (price.value == "10000-20000"){
            tuitionGlobal = 20000;
          }

          else if (price.value == "20000-30000"){
            tuitionGlobal = 30000;
          }

          else if (price.value == "30000-40000"){
              tuitionGlobal= 40000;
          }

          else if (price.value == "40000-50000"){
              tuitionGlobal = 50000;
          }

          else if (price.value == "50000-60000"){
            tuitionGlobal = 60000;
          }

          else if (price.value == "60000-70000"){
            tuitionGlobal = 70000;
          }

          else if (price.value == "70000-80000"){
            tuitionGlobal= 80000;
          }

          else if (price.value == "80000-90000"){
            tuitionGlobal = 90000;
          }

          else if (price.value == "90000-100000"){
            tuitionGlobal = 100000;
          }

          else if (price.value == "No limit"){
              tuitionGlobal = 1000000000;
            }
          }




function showResults(response) {

  getSize();
  console.log("ACT score: " + actGlobal);
  console.log("SAT score: " + satGlobal);
  console.log("Tuition: " + tuitionGlobal);
  console.log("Size: " + sizeGlobal);

  let results = response.results;

  let schools = [];
  for (let i = 0; i < results.length; i++){
    var responseName = results[i]["school.name"];
    var size = results[i]["2018.student.size"];

    var price = (results[i]["latest.cost.tuition.out_of_state"]);

    var sat = results[i]["latest.admissions.sat_scores.average.overall"];

    var act = results[i]["latest.admissions.act_scores.midpoint.cumulative"];
  //console.log("test2"); // entering for loop yes
  console.log("size  " + size);
  console.log("sizeGlobal  " + sizeGlobal);
    if (price < tuitionGlobal && act < actGlobal && sat < satGlobal && size > sizeGlobal){
        let li = document.createElement("li");
        let ulSize = document.createElement("ul");
        let ulPrice = document.createElement("ul");
        let ulSAT = document.createElement("ul");
        let ulACT = document.createElement("ul");
        let ulLink = document.createElement("ul");
        let alink = document.createElement("a");

        document.getElementById("resultsforjs").appendChild(li);
        document.getElementById("resultsforjs").appendChild(ulSize);
        document.getElementById("resultsforjs").appendChild(ulPrice);
        document.getElementById("resultsforjs").appendChild(ulSAT);
        document.getElementById("resultsforjs").appendChild(ulACT);

        var responseName = results[i]["school.name"];
        var size = results[i]["2018.student.size"];

        var price = results[i]["latest.cost.tuition.out_of_state"];

        var sat = results[i]["latest.admissions.sat_scores.average.overall"];

        var act = results[i]["latest.admissions.act_scores.midpoint.cumulative"];

        let htmlInput = document.getElementById("resultsforjs");
        li.innerHTML = responseName;
        ulSize.innerHTML = "Size: " + size + " students";
        ulPrice.innerHTML = "Price: $" + price;
        ulSAT.innerHTML = "Average SAT Score: " + sat;
        ulACT.innerHTML = "Median ACT Score: " + act;
      //  alink.setAttribute("href") = link;
        htmlInput.appendChild(li);
        htmlInput.appendChild(ulSize);
        htmlInput.appendChild(ulPrice);
        htmlInput.appendChild(ulSAT);
        htmlInput.appendChild(ulACT);

    }

  }


}

function randomizeResults(response){
    let randomNum = Math.floor(Math.random);
    console.log("randomnum" + randomNum);
    clearResults();
     for (let i = 0; i<10; i++){
        i = randomNum;
        showResults();
}
// show results by 10
// button to display next page
// click button --> takes 10 results and replaces with next 10
// global var that keeps track of offset (click button once results 11-20, indep of results)
// if less than 10 schools, try catch loop (try code, catch error and display output message ("no other schools match"))
// js syntax for trycatch is mostly same as java
}

function clearResults() {
    document.getElementById("resultsforjs").innerHTML = "";
}

})();

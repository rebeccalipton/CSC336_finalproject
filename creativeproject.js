// filtering array
// anon function that checks thru each condition and only returns if array meets those values



(function () {
    //use strict//
    "use strict";
    //timeout global variable for time bars//
        var timeout = null;
        let actGlobal = 0;
        let satGlobal = 0;
        let sizeGlobal = "";
        let tuitionGlobal = 0;

    // rebecca api key
    // this url works in browser
        const url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&fields=school.name,2013.student.size&api_key=ACZ6ovhARgLjhpZMPu8YulNwDapdIPtipybia50b";


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

//        price.addEventListener("change", quiz);

        // let below = document.getElementById("below");
        // below.addEventListener("change", tuition);


//        document.getElementById("libarts").onclick = showLA;
//
//        document.getElementById("begin").onclick = startQuiz;


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
        document.querySelector("#form5").classList.remove("hidden");
        document.querySelector("#form4").classList.add("hidden");
    }

    function back5(){
        document.querySelector("#form4").classList.remove("hidden");
        document.querySelector("#form5").classList.add("hidden");

    }

    function showLA(){
      var princetonLink = document.createElement("a");
      var princetonText = document.createTextNode("Princeton's Take on Liberal Arts");
      princetonLink.appendChild(princetonText);
      princetonLink.title = "Princeton's Take on Liberal Arts";
      princetonLink.href = "https://admission.princeton.edu/academics/what-does-liberal-arts-mean";
      document.getElementById("opinions").append(princetonLink);

    }
    function aboveTuition(){
      let above = document.getElementById("above").checked;
      if(above == "True"){
        console.log('above = true');
      }
    }

  //   function pricefx(){
  //     let priceOptions = document.getElementsByClassName("price");
  //
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


    function fetchAdmission(){
        fetch(url)
        .then(checkStatus)
        .then(function(data){
            console.log(data);
            //makes JSON into an array just need to print the results array - in console//
            data = JSON.parse(data);
        //  data = JSON. stringify(data); -> makes the whole JSON object appear//
            showResults(data);
            showResults2(data);
        })
        .catch(function(error) {
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
        // if(size.value == "small"){
        //   // filter with dropdown value
        //   // filter does not take place here
        //   // takes place right before display
        //              }
        // else if (size.value == "medium"){
        //             }
        // else if(size.value == "large"){
        //         }
        }


    //API variable name = admissions//
    function satAct(){
        let sat = parseInt(document.getElementById("sat"));
        let act = parseInt(document.getElementById("act"));
        actGlobal= act;
        satGlobal = sat; // setting global var to local var

        if(act > 15){
          return act;
        }
        else{
          return ("There are not many schools that will accept this ACT score.");
        }
        if(sat > 600){
          return sat;
        }
        else{
          return("There are not many schools that will accept this SAT score.");
        }

        //
        // if(sat.value >= 600){
        //     if(act.value >= 15){
        //           getsize(); // not doing anything, just calling get Size
        //           // not storing anything
        //     }
        //
        //     if(act.value >= 17){
        //         getSize();
        //     }
        //
        //     if(act.value >= 19){
        //         getSize();
        //     }
        //
        //     if(act.value >= 21){
        //         getSize();
        //     }
        //
        //     if(act.value >= 23){
        //        getSize();
        //     }
        //
        //     if(act.value >=25){
        //         getSize();
        //       }
        //
        //     if(act.value >= 27){
        //         getSize();
        //       }
        //
        //     if(act.value >= 29){
        //         getSize();
        //       }
        //
        //     if(act.value >= 31){
        //         getSize();
        //       }
        //
        //     if(act.value >= 33){
        //         getSize();
        //       }
        //
        //     if(act.value >= 35){
        //        getSize();
        //       }
        //   }
        //
        //    // 600 ends
        // if(sat.value >= 700){ // get size is called regardless
        //     if(act.value >= 15){
        //         getSize();
        //         }
        //
        //     if(act.value >= 17){
        //           getSize();
        //         }
        //
        //     if(act.value >= 19){
        //            getSize();
        //           }
        //
        //     if(act.value >= 21){
        //             getSize();
        //             }
        //
        //     if(act.value >= 23){
        //             getSize();
        //               }
        //
        //     if(act.value >=25){
        //             getSize();
        //                 }
        //
        //     if(act.value >= 27){
        //            getSize();
        //                   }
        //
        //     if(act.value >= 29){
        //            getSize();
        //                 }
        //
        //     if(act.value >= 31){
        //           getSize();
        //                 }
        //
        //     if(act.value >= 33){
        //             getSize();
        //         }
        //
        //     if(act.value >= 35){
        //             getSize();
        //             }
        //     }
        //
        // if(sat.value >= 800){
        //     if(act.value >= 15){
        //               getSize();
        //             }
        //
        //     if(act.value >= 17){
        //                 getSize();
        //               }
        //
        //     if(act.value >= 19){
        //                 getSize();
        //                 }
        //
        //     if(act.value >= 21){
        //         getSize();
        //           }
        //
        //     if(act.value >= 23){
        //         getSize();
        //             }
        //
        //     if(act.value >=25){
        //         getSize();
        //               }
        //
        //     if(act.value >= 27){
        //         getSize();
        //                 }
        //
        //     if(act.value >= 29){
        //       getSize();
        //                   }
        //
        //     if(act.value >= 31){
        //         getSize();
        //                     }
        //
        //     if(act.value >= 33){
        //        getSize();
        //                     }
        //
        //     if(act.value >= 35){
        //         getSize();
        //             }
        //         }
        //
        // if(sat.value >= 900){
        //   if(act.value >= 15){
        //     getSize();
        //     }
        //
        //     if(act.value >= 17){
        //       getSize();
        //       }
        //
        //     if(act.value >= 19){
        //         getSize();
        //         }
        //
        //     if(act.value >= 21){
        //         getSize();
        //           }
        //
        //     if(act.value >= 23){
        //         getSize();
        //             }
        //
        //     if(act.value >=25){
        //         getSize();
        //               }
        //
        //     if(act.value >= 27){
        //         getSize();
        //                 }
        //
        //     if(act.value >= 29){
        //         getSize();
        //                   }
        //
        //     if(act.value >= 31){
        //         getSize();
        //     }
        //
        //     if(act.value >= 33){
        //         getSize();
        //     }
        //
        //     if(act.value >= 35){
        //         getSize();
        //             }
        //         }
        //
        // if(sat.value >= 1000){
        //     if(act.value >= 15){
        //       getSize();
        //     }
        //
        //     else if(act.value >= 17){
        //       getSize();
        //       }
        //
        //     if(act.value >= 19){
        //         getSize();
        //         }
        //
        //     if(act.value >= 21){
        //         getSize();
        //           }
        //
        //     if(act.value >= 23){
        //         getSize();
        //             }
        //
        //     if(act.value >=25){
        //         getSize();
        //               }
        //
        //     if(act.value >= 27){
        //         getSize();
        //                 }
        //
        //     if(act.value >= 29){
        //         getSize();
        //                   }
        //
        //     if(act.value >= 31){
        //         getSize();
        //     }
        //
        //     if(act.value >= 33){
        //         getSize();
        //     }
        //
        //     if(act.value >= 35){
        //         getSize();
        //             }
        //         }
        //
        // if(sat.value >= 1100){
        //       if(act.value >= 15){
        //     getSize();
        //     }
        //
        //     if(act.value >= 17){
        //       getSize();
        //       }
        //
        //     if(act.value >= 19){
        //         getSize();
        //         }
        //
        //     if(act.value >= 21){
        //         getSize();
        //           }
        //
        //     if(act.value >= 23){
        //         getSize();
        //             }
        //
        //     if(act.value >=25){
        //         getSize();
        //               }
        //
        //     if(act.value >= 27){
        //         getSize();
        //                 }
        //
        //     if(act.value >= 29){
        //         getSize();
        //                   }
        //
        //     if(act.value >= 31){
        //         getSize();
        //     }
        //
        //     if(act.value >= 33){
        //         getSize();
        //     }
        //
        //     if(act.value >= 35){
        //         getSize();
        //             }
        //         }
        //
        // if(sat.value >= 1200){
        //             if(act.value >= 15){
        //         getSize();
        //         }
        //
        //         if(act.value >= 17){
        //           getSize();
        //           }
        //
        //         if(act.value >= 19){
        //             getSize();
        //             }
        //
        //         if(act.value >= 21){
        //             getSize();
        //               }
        //
        //         if(act.value >= 23){
        //             getSize();
        //                 }
        //
        //         if(act.value >=25){
        //             getSize();
        //                   }
        //
        //         if(act.value >= 27){
        //             getSize();
        //                     }
        //
        //         if(act.value >= 29){
        //             getSize();
        //                       }
        //
        //         if(act.value >= 31){
        //             getSize();
        //         }
        //
        //         if(act.value >= 33){
        //             getSize();
        //         }
        //
        //         if(act.value >= 35){
        //             getSize();
        //                 }
        //             }
        //
        //     if(sat.value >= 1300){
        //         if(act.value >= 15){
        //         getSize();
        //         }
        //
        //         if(act.value >= 17){
        //           getSize();
        //           }
        //
        //         if(act.value >= 19){
        //             getSize();
        //             }
        //
        //         if(act.value >= 21){
        //             getSize();
        //               }
        //
        //         if(act.value >= 23){
        //             getSize();
        //                 }
        //
        //         if(act.value >=25){
        //             getSize();
        //                   }
        //
        //         if(act.value >= 27){
        //             getSize();
        //                     }
        //
        //         if(act.value >= 29){
        //             getSize();
        //                       }
        //
        //         if(act.value >= 31){
        //             getSize();
        //         }
        //
        //         if(act.value >= 33){
        //             getSize();
        //         }
        //
        //         if(act.value >= 35){
        //             getSize();
        //                 }
        //             }
        //
        //     if(sat.value >= 1400){
        //        if(act.value >= 15){
        //         getSize();
        //         }
        //
        //         if(act.value >= 17){
        //           getSize();
        //           }
        //
        //         if(act.value >= 19){
        //             getSize();
        //             }
        //
        //         if(act.value >= 21){
        //             getSize();
        //               }
        //
        //         if(act.value >= 23){
        //             getSize();
        //                 }
        //
        //         if(act.value >=25){
        //             getSize();
        //                   }
        //
        //         if(act.value >= 27){
        //             getSize();
        //                     }
        //
        //         if(act.value >= 29){
        //             getSize();
        //                       }
        //
        //         if(act.value >= 31){
        //             getSize();
        //         }
        //
        //         if(act.value >= 33){
        //             getSize();
        //         }
        //
        //         if(act.value >= 35){
        //             getSize();
        //                 }
        //             }
        //
        //     if(sat.value >= 1500){
        //         if(act.value >= 15){
        //         getSize();
        //         }
        //
        //         if(act.value >= 17){
        //           getSize();
        //           }
        //
        //         if(act.value >= 19){
        //             getSize();
        //             }
        //
        //         if(act.value >= 21){
        //             getSize();
        //               }
        //
        //         if(act.value >= 23){
        //             getSize();
        //                 }
        //
        //         if(act.value >=25){
        //             getSize();
        //                   }
        //
        //         if(act.value >= 27){
        //             getSize();
        //                     }
        //
        //         if(act.value >= 29){
        //             getSize();
        //                       }
        //
        //         if(act.value >= 31){
        //             getSize();
        //         }
        //
        //         if(act.value >= 33){
        //             getSize();
        //         }
        //
        //         if(act.value >= 35){
        //             getSize();
        //                 }
        //             }
                }

    //API variable name - cost//
    function quiz(){
        let price = document.getElementById("price");
        let below = document.getElementById("below");
        let above = document.getElementById("above");
        console.log("hi")
        if(price.value == "0-5000"){
          // once this code is correct copy and paste for each price interval
            if(below.value == selected){
          // Princeton Review says score below 15 is below average at almost any college https://www.princetonreview.com/college-advice/good-act-scores#:~:text=The%20ACT%20is%20scored%20on,scored%20out%20of%2036%20points.
                satAct();
            }

            if(above.value == selected){
                satAct();
            }

        }

          else if (price.value == "5000-10000"){
              if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "10000-20000"){
              if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "20000-30000"){
                     if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "30000-40000"){
                if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "40000-50000"){
                if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "50000-60000"){
               if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "60000-70000"){
                if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "70000-80000"){
               if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "80000-90000"){
               if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "90000-100000"){
                if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
          }

          else if (price.value == "No limit"){
                if(below.value == selected){
                  satAct();
              }
                if(above.value == selected){
                    satAct();
                }
            }
          }

function showResults(response) {
  let results = response.results;
  results = results.filter(function(school){
    return school.act >= actScore && school.sat >= satScore; //&& school.size = size; //

// dont need if else statements just make sure global variables are present and compare them to array
    // only extracts schools that match filter

  })
    for (let i = 0; i<10; i++){ // looks thru first 10 of new array (which holds objs that match filter)
        let li = document.createElement("li");
        document.getElementById("resultsforjs").appendChild(li);
        var responseName = results[i]["school.name"];
        var size = results[i]["2013.student.size"];
        var userResponse = responseName + ", Size: " + size + " students";
        console.log(userResponse);
        let htmlInput = document.getElementById("resultsforjs");
        li.innerHTML = userResponse + " " + responseName;
        htmlInput.appendChild(li);


    }
}

function showResults2(response){
     for (let i = 11; i<21; i++){
        let li = document.createElement("li");
        document.getElementById("resultsforjs2").appendChild(li);
        var responseName = results[i]["school.name"];
        var size = results[i]["2013.student.size"];
        var userResponse = responseName + ", Size: " + size + " students";
        console.log(userResponse);
}
// show results by 10
// button to display next page
// click button --> takes 10 results and replaces with next 10
// global var that keeps track of offset (click button once results 11-20, indep of results)
// if less than 10 schools, try catch loop (try code, catch error and display output message ("no other schools match"))
// js syntax for trycatch is mostly same as java


}
})();

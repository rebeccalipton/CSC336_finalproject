(function () {
    "use strict";
        var timeout = null;
    // rebecca api key
    // this url works in browser
        const url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&fields=id,school.name,2013.student.size&api_key=ACZ6ovhARgLjhpZMPu8YulNwDapdIPtipybia50b";


    window.onload = function () {

        document.getElementById("start").onclick = form1;

        document.getElementById("back1").onclick = back1;

        document.getElementById("next1").onclick = next1;

        document.getElementById("back2").onclick = back2;

        document.getElementById("next2").onclick = next2;

        document.getElementById("back3").onclick = back3;

        document.getElementById("next3").onclick = next3;

        document.getElementById("back4").onclick = back4;

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
                console.log("hi")
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
        document.querySelector("#main-view").classList.add("hidden");
        document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        move();
}


    function back1 (){
         document.querySelector("#main-view").classList.remove("hidden");
        document.querySelector("#form1").classList.add("hidden");
         document.querySelector("body").style.backgroundImage = "url(college-students.jpeg)";
        clearProgress();
        move();

    }

    function next1 (){
        document.querySelector("#form1").classList.add("hidden");
        document.querySelector("#form2").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
        clearProgress();
        move();
    }

    function back2 (){
         document.querySelector("#form1").classList.remove("hidden");
        document.querySelector("#form2").classList.add("hidden");
        clearProgress();
        move();
    }

       function next2 (){
        document.querySelector("#form2").classList.add("hidden");
        document.querySelector("#form3").classList.remove("hidden");
        document.querySelector("body").style.backgroundImage = "none";
           clearProgress();
           move();

    }

    function back3 (){
        document.querySelector("#form2").classList.remove("hidden");
        document.querySelector("#form3").classList.add("hidden");
        clearProgress();
        move();
    }

    function next3 (){
    document.querySelector("#form4").classList.remove("hidden");
        document.querySelector("#form3").classList.add("hidden");
        fetchAdmission();
        quiz();
        showResults();
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

    function fetchAdmission(){
        fetch(url)
        .then(checkStatus)
        .then(function(data){
          console.log(data)
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
        if(size.value == "small"){
                     }
        else if (size.value == "medium"){
                    }
        else if(size.value == "large"){
                }
        }
    
          
    function satAct(){
        let sat = parseInt(document.getElementById("sat"));
        let act = parseInt(document.getElementById("act"));
        
        if(sat.value >= 600){
            if(act.value >= 15){
                  getsize();
            }
        
            if(act.value >= 17){
                getSize();
            }
              
            if(act.value >= 19){
                getSize();
            }
              
            if(act.value >= 21){
                getSize();
            }
              
            if(act.value >= 23){
               getSize();
            }
                      
            if(act.value >=25){
                getSize();
              }
              
            if(act.value >= 27){
                getSize();
              }
                          
            if(act.value >= 29){
                getSize();
              }
                            
            if(act.value >= 31){
                getSize();
              }
                              
            if(act.value >= 33){
                getSize();
              }
                
            if(act.value >= 35){
               getSize();
              }
          }

           // 600 ends
        if(sat.value >= 700){
            if(act.value >= 15){
                getSize();
                }
                
            if(act.value >= 17){
                  getSize();
                }
                
            if(act.value >= 19){
                   getSize();
                  }
                
            if(act.value >= 21){
                    getSize();
                    }
                
            if(act.value >= 23){
                    getSize();
                      }
                
            if(act.value >=25){
                    getSize();
                        }
                
            if(act.value >= 27){
                   getSize();
                          }
                
            if(act.value >= 29){
                   getSize();
                        }
                
            if(act.value >= 31){
                  getSize();
                        }
                
            if(act.value >= 33){
                    getSize();
                }
                            
            if(act.value >= 35){
                    getSize();
                    }
            }
        
        if(sat.value >= 800){
            if(act.value >= 15){
                      getSize();
                    }

            if(act.value >= 17){
                        getSize();
                      }

            if(act.value >= 19){
                        getSize();
                        }

            if(act.value >= 21){
                getSize();
                  }

            if(act.value >= 23){
                getSize();
                    }

            if(act.value >=25){
                getSize();
                      }

            if(act.value >= 27){
                getSize();
                        }

            if(act.value >= 29){
              getSize();
                          }

            if(act.value >= 31){
                getSize();
                            }

            if(act.value >= 33){
               getSize();
                            }

            if(act.value >= 35){
                getSize();
                    }
                }
                        
        if(sat.value >= 900){
          if(act.value >= 15){
            getSize();
            }

            if(act.value >= 17){
              getSize();
              }

            if(act.value >= 19){
                getSize();
                }

            if(act.value >= 21){
                getSize();
                  }

            if(act.value >= 23){
                getSize();
                    }

            if(act.value >=25){
                getSize();
                      }

            if(act.value >= 27){
                getSize();
                        }

            if(act.value >= 29){
                getSize();
                          }

            if(act.value >= 31){
                getSize();
            }

            if(act.value >= 33){
                getSize();
            }

            if(act.value >= 35){
                getSize();
                    }
                }
                    
        if(sat.value >= 1000){
            if(act.value >= 15){
            getSize();
            }

            if(act.value >= 17){
              getSize();
              }

            if(act.value >= 19){
                getSize();
                }

            if(act.value >= 21){
                getSize();
                  }

            if(act.value >= 23){
                getSize();
                    }

            if(act.value >=25){
                getSize();
                      }

            if(act.value >= 27){
                getSize();
                        }

            if(act.value >= 29){
                getSize();
                          }

            if(act.value >= 31){
                getSize();
            }

            if(act.value >= 33){
                getSize();
            }

            if(act.value >= 35){
                getSize();
                    }
                }
                    
        if(sat.value >= 1100){
              if(act.value >= 15){
            getSize();
            }

            if(act.value >= 17){
              getSize();
              }

            if(act.value >= 19){
                getSize();
                }

            if(act.value >= 21){
                getSize();
                  }

            if(act.value >= 23){
                getSize();
                    }

            if(act.value >=25){
                getSize();
                      }

            if(act.value >= 27){
                getSize();
                        }

            if(act.value >= 29){
                getSize();
                          }

            if(act.value >= 31){
                getSize();
            }

            if(act.value >= 33){
                getSize();
            }

            if(act.value >= 35){
                getSize();
                    }
                }
            
        if(sat.value >= 1200){
                    if(act.value >= 15){
                getSize();
                }

                if(act.value >= 17){
                  getSize();
                  }

                if(act.value >= 19){
                    getSize();
                    }

                if(act.value >= 21){
                    getSize();
                      }

                if(act.value >= 23){
                    getSize();
                        }

                if(act.value >=25){
                    getSize();
                          }

                if(act.value >= 27){
                    getSize();
                            }

                if(act.value >= 29){
                    getSize();
                              }

                if(act.value >= 31){
                    getSize();
                }

                if(act.value >= 33){
                    getSize();
                }

                if(act.value >= 35){
                    getSize();
                        }
                    }

            if(sat.value >= 1300){
                if(act.value >= 15){
                getSize();
                }

                if(act.value >= 17){
                  getSize();
                  }

                if(act.value >= 19){
                    getSize();
                    }

                if(act.value >= 21){
                    getSize();
                      }

                if(act.value >= 23){
                    getSize();
                        }

                if(act.value >=25){
                    getSize();
                          }

                if(act.value >= 27){
                    getSize();
                            }

                if(act.value >= 29){
                    getSize();
                              }

                if(act.value >= 31){
                    getSize();
                }

                if(act.value >= 33){
                    getSize();
                }

                if(act.value >= 35){
                    getSize();
                        }
                    }
        
            if(sat.value >= 1400){
               if(act.value >= 15){
                getSize();
                }

                if(act.value >= 17){
                  getSize();
                  }

                if(act.value >= 19){
                    getSize();
                    }

                if(act.value >= 21){
                    getSize();
                      }

                if(act.value >= 23){
                    getSize();
                        }

                if(act.value >=25){
                    getSize();
                          }

                if(act.value >= 27){
                    getSize();
                            }

                if(act.value >= 29){
                    getSize();
                              }

                if(act.value >= 31){
                    getSize();
                }

                if(act.value >= 33){
                    getSize();
                }

                if(act.value >= 35){
                    getSize();
                        }
                    }

            if(sat.value >= 1500){
                if(act.value >= 15){
                getSize();
                }

                if(act.value >= 17){
                  getSize();
                  }

                if(act.value >= 19){
                    getSize();
                    }

                if(act.value >= 21){
                    getSize();
                      }

                if(act.value >= 23){
                    getSize();
                        }

                if(act.value >=25){
                    getSize();
                          }

                if(act.value >= 27){
                    getSize();
                            }

                if(act.value >= 29){
                    getSize();
                              }

                if(act.value >= 31){
                    getSize();
                }

                if(act.value >= 33){
                    getSize();
                }

                if(act.value >= 35){
                    getSize();
                        }
                    }
                }
      
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
    let results = document.getElementById("resultsforjs").innerHTML; 
    results = response.text;
    results.setAttribute("li");
  }
    
})();

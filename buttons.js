$('.simon-buttongreen').on('click', function(event) {
    console.log(event) 
    const element =event.target
    console.log(element)
    //alert('You clicked the green button');
  
    //var counter = (function() {
    //  var counter = 0;
    //  return function () {return counter +=1;}
    //})();
  });
  
  $('.simon-buttonblue').on('click', function(event) {
    console.log(event)
    const element =event.target
    console.log(element)
    //alert('You clicked the blue button');
  });
  
  $('.simon-buttonyellow').on('click', function(event) {
    console.log(event)
    const element =event.target
    console.log(element)
    //alert('You clicked the yellow button');
  });
  
  $('.simon-buttonred').on('click', function(event) {
    console.log(event)
    const element =event.target
    console.log(element)
    //alert('You clicked the red button');
  });
  
  var btnContainer = document.getElementsByClassName("simon-container");
  var button = btnContainer.getElementsByTagName("button");
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", " ");
    }
    this.className += " active";
  }
  
  var x = document.getElementsByTagName("button"),
    count=0;
  x.onclick = function clickCounter() {
    count += 1;
    x.innerHTML = "# of clicks: " + count;
  };
  
  //var beep1 = document.getElementById("beep1");
  //function playBeep1() {
    //console.log(beep1);
    //beep1.play();
    //}
  
  //var beep2 = document.getElementById("beep2");
  //function playBeep2() {
    //beep2.play();
    //} 
  
  //var beep3 = document.getElementById("beep3");
  //function playBeep3() {
    //beep3.play();
    //} 
  
  //var beep4 = document.getElementById("beep4");
  //function playBeep4() {
    //beep4.play();
    //} 
  
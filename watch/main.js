function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session ="AM";
    var days = date.getDay()
    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM"
    }

    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }

    var time = h + ":" + m + ":" + s +" "+session;
    document.getElementById("clock").innetText = time;
    document.getElementById("clock").textContent = time;
    console.log(days)
    
    if(days == '0' ){
      document.querySelector('.days').innerHTML = "Sunday";
    }
    if(days == '1' ){
      document.querySelector('.days').innerHTML = "Monday";
    }
    if(days == '2' ){
      document.querySelector('.days').innerHTML = "Tuesday";
    }
    if(days == '3' ){
      document.querySelector('.days').innerHTML = "Wednesday";
    }
    if(days == '4' ){
      document.querySelector('.days').innerHTML = "Thursday";
    }
    if(days == '5' ){
      document.querySelector('.days').innerHTML = "Friday";
    }
    if(days == '6' ){
      document.querySelector('.days').innerHTML = "Saturday";
    }
    
    
      
  


    setTimeout(showTime, 1000);
  }
  showTime();
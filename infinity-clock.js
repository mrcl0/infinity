var second_hand;
var minute_hand;
var hour_hand;

var seconds_reversed = true;
var minutes_reversed = true;
var hours_reversed = true;

var seconds_left = 60000 - moment().format('s') * 1000; 
var minutes_left = 3600 - moment().format('m') * 60 - parseInt(moment().format('s'));
var hours_left = 43200  - moment().format('h') * 3600 - moment().format('m') *60    ;   

window.addEventListener("load", async function() {
    am_pm =  document.getElementById("svg-object").contentDocument.getElementById("am-pm");
    am_pm.innerHTML = moment().format('A');
    
    second_hand = document.getElementById("svg-object").contentDocument.getElementById("second_hand");
    minute_hand = document.getElementById("svg-object").contentDocument.getElementById("minute_hand");
    hour_hand = document.getElementById("svg-object").contentDocument.getElementById("hour_hand");

    second_hand.style.strokeDasharray = moment().format('s') +"."+ moment().milliseconds() +",100";
    second_hand.style.animation = "fill-up-first "+seconds_left+"ms linear 0s 1 normal forwards running";

    minute_hand.style.strokeDasharray = moment().format('m') +"."+ moment().format('s') +",100";
    minute_hand.style.animation = "fill-up-first "+minutes_left+"s linear 0s 1 normal forwards running";

    hour_hand.style.strokeDasharray = moment().format("m")/100*1.67*5 + moment().format("h")*5 +",100";
    hour_hand.style.animation = "fill-up-first "+hours_left+"s linear 0s 1 normal forwards running";

    second_hand.addEventListener("webkitAnimationEnd", second_hand_animation_end,false);
    minute_hand.addEventListener("webkitAnimationEnd", minute_hand_animation_end,false);
    hour_hand.addEventListener("webkitAnimationEnd", hour_hand_animation_end,false);
  });

function second_hand_animation_end() {
    if(seconds_reversed) {
        second_hand.style.animation = "reset 1s linear 0s 1 normal forwards running";
        seconds_reversed = false;
    } else {
        second_hand.style.animation = "fill-up 59s linear 0s 1 normal forwards running";
        seconds_reversed = true;
    }
}

function minute_hand_animation_end() {
    if(minutes_reversed) {
        minute_hand.style.animation = "reset 1s linear 0s 1 normal forwards running";
        minutes_reversed = false;
    } else {
        minute_hand.style.animation = "fill-up 3599s linear 0s 1 normal forwards running";
        minutes_reversed = true;
    }
}

function hour_hand_animation_end() {
    if(hours_reversed) {
        hour_hand.style.animation = "reset 1s linear 0s 1 normal forwards running";
        hours_reversed = false;
    } else {
        hour_hand.style.animation = "fill-up 43200s linear 0s 1 normal forwards running";
        am_pm.innerHTML = moment().format('A');
        hours_reversed = true;
    }
}







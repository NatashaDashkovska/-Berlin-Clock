!function(){var e={secondsRef:document.querySelector(".round"),fiveHoursRef:document.querySelector(".hours-5"),oneHourRef:document.querySelector(".hours-1"),fiveMinutesRef:document.querySelector(".minutes-5"),oneMinuteRef:document.querySelector(".minutes-1"),timeRef:document.querySelector(".time")};setInterval((function(){var r=new Date,t=r.getHours(),o=r.getMinutes(),c=r.getSeconds();if(0===c){var n=document.querySelectorAll(".active-red"),a=document.querySelectorAll(".active-orange");Array.from(n).map((function(e){return e.classList.remove("active-red")})),Array.from(a).map((function(e){return e.classList.remove("active-orange")}))}!function(r){for(var t=Number.parseInt(r/5),o=0;o<t;o+=1){var c=".num-".concat(o);e.fiveHoursRef.querySelector(c).classList.add("active-red")}}(t),function(r){for(var t=r%5,o=0;o<t;o+=1){var c=".num-".concat(o);e.oneHourRef.querySelector(c).classList.add("active-red")}}(t),function(r){for(var t=Number.parseInt(r/5),o=Number.parseInt(r/15),c=0;c<t;c+=1){var n=".num-".concat(c);e.fiveMinutesRef.querySelector(n).classList.add("active-orange")}for(var a=0;a<o;a+=1){var u=".num-".concat(3*(a+1)-1),s=e.fiveMinutesRef.querySelector(u);s.classList.remove("active-orange"),s.classList.add("active-red")}}(o),function(r){for(var t=r%5,o=0;o<t;o+=1){var c=".num-".concat(o);e.oneMinuteRef.querySelector(c).classList.add("active-orange")}}(o),function(r){var t=r%2;0===t&&e.secondsRef.classList.add("active-orange"),t>0&&e.secondsRef.classList.remove("active-orange")}(c);var u="".concat(t,":").concat(o,":").concat(c);e.timeRef.textContent=u}),1e3)}();
//# sourceMappingURL=index.09662d17.js.map

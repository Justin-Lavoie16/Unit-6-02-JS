/* Created by: Justin Lavoie *
 Created on: nov 2022 * 
*/

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-6-02-JS/sw.js", {
    scope: "/Unit-6-02-JS/",
  })
}

;("use strict")

function myButtonClicked() {
  if (localStorage.CookieCountGoUp) {
    localStorage.CookieCountGoUp = Number(localStorage.CookieCountGoUp) + 1
  } else {
    localStorage.CookieCountGoUp = +1
  }
  document.getElementById("answers").innerHTML =
    "You have clicked the cookie " +
    localStorage.CookieCountGoUp +
    " times already"
}

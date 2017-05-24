'use strict'

window.talk = window.talk || {};

function saySomething(){
  return "something"
}

(function() {
	window.talk.init = function() {
    var div = document.createElement("div");
    div.setAttribute('id', 'my-div');
    div.innerHTML = saySomething()

    document.body.appendChild(div);
	};
})();

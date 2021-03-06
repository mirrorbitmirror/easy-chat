function message(text) {
    jQuery('#chat-result').append(text);
}

jQuery(document).ready(function($) {


   var socket = new WebSocket("ws://localhost:8090/easy-chat/server.php");
   socket.onopen = function () {
       message("<div>Соеденинеие установлено</div>");
   };

   socket.onerror = function (error) {
       message("<div>Ошибка при соеденении" + (error.message ? error.message : "" )+ "</div>");

   };

   socket.onclose = function () {
       message("<div>Соеденение закрыто</div>");
   };

   socket.onmessage = function (event) {
       var data = JSON.parse(event.data);
       message("<div>" + data.type + " - " + data.message + "</div>");
   }

});
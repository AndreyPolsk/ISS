function fulltime() {
jQuery.support.cors = true;
     $.ajax({
            type: "POST", //rest Type
            dataType: 'jsonp', //mispelled
            url: "http://api.open-notify.org/iss-now.json",
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function (people)
            {
            var longIt = $('#longit');
            var latIt = $('#latit');
            var koord2 = +people.iss_position.longitude;
            var nnn2 = koord2;
            var koord3 = +people.iss_position.latitude;
            var nnn3 = koord3;
                console.log(people.iss_position.longitude);
                console.log(people.iss_position.latitude);
                longIt.empty();
                latIt.empty();
                longIt.text(nnn2);
                latIt.text(nnn3);
                var uluru = {lat: koord3, lng: koord2};
                var map = new google.maps.Map(
                    document.getElementById('map'), {zoom: 11, center: uluru});
                var marker = new google.maps.Marker({position: uluru, map: map});
            }

 });

$(document).ready(function () {
     var showData = $('#show-crew');
     var showData5 = $('#show-data5');
    var flickerAPI = "http://api.open-notify.org/astros.json";
    $.getJSON( flickerAPI, function (data) {
      console.log(data);

      var people = data.people.map(function (people) {
        return 'Name' + ': ' + people.name;
      });

      showData.empty();
      showData5.empty();
      if (people.length) {
        var content = '<li>' + people.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        var number = $('<ul />').html(data.number);
        showData.append(list);
        showData5.append(number);
      }
    });

    showData.text(list);
    showData5.text(number);

});
    var time = new Date();
    document.clock.full.value = time.toLocaleString();
    setTimeout('fulltime()', 5000)
}

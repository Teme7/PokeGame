function initMap(){
    // Map options
    var options = {
        zoom: 18,
        center:{lat:38.8799,lng:-77.1067}
    }
    $(document).ready(function(){
    console.log(options.zoom);
    // New map
    var latitude;
    var longitude;
    var map = new google.maps.Map(document.getElementById('map'), options);
    var pokemon = {};
        
    var coords = {};
            
    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
            
    // Load pokemon.json file contents 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(xhttp.responseText);
            var item = response;
            pokemon = item;
                            
        }
        
    };
    
    xhttp.open("GET", "pokemon.json", false);
    xhttp.send();
    
   //Load worldCities.json file contents 
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function(){
    //     if(this.readyState == 4 && this.status == 200){
    //         var response = JSON.parse(xhttp.responseText);
    //         var item = response;
    //         coords = item;
    //     }
            
    // };
    
    // xhttp.open("GET", "worldCities.json", false);
    // xhttp.send();

//       $.getJSON("pokemon.json", function(json){
//           //pokemon.push(json);
//       });
    
    
//console.log(pokemon[0]);
//console.log(coords[0]);
    
     
  
    google.maps.event.addListener(map, 'dragend', function(event) {
    //var center = map.getCenter();
        var mylat = map.getCenter().lat();
        var mylng = map.getCenter().lng();
        console.log(mylat);
        console.log(mylng);
        var yesNo = Math.floor((Math.random() * 2));
        var pokemonNum = Math.floor((Math.random() * 35));
        console.log(yesNo);
        console.log(pokemon[pokemonNum].name);
        if(yesNo){
            addMarker(mylat, mylng, pokemonNum);
        }
    });
               
    function addMarker(lat, lng, num){
        var name = pokemon[num].name;
        //latitude = coords[latLong].lat;
        //longitude = coords[latLong].lng;
        var randomNumber = Math.floor(Math.random());
        latitude = lat + randomNumber;
        longitude = lng + randomNumber;
        console.log(latitude);
        console.log(longitude);
        var randompoint = new google.maps.LatLng(latitude, longitude);
        var marker = new google.maps.Marker({
        position: randompoint,
        map:map,
        draggable: false,
        animation: google.maps.Animation.BOUNCE,
        
    });
        console.log(pokemon[num].image);
    
    //Set icon visibility according to zoom level 
    google.maps.event.addListener(map, 'zoom_changed', function(event) {
        var zoom = map.getZoom();
        console.log(zoom);
        if (zoom >= 17){
            marker.setVisible(true);
            marker.setAnimation(google.maps.Animation.BOUNCE);
        } else {
            marker.setVisible(false);
        }
     });
        
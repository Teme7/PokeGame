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
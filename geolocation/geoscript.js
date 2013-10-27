window.onload = function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success);
    }
    else{
        error('Geo Location is not supported');
    }
    
    
}
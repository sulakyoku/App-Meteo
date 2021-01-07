



function loadmeteo( ville ) {
    var url2 = 'https://www.prevision-meteo.ch/services/json/'+ville;

    $.ajax({

        url: url2,

        method : "GET",
        dataType : "json",

        success:function(monObjet2){

           console.log(monObjet2);

           $(".ville").html(monObjet2.city_info.name+' , '+monObjet2.city_info.country);
           $(".currentday h2").html(monObjet2.current_condition.condition);
           $(".currentday img").attr( "src", "img/"+monObjet2.current_condition.condition_key+".png");
           
           $(".currentday .date").html(monObjet2.current_condition.hour+" - "+monObjet2.current_condition.date);
           $(".currentday .temperature").html(monObjet2. current_condition.tmp+" C°");

           $(".day0 h2").html(monObjet2.fcst_day_0.condition);
           $(".day0 img").attr( "src", "img/"+monObjet2.fcst_day_0.condition_key+".png");
           $(".day0 .date").html(monObjet2.fcst_day_0.day_long+" "+monObjet2.fcst_day_0.date);
           $(".day0 .tmax").html(monObjet2.fcst_day_0.tmax+" C°");
           $(".day0 .tmin").html(monObjet2.fcst_day_0.tmin+" C°");

           $(".day1 h2").html(monObjet2.fcst_day_1.condition);
           $(".day1 img").attr( "src", "img/"+monObjet2.fcst_day_1.condition_key+".png");
           $(".day1 .date").html(monObjet2.fcst_day_1.day_long+" "+monObjet2.fcst_day_1.date);
           $(".day1 .tmax").html(monObjet2.fcst_day_1.tmax+" C°");
           $(".day1 .tmin").html(monObjet2.fcst_day_1.tmin+" C°");
          

           $(".day2 h2").html(monObjet2.fcst_day_2.condition);
           $(".day2 img").attr( "src", "img/"+monObjet2.fcst_day_2.condition_key+".png");
           $(".day2 .date").html(monObjet2.fcst_day_2.day_long+" "+monObjet2.fcst_day_2.date);
           $(".day2 .tmax").html(monObjet2.fcst_day_2.tmax+" C°");
           $(".day2 .tmin").html(monObjet2.fcst_day_2.tmin+" C°");
          

           $(".day3 h2").html(monObjet2.fcst_day_3.condition);
           $(".day3 img").attr( "src", "img/"+monObjet2.fcst_day_3.condition_key+".png");
           $(".day3 .date").html(monObjet2.fcst_day_3.day_long+" "+monObjet2.fcst_day_3.date);
           $(".day3 .tmax").html(monObjet2.fcst_day_3.tmax+" C°");
           $(".day3 .tmin").html(monObjet2.fcst_day_3.tmin+" C°");
          

           $(".day4 h2").html(monObjet2.fcst_day_4.condition);
           $(".day4 img").attr( "src", "img/"+monObjet2.fcst_day_4.condition_key+".png");
           $(".day4 .date").html(monObjet2.fcst_day_4.day_long+" "+monObjet2.fcst_day_4.date);
           $(".day4 .tmax").html(monObjet2.fcst_day_4.tmax+" C°");
           $(".day4 .tmin").html(monObjet2.fcst_day_4.tmin+" C°");
          
          
          
           
           



        }//success    

    });//ajax pour avoir le temps en fonction de la ville 

}

navigator.geolocation.getCurrentPosition(function(position){

    // console.log(position)

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    // console.log("lat : "+lat+" Long : "+lng);

    var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.24aa2021bc5d5ede97840d7238f4122d&format=json&lat="+lat+"&lon="+lng;


    $.ajax({

        url: url,

        method : "GET",
        dataType : "json",

        success:function(monObjet){

            var ville = monObjet.address.town;
           
            console.log( ville );

            loadmeteo(ville)
   
        }//success



    });//ajax pour avoir la ville en fonction de la position 

}); //geoloc


$( "#gomp" ).click(function() {
    navigator.geolocation.getCurrentPosition(function(position){

        // console.log(position)
    
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
    
        // console.log("lat : "+lat+" Long : "+lng);
    
        var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.24aa2021bc5d5ede97840d7238f4122d&format=json&lat="+lat+"&lon="+lng;
    
    
        $.ajax({
    
            url: url,
    
            method : "GET",
            dataType : "json",
    
            success:function(monObjet){
    
                var ville = monObjet.address.town;
               
                console.log( ville );
    
                loadmeteo(ville)
       
            }//success
    
    
    
        });//ajax pour avoir la ville en fonction de la position 
    
    }); //geoloc
  });






$('#go').click(function(){
    
    var ville = $('#villechoisi').val();
    // $('#villechoisi').val (' ');
    console.log(ville);

    loadmeteo(ville);

  

   
});










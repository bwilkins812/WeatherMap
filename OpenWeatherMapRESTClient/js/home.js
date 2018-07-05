$(document).ready(function () {
    $(".banner").css('text-align', 'center');
    $(".noBorder").css('border', 'none');
    hideInfo();
    var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10]= "November";
            month[11] = "December";
    getDays(month);
    getDaysMetric(month);
    $("#getWeather").click(function() {
        var zipcode = $("#userZipcode").val();
        var invalidZipcode = checkZipcode(zipcode);
        var units = $("#unitSelector").val();
        if(invalidZipcode) {
            return false;
        }
        loadCurrentConditionsImperial(zipcode); 
        loadForecastImperial(zipcode);
        loadCurrentConditionsMetric(zipcode); 
        loadForecastMetric(zipcode);
        if (units=="Imperial" && units !="Metric") {
            $('.currentImperial').show();
            $('#forecastImperial').show(); 
            $('.currentMetric').hide();
            $('#forecastMetric').hide();      
        }else{
            $('.currentMetric').show();
            $('#forecastMetric').show();
            $('.currentImperial').hide();
            $('#forecastImperial').hide(); 
            
    
    }
    });             
    
    });

    function hideInfo() {
        $('#errorMessage').hide();
        $('.currentImperial').hide();
        $('.currentMetric').hide();
        $('#forecastImperial').hide();
        $('#forecastMetric').hide();

    }


    function checkZipcode(zipcode) {
        if (zipcode.length !=  5) {
            $('#errorMessage').show();
            $('#errorMessage').addClass("list-group-item list-group-item-danger");
            $('#errorMessage').append("Zipcode: Please enter a 5 digit zipcode.");
            
            return true;
            
        
        }else{
            $('#errorMessage').empty();
            $('#errorMessage').removeClass("list-group-item list-group-item-danger");
            
            return false;
        }
    }

    function loadCurrentConditionsImperial(zipcode) {   
        $("ul").empty();
        $("td").empty();
        $('#currentConditions').empty();
        $('#currentConditionsMetric').empty();
            
        $.ajax({
        type: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=88252b42059a6035da42a637db7a7923&units=imperial',
        success: function (weatherData) {
            var cityName = weatherData.name;
            var currentConditions = weatherData.weather[0].description;
            var temp = Math.round(weatherData.main.temp);
            var humidity = weatherData.main.humidity;
            var windSpeed = Math.round(weatherData.wind.speed);
            var conditionsIcon = weatherData.weather[0].icon;
            var iconImage = new Image();
            iconImage.src="http://openweathermap.org/img/w/" + conditionsIcon + ".png";

                    
                $('#currentConditions').append('Current Conditions In ' + cityName);
                $('#iconTD').append(iconImage);
                $('#conditionsTD').append(currentConditions);
                $('#currentTemp').append("Temperature: " + temp + " F");
                $('#humidity').append("Humidity: " + humidity +"%");
                $('#wind').append("Wind: " + windSpeed + " mph");              
                
                },
                
                error: function () {
                    $('#errorMessage').show();
                    $('#errorMessage').addClass("list-group-item list-group-item-danger");
                    $('#errorMessage').append("Error contacting web service for the current conditions.  Please try again later.");
                }
            });
            
    
        }

    function loadCurrentConditionsMetric(zipcode) { 
        $("ul").empty();
        $("td").empty();
        $('#currentConditionsMetric').empty();
        $('#currentConditions').empty();
                      
            $.ajax({
            type: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=88252b42059a6035da42a637db7a7923&units=metric',
            success: function (weatherData) {
            var cityName = weatherData.name;
            var currentConditions = weatherData.weather[0].description;
            var temp = Math.round(weatherData.main.temp);
            var humidity = weatherData.main.humidity;
            var windSpeed = Math.round(weatherData.wind.speed);
            var conditionsIcon = weatherData.weather[0].icon;
            var iconImage = new Image();
            iconImage.src="http://openweathermap.org/img/w/" + conditionsIcon + ".png";

                    

                $('#currentConditionsMetric').append('Current Conditions In ' + cityName);
                $('#iconTDMetric').append(iconImage);
                $('#conditionsTDMetric').append(currentConditions);
                $('#currentTempMetric').append("Temperature: " + temp + " C");
                $('#humidityMetric').append("Humidity: " + humidity +"%");
                $('#windMetric').append("Wind: " + windSpeed + " km/h");              
                
                },
                
                error: function () {
                    $('#errorMessage').show();
                    $('#errorMessage').addClass("list-group-item list-group-item-danger");
                    $('#errorMessage').append("Error contacting web service for the current conditions.  Please try again later.");

                }
            });
            
    
        }

        
    
    
            
    function getDays(month) {
            $('#th').empty();
            var today = new Date();

            var dayOne = new Date(today);
            var dayOneMonth = month[dayOne.getMonth()];
            var dayOneDate = (today.getDate() + 1);
            var dayOne = new Date(today);
            var dayTwoMonth = month[dayOne.getMonth()];
            var dayTwoDate = (today.getDate() + 2);
            var dayOne = new Date(today);
            var dayThreeMonth = month[dayOne.getMonth()];
            var dayThreeDate = (today.getDate() + 3);
            var dayFour = new Date(today);
            var dayFourMonth = month[dayOne.getMonth()];
            var dayFourDate = (today.getDate() + 4);
            var dayFive = new Date(today);
            var dayFiveMonth = month[dayOne.getMonth()];
            var dayFiveDate = (today.getDate() + 5);

                

                $('#dayOne').append(dayOneMonth + " " + dayOneDate);  
                $('#dayTwo').append(dayTwoMonth + " " + dayTwoDate);
                $('#dayThree').append(dayThreeMonth + " " + dayThreeDate); 
                $('#dayFour').append(dayFourMonth + " " + dayFourDate);
                $('#dayFive').append(dayFiveMonth + " " + dayFiveDate);

            }
    function getDaysMetric(month) {
            $('#th').empty();
            var today = new Date();

            var dayOne = new Date(today);
            var dayOneMonth = month[dayOne.getMonth()];
            var dayOneDate = (today.getDate() + 1);
            var dayOne = new Date(today);
            var dayTwoMonth = month[dayOne.getMonth()];
            var dayTwoDate = (today.getDate() + 2);
            var dayOne = new Date(today);
            var dayThreeMonth = month[dayOne.getMonth()];
            var dayThreeDate = (today.getDate() + 3);
            var dayFour = new Date(today);
            var dayFourMonth = month[dayOne.getMonth()];
            var dayFourDate = (today.getDate() + 4);
            var dayFive = new Date(today);
            var dayFiveMonth = month[dayOne.getMonth()];
            var dayFiveDate = (today.getDate() + 5);

                

                $('#dayOneMetric').append(dayOneMonth + " " + dayOneDate);              
                $('#dayTwoMetric').append(dayTwoMonth + " " + dayTwoDate);              
                $('#dayThreeMetric').append(dayThreeMonth + " " + dayThreeDate);               
                $('#dayFourMetric').append(dayFourMonth + " " + dayFourDate);              
                $('#dayFiveMetric').append(dayFiveMonth + " " + dayFiveDate);

            }
        

    function loadForecastImperial(zipcode) { 
            $('td').empty();              
            $.ajax({
            type: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zipcode + ',us&APPID=88252b42059a6035da42a637db7a7923&units=imperial',
            success: function (weatherForecast) {

            var dayOneConditions = weatherForecast.list[4].weather[0].description;
            var dayTwoConditions = weatherForecast.list[12].weather[0].description;
            var dayThreeConditions = weatherForecast.list[20].weather[0].description;
            var dayFourConditions = weatherForecast.list[28].weather[0].description;
            var dayFiveConditions = weatherForecast.list[36].weather[0].description;

            var dayOneIcon = weatherForecast.list[4].weather[0].icon;
            var dayOneImage = new Image();
            dayOneImage.src="http://openweathermap.org/img/w/" + dayOneIcon + ".png";

            var dayTwoIcon = weatherForecast.list[12].weather[0].icon;
            var dayTwoImage = new Image();
            dayTwoImage.src="http://openweathermap.org/img/w/" + dayTwoIcon + ".png";

            var dayThreeIcon = weatherForecast.list[20].weather[0].icon;
            var dayThreeImage = new Image();
            dayThreeImage.src="http://openweathermap.org/img/w/" + dayThreeIcon + ".png";

            var dayFourIcon = weatherForecast.list[28].weather[0].icon;
            var dayFourImage = new Image();
            dayFourImage.src="http://openweathermap.org/img/w/" + dayFourIcon + ".png";

            var dayFiveIcon = weatherForecast.list[36].weather[0].icon;
            var dayFiveImage = new Image();
            dayFiveImage.src="http://openweathermap.org/img/w/" + dayFiveIcon + ".png";

                        
            var dayOneHi = Math.round(weatherForecast.list[5].main.temp_max);
            var dayOneLo = Math.round(weatherForecast.list[1].main.temp_min);

            var dayTwoHi = Math.round(weatherForecast.list[13].main.temp_max);
            var dayTwoLo = Math.round(weatherForecast.list[9].main.temp_min);

            var dayThreeHi = Math.round(weatherForecast.list[21].main.temp_max);
            var dayThreeLo = Math.round(weatherForecast.list[17].main.temp_min);

            var dayFourHi = Math.round(weatherForecast.list[29].main.temp_max);
            var dayFourLo = Math.round(weatherForecast.list[25].main.temp_min);

            var dayFiveHi = Math.round(weatherForecast.list[37].main.temp_max);
            var dayFiveLo = Math.round(weatherForecast.list[33].main.temp_min);

                        
                        

                        $('#dayOneIcon').append(dayOneImage)
                        $('#dayTwoIcon').append(dayTwoImage)
                        $('#dayThreeIcon').append(dayThreeImage)
                        $('#dayFourIcon').append(dayFourImage)
                        $('#dayFiveIcon').append(dayFiveImage)

                        $('#dayOneConditions').append(dayOneConditions);
                        $('#dayTwoConditions').append(dayTwoConditions);
                        $('#dayThreeConditions').append(dayThreeConditions);
                        $('#dayFourConditions').append(dayFourConditions);
                        $('#dayFiveConditions').append(dayFiveConditions);

                        
                        $('#dayOneHi').append("Hi " + dayOneHi + " F")
                        $('#dayOneLo').append("Lo " + dayOneLo + " F")
                        $('#dayTwoHi').append("Hi " + dayTwoHi + " F")
                        $('#dayTwoLo').append("Lo " + dayTwoLo + " F")
                        $('#dayThreeHi').append("Hi " + dayThreeHi + " F")
                        $('#dayThreeLo').append("Lo " + dayThreeLo + " F")
                        $('#dayFourHi').append("Hi " + dayFourHi + " F")
                        $('#dayFourLo').append("Lo " + dayFourLo + " F")
                        $('#dayFiveHi').append("Hi " + dayFiveHi + " F")
                        $('#dayFiveLo').append("Lo " + dayFiveLo + " F")
                            
                    },
                    
                    error: function () {
                        $('#errorMessage').show();
                        $('#errorMessage').addClass("list-group-item list-group-item-danger");
                        $('#errorMessage').append("  Error contacting web service for the forecast.  Please try again later.");
        
                        }
                    });
                
                }

    function loadForecastMetric(zipcode) {
                    $('td').empty();              
                    $.ajax({
                        type: 'GET',
                        url: 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zipcode + ',us&APPID=88252b42059a6035da42a637db7a7923&units=metric',
                        success: function (weatherForecast) {
    
                            var dayOneConditions = weatherForecast.list[4].weather[0].description;
                            var dayTwoConditions = weatherForecast.list[12].weather[0].description;
                            var dayThreeConditions = weatherForecast.list[20].weather[0].description;
                            var dayFourConditions = weatherForecast.list[28].weather[0].description;
                            var dayFiveConditions = weatherForecast.list[36].weather[0].description;
    
                            var dayOneIcon = weatherForecast.list[4].weather[0].icon;
                            var dayOneImage = new Image();
                            dayOneImage.src="http://openweathermap.org/img/w/" + dayOneIcon + ".png";
    
                            var dayTwoIcon = weatherForecast.list[12].weather[0].icon;
                            var dayTwoImage = new Image();
                            dayTwoImage.src="http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
    
                            var dayThreeIcon = weatherForecast.list[20].weather[0].icon;
                            var dayThreeImage = new Image();
                            dayThreeImage.src="http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
    
                            var dayFourIcon = weatherForecast.list[28].weather[0].icon;
                            var dayFourImage = new Image();
                            dayFourImage.src="http://openweathermap.org/img/w/" + dayFourIcon + ".png";
    
                            var dayFiveIcon = weatherForecast.list[36].weather[0].icon;
                            var dayFiveImage = new Image();
                            dayFiveImage.src="http://openweathermap.org/img/w/" + dayFiveIcon + ".png";
    
                            
                            var dayOneHi = Math.round(weatherForecast.list[5].main.temp_max);
                            var dayOneLo = Math.round(weatherForecast.list[1].main.temp_min);
    
                            var dayTwoHi = Math.round(weatherForecast.list[13].main.temp_max);
                            var dayTwoLo = Math.round(weatherForecast.list[9].main.temp_min);
    
                            var dayThreeHi = Math.round(weatherForecast.list[21].main.temp_max);
                            var dayThreeLo = Math.round(weatherForecast.list[17].main.temp_min);
    
                            var dayFourHi = Math.round(weatherForecast.list[29].main.temp_max);
                            var dayFourLo = Math.round(weatherForecast.list[25].main.temp_min);
    
                            var dayFiveHi = Math.round(weatherForecast.list[37].main.temp_max);
                            var dayFiveLo = Math.round(weatherForecast.list[33].main.temp_min);
    
                             
    
                            $('#dayOneIconMetric').append(dayOneImage)
                            $('#dayTwoIconMetric').append(dayTwoImage)
                            $('#dayThreeIconMetric').append(dayThreeImage)
                            $('#dayFourIconMetric').append(dayFourImage)
                            $('#dayFiveIconMetric').append(dayFiveImage)
    
                            $('#dayOneConditionsMetric').append(dayOneConditions);
                            $('#dayTwoConditionsMetric').append(dayTwoConditions);
                            $('#dayThreeConditionsMetric').append(dayThreeConditions);
                            $('#dayFourConditionsMetric').append(dayFourConditions);
                            $('#dayFiveConditionsMetric').append(dayFiveConditions);
    
                            
                            $('#dayOneHiMetric').append("Hi " + dayOneHi + " C")
                            $('#dayOneLoMetric').append("Lo " + dayOneLo + " C")
                            $('#dayTwoHiMetric').append("Hi " + dayTwoHi + " C")
                            $('#dayTwoLoMetric').append("Lo " + dayTwoLo + " C")
                            $('#dayThreeHiMetric').append("Hi " + dayThreeHi + " C")
                            $('#dayThreeLoMetric').append("Lo " + dayThreeLo + " C")
                            $('#dayFourHiMetric').append("Hi " + dayFourHi + " C")
                            $('#dayFourLoMetric').append("Lo " + dayFourLo + " C")
                            $('#dayFiveHiMetric').append("Hi " + dayFiveHi + " C")
                            $('#dayFiveLoMetric').append("Lo " + dayFiveLo + " C")
                                
                        },
                        
                        error: function () {
                            $('#errorMessage').show();
                            $('#errorMessage').addClass("list-group-item list-group-item-danger");
                            $('#errorMessage').append("  Error contacting web service for the forecast.  Please try again later.");
            
                            }
                        });
                    
                    }    

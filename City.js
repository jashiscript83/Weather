var app = new Vue({
    el: '#app',
    data: {
        weather: {},
        city: "",
        temperature: "",
        place: "",
        maxtemp: "",
        mintemp: "",
        sky: "",
        humidity:"",
    },
    created: function () {

    },

    methods: {

        getData: function () {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=e9e1c563afe4db3846c183d1924911dd", {
                method: "GET"

            }).then(function (response) {
                if (response.ok) {
                    console.log(2);

                    return response.json();
                }

            }).then(function (json) {
                app.weather = json;


                app.temperature = app.weather.main.temp - 273, 15
                app.place = app.weather.name
                app.temperature = Math.round(app.temperature)
                app.maxtemp = app.weather.main.temp_max - 273, 15
                app.mintemp = app.weather.main.temp_min - 273, 15
                app.humidity = app.weather.main.humidity
                app.maxtemp = Math.round(app.maxtemp)
                app.mintemp = Math.round(app.mintemp)
                app.sky = app.weather.weather[0.].main



            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            });


        },

    }
})

//THIS IS FOR RETURNING MULTIPLE RESULTS AND THEN LOAD INTO A GRID

//var testMovieReq = "http://www.omdbapi.com/?t=clerks&y=&plot=short&r=json";   HARD CODED TITLE FOR TEST
var movieTitleSearch = "http://www.omdbapi.com/?t=";

function getMovie() {
    //added preventDefault because it would refresh and lose the data
    event.preventDefault();
    //searched value
    var movieTitle = document.getElementById("searchBox").value;



    var movieResults = $.getJSON(movieTitleSearch + movieTitle, function() {
            console.log("success");
        })
        .done(function(data) {
            console.log("testMovieReq");
            console.log(data);

            $("#title").text(data.Title);
            $("#director").text(data.Director);
            $("#plot").text(data.Plot);
            $("#year").text(data.Year);
document.getElementById("poster").src = data.poster;
            //           drawTable(data);  GAVE UP ON THIS FOR NOW
            genreStylize(data.Genre);

        })
        .fail(function(data) {
            console.log("failed");
        })

/*    function drawTable(data) {
        for (var i = 0; i < data.length; i++) {
            drawRow(data[i]);
        }
    }

    function drawRow(rowData) {
        var row = $("<tr />")
        $("#movieData").append(row);
        row.append($("<td>" + rowData.Title + "</td>"));
        row.append($("<td>" + rowData.Director + "</td>"));
        row.append($("<td>" + rowData.Plot + "</td>"));
    }*/

    function genreStylize(genre) {
        if (genre == "Comedy") {
            document.getElementById("movieBanner").src = "../resources/images/comedies.jpeg";
        } else if (genre.search("Horror") > -1) {
            document.getElementById("movieBanner").src = "../resources/images/moviebanner.jpg";
        } else {
            document.getElementById("movieBanner").src = "../resources/images/generalmovies.jpg";
            console.log("Genre not captured " + genre);
}

        }

    };
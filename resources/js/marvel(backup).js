var cache = [];
var ts = new Date().getTime();
var PRIV_KEY = "6482c5f5f83080fa0a9bcf72de829c950ee0b3ca";
var API_KEY = "87165c2531d309ddf02d84f4ae2c5e02";
var hash = CryptoJS.MD5(ts + PRIV_KEY + API_KEY);

function getMarvelResponse() {
    var apiKey = "87165c2531d309ddf02d84f4ae2c5e02";
    var titleKeyword = "wolverine";
    //FIX ONE BELOW
    //var url = "http://gateway.marvel.com/v1/public/comics?ts="+ts+"&hash="+hash+"&apikey="+apiKey;
    //HARD CODED
    var url = "http://gateway.marvel.com/v1/public/comics?ts=1457734667935&hash=eddbbddc7ce27ce093e3975f4302a301&apikey=87165c2531d309ddf02d84f4ae2c5e02&title=wolverine";
    alert(hash);
    alert(url);
    console.log(url);
    $.ajax({
        type: "GET",
        dataType: 'json',
        cache: true,
        url: url})

        .done(function(data) { // Variable data contains the data we get from serverside
              $('#results').html(''); // Clear #wines div

            //  if (button == 'all') { // If clicked buttons value is all, we post every wine
                for (var i in data) {
                  $('#results').append('Red wine: ' + data.title[i] + '<br/>');
                }




/*        success: function(data) {
            alert('success');
            console.log(data);
            error: console.log('fail');
            fail: console.log('fail');
        }*/
    });
}
//when the user searches a keyword, it shows what type of software dev jobs they can get


$("#submit").on("click",function(e){
   e.preventDefault();
var apiKey = 	"9efdf5bac29e2ff8318900ff4d04c922c2b1366f89d2f7a0a902c96c65e726a9"
var jobCategory = $("#category").val();
var pageNum = $("#pages").val();
var location = $("#location").val();
var apiURL = "https://api-v2.themuse.com/jobs?category=" +jobCategory + "&page=" +pageNum+ "&location=" +encodeURIComponent(location)+ "&api_key=" +apiKey
  $(".inputText").val('');

  $.ajax({

       url: apiURL,

       success: function(response){

         response.results.forEach(function(e){
           console.log(e);

          $("ol").append("<h4>"+e.name+"</h4>")

          $("ol").append("<a href=>" +e.refs.landing_page+"</a>")
           $("ol").append("<p>" +e.contents+"</p>")




         })

       },

       error: function(r){
         console.log(r);
       }


  })
})
$("#reset").on("click",function(e){
   e.preventDefault();
   $("ol").remove()
 })

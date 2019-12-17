try{
    
/* poista itemi listalta */

var close = $(".delbtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    (this).closest('li').toggleClass('strike').fadeOut('slow', function() { $(this).remove(); });
  }
}
    

// uuden taskin luonti, add-nappia painaessa

function newTask() {
    
    //hae inputista teksti
  var addlistItem = $("<li></li>");
  var inputValue = $("#myInput").val();
  var create = (inputValue);
    
    //uusi checkboxi
    var newcheck = $("<input type=\"checkbox\"></input>");
    newcheck.css("marginRight=30px");
    addlistItem.append(newcheck);
    
    //luodaan uusi delete nappula
    var newdelete = $("<button></button>");
    newdelete.html("Delete");
    newdelete.css("backgroundColor =cornsilk");
    newdelete.css("float = right");
    newdelete.css("padding = 4px 10px 4px 10px");
    newdelete.css("fontSize = 15px");
    newdelete.addClass("delbtn");
    $(document).ready(function () {
      $('.delbtn').click(function (event) { 
        $(this).closest('li').toggleClass('strike').fadeOut('slow', function() { $(this).remove(); });
});
        //(this).closest("li").remove();
      });


    var blaa = addlistItem.append(create);
      blaa.hide();
      blaa.stop().fadeTo('slow',1);
    var bloo = addlistItem.append(newdelete);
      bloo.hide();
      bloo.stop().fadeTo('slow',1);
    var blee = addlistItem.append(newcheck);
      blee.hide();
      blee.stop().fadeTo('slow',1);

    
   //jos käyttäjä ei syötä mitään, ilmoitetaan siitä 
  if (inputValue === '') {
    alert("Write something!");
  } else {
    $("#listItems").append(addlistItem);
  }
    
  //tyhjennetään tekstikenttä
  var inputValue = $("#myInput").val("");

} 
   //tsekataan errorit 
}catch(error){
    alert("Jotain meni vikaan, päivitä sivu.");
}
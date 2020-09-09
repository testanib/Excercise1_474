$(function onLoad(){
    //this code runs after page is fully loaded

    $("#nameform").on('submit', function(event){
        event.preventDefault();
        alert("Submitted");
        var fname=$('#fname').val();
        var lname=$('#lname').val();
        var newHTML='<h1>'+fname+ ' '+lname+'</h1>';
        $(".jumbotron").removeClass('d-none').html(newHTML);
    });
    
    return false;
    //$("#jumbotron").removeClass('d-none');
    //$('#jumbotron').toggle();
    //document.getElementById("jumbotron").style.display = 'none !important';
});
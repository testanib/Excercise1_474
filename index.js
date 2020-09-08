$(function onLoad(){
    //this code runs after page is fully loaded
    $("form").submit(function(){
        alert("Submitted");
        $("#jumbotron").removeClass('d-none');
    });
    
    document.getElementById("nameform").addEventListener('submit', function(event){
        event.preventDefault();
    });

    //$("#jumbotron").removeClass('d-none');
    //$('#jumbotron').toggle();
    //document.getElementById("jumbotron").style.display = 'none !important';
});
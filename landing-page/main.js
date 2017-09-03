$(document).ready(function(){
    $("#clickTitle").on('click', function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;

            $('html,body').animate({
                scrollTop:
                $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});


$(document).ready(function(){
    $(".card").hover(function(){
        $(this).css("display", "none");
    })
})
$(document).ready(function(){

    $("a").click(function(event){
            event.preventDefault()

        var gato= this.hash;

        $("html").animate({
            scrollTop: $(gato).offset ().top -60,

        },1000); 

    })
})

return new bootstrap.Tooltip(tooltipTriggerEl)

return new bootstrap.Popover(popoverTriggerEl)
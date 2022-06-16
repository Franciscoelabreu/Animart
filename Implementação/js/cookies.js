$(window).on('load',function(){
    var delayMs = 1500; // Não aparecer logo no instante em que abrimos a página.

    setTimeout(function(){
        $('#myModal').modal('show');
    }, delayMs);
});
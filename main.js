window.onload = function(){
    
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    var span = document.getElementsByClassName("close_")[0];
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    if ($('.bdePB5')) {
        $('.bdePB5').on('click', function(e){
            var text_ = $(this).text()
            console.log(text_)
            navigator.clipboard.writeText(text_);
        })
    }  

    
    if ($('.mobile')) {
        $('.mobile').on('click', function(e){
            $(this).toggleClass('active')
            $('.panel').toggleClass('active')
        })
    }
   
}
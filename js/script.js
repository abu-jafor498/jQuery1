// jquery

// ex 1
$(document).ready(function(){
    alert("hello guys");
})

// ex 2
$(document).ready(function(){
    $('#ale').click(function(){
        alert('hello');
    })
})
// ex 3
$(document).ready(function(){
    $('#hide').on('click', function(){
        $('.te').hide();
    })
})

// ex 4
$(document).ready(function(){
    $('#sh').on('click', function(){
        $('.show').show();
    })
})

// ex 5
$(document).ready(function(){
    $('#m_over').mouseenter (function(){
      $(this).css("font-size", "20px");
    })
})

// ex 6
$(document).ready(function(){
    $('#m_leave').mouseleave (function(){
        $(this).css("color", "red");
    })
})

// ex 7
$(document).ready(function(){
    $('.div').hover (function(){
        $(this).css("background-color", "yellow");
    })
})

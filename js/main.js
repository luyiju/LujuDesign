

// Loading
document.onreadystatechange = subSomething;

function subSomething() {
    //當頁面加載狀態
    if (document.readyState == "complete") {
        //延遲一秒關閉loading
        $('#loading_all').delay(0).hide(0);
        $('.spinner').delay(0).fadeOut('slow');
    }
}


$(window).load(function() {
    $('#loading_all').delay(100).hide(0);
    setTimeout(function() {
        $('body').removeClass("scoll_dis");
    }, 100);
});


//阻止触摸事件  
document.addEventListener("touchmove", myFunction);

function myFunction(e) {
    e.preventDefault();
}

//解除触摸锁定  
document.removeEventListener("touchmove", myFunction);

// Menu Bar
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


// Projects-filter
$(window).load(function() {
    var $container = $('.Projects-container');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.Projects-filter a').click(function() {
        $('.Projects-filter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});



// ====================================Projects Modal=========================================================================

$(function() {
  //----- OPEN
  $('[data-popup-open]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
        $(document).on('click','.Projects-cover',function(){
            $('body').css('overflow', 'hidden');
        });
         $(document).on('click','.popup-close',function(){
            $('body').css('overflow', 'auto');
        });
});

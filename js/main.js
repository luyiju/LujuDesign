

// Loading
document.onreadystatechange = subSomething;

function subSomething() {
    //當頁面加載狀態
    if (document.readyState == "complete") {
        //延遲一秒關閉loading
        $('#loading_all').delay(1300).hide(0);
        $('.spinner').delay(1300).fadeOut('slow');
    }
}


$(window).load(function() {
    $('#loading_all').delay(300).hide(0);
    setTimeout(function() {
        $('body').removeClass("scoll_dis");
    }, 300);
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



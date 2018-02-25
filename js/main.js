
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
// ======Website===============/////////
// Lime-Get the modal
var modal = document.getElementById('LimeModal');

// Get the button that opens the modal
var btn = document.getElementById("Lime");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Starts-Get the modal
// var modal = document.getElementById('StarsModal');

// // Get the button that opens the modal
// var btn = document.getElementById("Starts");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// ======Art Work===============/////////
// Night-Get the modal
// var modal = document.getElementById('NightModal');

// // Get the button that opens the modal
// var btn = document.getElementById("Night");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
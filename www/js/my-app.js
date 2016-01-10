var base_url = "http://kreaserv.in/megazolid_admin/";
var Timer;
var email_id = '';
var uniq_id = '';
var page_id = 1;
var l1, l2, l3, l4, l5 = '';
var t = 0;
var dummy_var = 0;
var correct_words = '';
var correct_ans = 0;
var myApp = new Framework7({
    material: true,
    materialPageLoadDelay: 200,
    sortable: false,
    swipeout: false,
});

var $$ = Dom7;
var toast = myApp.toast();

var mainView = myApp.addView('.view-main', {
    domCache: false
});

myApp.onPageInit('introslide', function (page) {
    responsiveVoice.speak("Dear Doctor In next 10 seconds you will hear 5 unique features of megaheal that make megaheal. Superior to other topical wound care products. Remember these features and in next 20 seconds try to find them on the screen. If you able to find all 5 features you will be awarded a special gift.");
    $('.intro_next').click(function() {
        mainView.router.loadPage('q1.html');
    });
});

myApp.onPageInit('question_1', function (page) {
    if (page_id == 1) {
        l1 = 'Silversol Technology';
        l2 = 'USFDA approved';
        l3 = 'Nanosilver';
        l4 = '32 ppm';
        l5 = 'American Biotech Labs';
        page_id = 2;
        var characters = 'First - '+l1+'. Second - '+l2+'. Third - '+l3+'. Fourth - '+l4+'. Fifth - '+l5+' .';
    } else if (page_id == 2) {
        l1 = 'Patented';
        l2 = 'Surgical wounds';
        l3 = '32 ppm';
        l4 = 'Faster healing';
        l5 = 'Least toxic';
        page_id = 3;
        var characters = 'First - '+l1+'. Second - '+l2+'. Third - '+l3+'. Fourth - '+l4+'. Fifth - '+l5+' .';
    } else if (page_id == 3) {
        l1 = 'Scarless healing';
        l2 = 'Antiseptic';
        l3 = 'Moist wound healing';
        l4 = 'Collagen synthesis';
        l5 = 'Patented';
        page_id = 4;
        var characters = 'First - '+l1+'. Second - '+l2+'. Third - '+l3+'. Fourth - '+l4+'. Fifth - '+l5+' .';
    } else if (page_id == 4) {
        l1 = 'Traumatic wounds';
        l2 = 'Clear gel';
        l3 = 'Faster healing';
        l4 = 'Antimicrobial';
        l5 = 'Granulation tissue formation';
        page_id = 5;
        var characters = 'First - '+l1+'. Second - '+l2+'. Third - '+l3+'. Fourth - '+l4+'. Fifth - '+l5+' .';
    } else if (page_id == 5) {
        l1 = 'Nanosilver';
        l2 = 'Atibiofilm';
        l3 = 'Burns';
        l4 = 'USFDA approved';
        l5 = 'Least toxic';
        page_id = 1;
        var characters = 'First - '+l1+'. Second - '+l2+'. Third - '+l3+'. Fourth - '+l4+'. Fifth - '+l5+' .';
    }

    $('.letter-one').text(l1);
    $('.letter-two').text(l2);
    $('.letter-three').text(l3);
    $('.letter-four').text(l4);
    $('.letter-five').text(l5);

    responsiveVoice.speak(characters);

    correct_words = [l1, l2, l3, l4, l5];
    Timer = new radialTimer();
    Timer.init("q1_timer", 10, function(){mainView.router.load({url:'q2.html'})});
});

myApp.onPageInit('gameover', function (page) {
    Timer = new radialTimer();
    Timer.init("go_timer", 5, function(){mainView.router.load({url:'index.html'})});
});

myApp.onPageInit('thankyou', function (page) {
    var msg = 'You have identified '+correct_ans+' correct words. Thanks for participating Megaheal ensures faster healing superior healing';
    $('.thankyou_msg').html(msg);
    // console.log("Time remaining"+t);
    Timer = new radialTimer();
    Timer.init("ty_timer", 5, function(){mainView.router.load({url:'index.html'})});
});

myApp.onPageInit('question_2', function (page) {
    correct_ans = 0;

    $('.allwords').click(function() {
        for (var i = 0; i < correct_words.length; i++) {
            console.log(correct_ans);
            if (correct_words[i] == $(this).text()) {
                $(this).css('color', 'green');
                correct_ans += 1;
                t = $('#q2_timer').text();
                // if (correct_ans == 5) {
                //     Timer = new radialTimer();
                //     Timer.init("ty_timer", 5, function(){mainView.router.load({url:'index.html'})});
                //     mainView.router.loadPage('thankyou.html');
                // }
                return false;
            } else {
                $(this).css('color', 'red');
            }
        };
    });
    Timer = new radialTimer();
    Timer.init("q2_timer", 20, function(){mainView.router.load({url:'thankyou.html'})});
});

// myApp.onPageInit('userdetails', function (page) {
//     $('.user_details_check').click(function(e){
//         var errors = 0;
//         var phoneno = /^\d{10}$/;
//         var em_val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if ($('#txt-place').val() == 'administrator') {
//             dummy_var = 1;
//             mainView.router.loadPage('upload.html');
//         }
//         if(!$('#txt-name').val()){
//             toast.show("Please enter your name");
//             return false;
//         }else if(!$('#txt-mobile').val()){
//             toast.show("Please enter your mobile number");
//             return false;
//         }else if(!$('#txt-mobile').val().match(phoneno)){  
//             toast.show("Please enter your valid Contact Number");
//             return false;
//         }else if(!$('#txt-email').val()){  
//             toast.show("Please enter your Email Id");
//             return false;
//         }else if(!$('#txt-email').val().match(em_val)){  
//             toast.show("Please enter your valid Email Id");
//             return false;
//         }else if(!$('#txt-place').val()){
//             toast.show("Please enter your Place");
//             return false;
//         }else{
//             uniq_id = 'megaheal-app-uniq-id-'+$('#txt-place').val()+'-'+$('#txt-mobile').val()+'-'+$('#txt-name').val();
//             email_id = 'megaheal-app-email-id-'+$('#txt-place').val()+'-'+$('#txt-mobile').val();
//             console.log(uniq_id);
//             console.log(email_id);
//             // Lockr.set(email_id, [{name: $('#txt-name').val(), place: $('#txt-place').val(), mobile: $('#txt-mobile').val()}]);
//             mainView.router.loadPage('intro_slide.html');
//         }
//     })
// });
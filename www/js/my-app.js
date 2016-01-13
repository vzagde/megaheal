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
    pager_id = 7;
    playAudio(pager_id);
    $('.intro_next').click(function() {
        mainView.router.loadPage('q1.html');
    });
});

myApp.onPageInit('question_1', function (page) {
    playAudio(page_id);
    if (page_id == 1) {
        l1 = 'Silversol Technology';
        l2 = 'USFDA approved';
        l3 = 'Nanosilver';
        l4 = '32 ppm';
        l5 = 'American Biotech Labs';
        page_id = 2;
    } else if (page_id == 2) {
        l1 = 'Patented';
        l2 = 'Surgical wounds';
        l3 = '32 ppm';
        l4 = 'Faster healing';
        l5 = 'Least toxic';
        page_id = 3;
    } else if (page_id == 3) {
        l1 = 'Scarless healing';
        l2 = 'Antiseptic';
        l3 = 'Moist wound healing';
        l4 = 'Collagen synthesis';
        l5 = 'Patented';
        page_id = 4;
    } else if (page_id == 4) {
        l1 = 'Traumatic wounds';
        l2 = 'Clear Gel';
        l3 = 'Faster healing';
        l4 = 'Antimicrobial';
        l5 = 'Granulation tissue formation';
        page_id = 5;
    } else if (page_id == 5) {
        l1 = 'Nanosilver';
        l2 = 'Antimicrobial';
        l3 = 'Burns';
        l4 = 'USFDA approved';
        l5 = 'Least toxic';
        page_id = 1;
    }
    var characters = 'First - '+l1+' Second - '+l2+' Third - '+l3+' Fourth - '+l4+' Fifth - '+l5+' .';
    $('.letter-one').text(l1);
    $('.letter-two').text(l2);
    $('.letter-three').text(l3);
    $('.letter-four').text(l4);
    $('.letter-five').text(l5);

    correct_words = [l1, l2, l3, l4, l5];
    Timer = new radialTimer();
    Timer.init("q1_timer", 10, function(){mainView.router.load({url:'q2.html'})});
});

myApp.onPageInit('gameover', function (page) {
    Timer = new radialTimer();
    Timer.init("go_timer", 5, function(){mainView.router.load({url:'index.html'})});
});

myApp.onPageInit('thankyou', function (page) {
    var msg = 'You have identified '+correct_ans+' correct words. Thanks for participating <img src="img/Logo.png" alt="" style="width:60%;">';
    $('.thankyou_msg').html(msg);
    Timer = new radialTimer();
    Timer.init("ty_timer", 5, function(){mainView.router.load({url:'index.html'})});
});

myApp.onPageInit('question_2', function (page) {
    correct_ans = 0;

    $('.allwords').click(function() {
        for (var i = 0; i < correct_words.length; i++) {
            console.log(correct_ans);
            if (correct_words[i] == $(this).text()) {
                if (correct_ans < correct_words.length) {
                    correct_ans += 1;
                    t = $('#q2_timer').text();
                }
                $(this).css('color', 'green');
                return false;
            } else {
                if (correct_ans < correct_words.length) {
                    $(this).css('color', 'red');
                }
            }
        };
    });
    Timer = new radialTimer();
    Timer.init("q2_timer", 20, function(){mainView.router.load({url:'thankyou.html'})});
});

function playAudio(tune){
    var myAudio = new Audio();
    myAudio.src = 'mp3/tune7.mp3';
    myAudio.load();
    myAudio.correctDuration = null;

    myAudio.addEventListener('canplay', function(){
        myAudio.play();
        myAudio.muted = true;
        setTimeout(function(){
            console.log("Audio Played 1");
            myAudio.pause();
            myAudio.currentTime = 0;
            myAudio.muted = false;
            myAudio.correctDuration = myAudio.duration;
        },100000);
    });
    // if (tune == 1) {
    //     var myaudio = new Audio('mp3/tune1.mp3');
    //     try {
    //         myaudio.id = 'playerMyAdio';
    //         myaudio.play();
    //         console.log("Audio Played 1");
    //     } catch (e) {
    //         console.log("Audio Could not played");
    //     }
    // } else if (tune == 2) {
    //     var myaudio = new Audio('mp3/tune2.mp3');
    //     try {
    //         myaudio.id = 'playerMyAdio';
    //         myaudio.play();
    //         console.log("Audio Played 2");
    //     } catch (e) {
    //         console.log("Audio Could not played");
    //     }
    // } else if (tune == 3) {
    //     var myaudio = new Audio('mp3/tune3.mp3');
    //     try {
    //         myaudio.id = 'playerMyAdio';
    //         myaudio.play();
    //         console.log("Audio Played 3");
    //     } catch (e) {
    //         console.log("Audio Could not played");
    //     }
    // } else if (tune == 4) {
    //     var myaudio = new Audio('mp3/tune4.mp3');
    //     try {
    //         myaudio.id = 'playerMyAdio';
    //         myaudio.play();
    //         console.log("Audio Played 4");
    //     } catch (e) {
    //         console.log("Audio Could not played");
    //     }
    // } else if (tune == 5) {
    //     var myaudio = new Audio('mp3/tune5.mp3');
    //     try {
    //         myaudio.id = 'playerMyAdio';
    //         myaudio.play();
    //         console.log("Audio Played 5");
    //     } catch (e) {
    //         console.log("Audio Could not played");
    //     }
    // } else if (tune == 7) {
    //     var myaudio = new Audio('mp3/tune7.mp3');
    //     try {
    //         myaudio.id = 'playerMyAdio';
    //         myaudio.play();
    //         console.log("Audio Played 7");
    //     } catch (e) {
    //         console.log("Audio Could not played");
    //     }
    // }
}
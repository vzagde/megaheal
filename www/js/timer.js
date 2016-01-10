
function radialTimer() {
    var self = this;

    this.seconds = 0;
    this.count = 0;
    this.degrees = 0;
    this.interval = null;
    this.timerHTML = "<div class='n'></div><div class='slice'><div class='q'></div><div class='pie r'></div><div class='pie l'></div></div>";
    this.timerContainer = null;
    this.number = null;
    this.slice = null;
    this.pie = null;
    this.pieRight = null;
    this.pieLeft = null;
    this.quarter = null;

    this.init = function(e, s, c) {
        self.timerContainer = $("#" + e);
        self.timerContainer.html(self.timerHTML);
        
        self.number = self.timerContainer.find(".n");
        self.slice = self.timerContainer.find(".slice");
        self.pie = self.timerContainer.find(".pie");
        self.pieRight = self.timerContainer.find(".pie.r");
        self.pieLeft = self.timerContainer.find(".pie.l");
        self.quarter = self.timerContainer.find(".q");
        // start timer
        self.start(e,s,c);
    }

    this.start = function(e,s,c) {
        clearInterval(self.interval);
        self.seconds = s;
        self.interval = window.setInterval(function () {
            self.number.html(self.seconds - self.count);
            self.count++;
            if (dummy_var == 1) {
                clearInterval(self.interval);
                dummy_var = 0;
            }
            if (self.count > (self.seconds - 1)){
                clearInterval(self.interval);
                // Lockr.set(uniq_id, [{que: q1, ans: a1, time: t1, email: uniq_id}, {que: q4, ans: a4, time: t4, email: uniq_id}]);
                c();
            }
            self.degrees = self.degrees + (360 / self.seconds);
            if (self.count >= (self.seconds / 2)) {
                self.slice.addClass("nc");
                if (!self.slice.hasClass("mth")) self.pieRight.css({"transform":"rotate(180deg)"});
                self.pieLeft.css({"transform":"rotate(" + self.degrees + "deg)"});
                self.slice.addClass("mth");
                if (self.count >= (self.seconds * 0.75)) self.quarter.remove();
            } else {
                self.pie.css({"transform":"rotate(" + self.degrees + "deg)"});
            }
        }, 1000);
    }
}

var Timer;
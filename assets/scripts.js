new Vue({
  el: '#app',
  data() {
    return {
      workTime: 25,
      breakTime: 5,
      currentTime: '',
      timeOut: '',
      interval: '',
      sessionType: 'init',
      SessionDescription: 'Session Description'
    };
  },
  methods: {
    workTimeChange: function(t) {
      this.workTime += t;
      if (this.workTime < 1) {
        this.workTime = 1;
      } else if (this.workTime > 60) {
        this.workTime = 60;
      }
    },
    breakTimeChange: function(t) {
      this.breakTime += t;
      if (this.breakTime < 1) {
        this.breakTime = 1;
      } else if (this.breakTime > 60) {
        this.breakTime = 60;
      }
    },
    displayTimer: function() {
      if (this.sessionType === 'init') {
        return this.workTime + ':00';
      }
      return this.currentTime;
    },
    remainingTime: function(end) {
      let timer = Date.parse(end) - Date.parse(new Date());
      let mins = Math.floor((timer / 1000 / 60) % 60);
      let secs = Math.floor((timer / 1000) % 60);

      return {
        'timer': timer,
        'mins': mins,
        'secs': secs
      };
    },
    startCountdown: function() {
      this.interval = setInterval(() => {
        let time = this.remainingTime(this.timeOut);
        this.currentTime = this.formatTime(time.mins) + ':' + this.formatTime(time.secs);

        if (time.timer <= 0) {
          clearInterval(this.interval);
          if (this.sessionType === 'work') {
            this.startBreak();
          } else if (this.sessionType === 'break') {
            this.startWork();
          }
        }
      }, 1000);
    },
    startWork: function() {
      this.sessionType = 'work';
      this.timeOut = new Date(Date.parse(new Date()) + (this.workTime * 60 * 1000));
      this.startCountdown();
    },
    startBreak: function() {
      this.sessionType = 'break';
      this.timeOut = new Date(Date.parse(new Date()) + (this.breakTime * 60 * 1000));
      this.startCountdown();
    },
    pauseTimer: function() {
      clearInterval(this.interval);
    },
    formatTime: function(v) {
      return (v < 10) ? '0' + v : v;
    }
  }
});

function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let startTimer = $('#start-timer');

    let interval = null;

    let stopTimer = $('#stop-timer');
    startTimer.on('click', function () {
        if(interval){
            clearInterval(interval) // това му казва, когато цъкнеме върху клика да не става нищо
        }
        interval = setInterval(updateTime, 1000);


    });
    stopTimer.on('click', function () {
        clearInterval(interval);
        interval = null;

    });

    function updateTime() {
        let secondVal = seconds.text();
        let minVal = minutes.text();
        let hoursVal = hours.text();

        seconds.text(`0${(+secondVal + 1)}`.slice(-2));
        if(secondVal >= 59){
            seconds.text('00');
            minutes.text(`0${(+minVal + 1)}`.slice(-2));
            if(minVal >= 59){
                minutes.text('00');
                hours.text(`0${(+hoursVal + 1)}`.slice(-2));
            }
        }
    }
}

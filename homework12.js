class CountdownTimer{
  constructor({ selector, targetDate }){
    this.targetDate = targetDate;
    this.refs ={
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
    };
    this.start();
  }
  start(){
    this.updateTimer();
    setInterval(() => this.updateTimer(), 1000);
  }
  updateTimer(){
    const time = this.targetDate - Date.now();

    if (time <= 0){
      this.render(0, '00', '00', '00');
      return;
    }
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.render(days, hours, mins, secs);
  }
  pad(value){
    return String(value).padStart(2, '0');
  }
  render(days, hours, mins, secs){
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2026'),
});
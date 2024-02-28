import { Input, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit,OnDestroy {
 /*  private countDownTime: number=0;
  private timerNumerics = {
    milliseconds: 1000,
    minuteInSeconds: 60,
    minutesInHours: 60,
    hoursInDay: 24
  };
  @Input() set time(value: string) {
    this.countDownTime = new Date(value).getTime();
  }

  get days(): string {
    const { milliseconds, minutesInHours, minuteInSeconds, hoursInDay } = this.timerNumerics;
    const days = Math.floor(this.getTimeDifference() / (
      milliseconds * minutesInHours * minuteInSeconds * hoursInDay
    ));

    return this.formatTime(days);
  }

  get hours(): string {
    const { milliseconds, minuteInSeconds, minutesInHours, hoursInDay } = this.timerNumerics;
    const hours = Math.floor(
      (this.getTimeDifference() % (hoursInDay * minutesInHours * minuteInSeconds * milliseconds)) /
      (minutesInHours * minuteInSeconds * milliseconds));

    return this.formatTime(hours);
  }

  get minutes(): string {
    const { milliseconds, minuteInSeconds, minutesInHours } = this.timerNumerics;
    const minutes = Math.floor(
      this.getTimeDifference() % (minutesInHours * minuteInSeconds * milliseconds) / (minuteInSeconds * milliseconds));

    return this.formatTime(minutes);
  }

  get seconds(): string {
    const { milliseconds, minuteInSeconds } = this.timerNumerics;
    const seconds = Math.floor((this.getTimeDifference() % (minuteInSeconds * milliseconds)) / milliseconds);

    return this.formatTime(seconds);
  }

  private getTimeDifference(): number {
    const currentTime = new Date().getTime();

    return this.countDownTime - currentTime;
  }

  private formatTime(value: number): string {
    return value < 10 ? `${value}` : `${value}`;
  } */
 @Input() countdownDate: Date = new Date('2024-03-01T00:00:00'); // Set your target countdown date here
  countdown: any;
  countdownDisplay: string = '';

  constructor() { }

  ngOnInit(): void {
    this.updateCountdown();
    this.countdown = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
  


  private getTimeDifference(): number {
    const now = new Date().getTime();
    const distance = this.countdownDate.getTime() - now;
    return distance;
  }
  
 
  updateCountdown() {
   
    const days = Math.floor(this.getTimeDifference() / (1000 * 60 * 60 * 24));
    const hours = Math.floor((this.getTimeDifference() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((this.getTimeDifference() % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((this.getTimeDifference() % (1000 * 60)) / 1000);
   
    this.countdownDisplay = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (this.getTimeDifference() < 0) {
      clearInterval(this.countdown);
      this.countdownDisplay = 'Countdown expired!';
    }
  }

  ngOnDestroy() {
    clearInterval(this.countdown);
  }
}
